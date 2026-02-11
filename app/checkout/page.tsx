"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentMethodsModal } from "@/components/payment-methods-modal"
import { ShoppingBag, AlertCircle, LogIn } from "lucide-react"
import { Loader2 } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { user, requireAuth, setShowSignupModal } = useAuth()
  const { items, totalPrice, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [orderData, setOrderData] = useState<any>(null)

  const handleCheckout = async () => {
    try {
      setIsProcessing(true)
      setError(null)

      if (!user) {
        setShowSignupModal(true)
        setIsProcessing(false)
        return
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          email: user.email,
          userProfile: {
            fullName: user.fullName,
            phone: user.phone,
            email: user.email,
          },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed")
      }

      // Store order data in localStorage for success page
      if (data.orderData) {
        localStorage.setItem(data.sessionId, JSON.stringify(data.orderData))
        setOrderData(data)
      }

      // Show payment methods modal
      setShowPaymentModal(true)
      setIsProcessing(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setIsProcessing(false)
    }
  }

  const handlePaymentComplete = () => {
    // Redirect to success page
    if (orderData?.sessionId) {
      window.location.href = `/checkout/success?session_id=${encodeURIComponent(orderData.sessionId)}`
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <ShoppingBag className="mx-auto mb-4 text-muted-foreground" size={48} />
            <CardTitle className="font-serif text-2xl">Your Bag is Empty</CardTitle>
            <CardDescription>Add items before proceeding to checkout</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/shop">
              <Button variant="default">Continue Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl text-foreground mb-8">Checkout</h1>

        <div className="grid gap-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-foreground">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-foreground">
                    ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-foreground">Total</p>
                  <p className="font-serif text-xl text-foreground">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          {user ? (
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium text-foreground">{user.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{user.phone}</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-yellow-600/20 bg-yellow-50/10">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <LogIn size={20} />
                  Sign Up Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Please sign up to proceed with checkout.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Error Message */}
          {error && (
            <Card className="border-red-500/20 bg-red-50/10">
              <CardHeader>
                <CardTitle className="font-serif text-sm flex items-center gap-2 text-red-600">
                  <AlertCircle size={18} />
                  Error
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600">{error}</p>
              </CardContent>
            </Card>
          )}

          {/* Checkout Button */}
          <div className="flex gap-4">
            <Link href="/shop" className="flex-1">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            <button
              onClick={handleCheckout}
              disabled={isProcessing || !user}
              className="flex-1 py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Processing...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </button>
          </div>

          {/* Info Message */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground">
                ✓ Your order will be confirmed and processed. You'll receive an order confirmation and tracking number via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Payment Methods Modal */}
      <PaymentMethodsModal 
        open={showPaymentModal}
        onComplete={handlePaymentComplete}
        isProcessing={isProcessing}
      />
    </div>
  )
}
