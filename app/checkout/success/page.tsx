"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

function SuccessContent() {
  const { clearCart } = useCart()
  const [orderData, setOrderData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Get session ID from query parameter
    const sessionId = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").get("session_id")

    if (!sessionId) {
      setError("No session ID found")
      setIsLoading(false)
      return
    }

    // Retrieve order data from localStorage
    const storedData = localStorage.getItem(sessionId)
    
    if (storedData) {
      try {
        const data = JSON.parse(storedData)
        setOrderData({
          sessionId: data.sessionId,
          status: "paid",
          amountTotal: data.totalAmount * 100, // Convert to paise for display
          currency: "inr",
          customerEmail: data.email,
          customerName: data.userProfile?.fullName || "Guest",
          createdAt: data.createdAt,
          items: data.items,
        })
        clearCart()
      } catch (err) {
        setError("Failed to parse order data")
      }
    } else {
      setError("Order data not found")
    }
    
    setIsLoading(false)
  }, [clearCart])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 animate-spin text-primary" size={48} />
          <p className="text-muted-foreground">Processing your order...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md border-red-500/20 bg-red-50/10">
          <CardHeader className="text-center">
            <AlertCircle className="mx-auto mb-4 text-red-600" size={48} />
            <CardTitle className="font-serif text-2xl text-red-600">Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/shop">
              <Button variant="default">Back to Shop</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-4">
              <CheckCircle className="text-green-600" size={64} />
            </div>
            <CardTitle className="font-serif text-3xl text-green-600">
              Order Confirmed!
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Thank you for your purchase
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Order Details */}
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-mono text-sm text-foreground truncate">
                    {orderData?.sessionId}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Order Date</p>
                  <p className="text-foreground">
                    {orderData?.createdAt && new Date(orderData.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Customer Name</p>
                <p className="text-foreground">{orderData?.customerName || "Guest"}</p>
              </div>

              {orderData?.items && orderData.items.length > 0 && (
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Items Ordered</p>
                  <div className="space-y-2">
                    {orderData.items.map((item: any) => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span className="text-foreground">
                          {item.product.name} x {item.quantity}
                        </span>
                        <span className="text-foreground">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">Order Total</p>
                <p className="font-serif text-2xl text-foreground">
                  ₹
                  {orderData?.amountTotal
                    ? (orderData.amountTotal / 100).toLocaleString("en-IN")
                    : "0"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Payment Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  <p className="font-medium text-green-600 capitalize">
                    {orderData?.status || "Processing"}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50/10 border border-blue-200/50 p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Order confirmation has been sent to your email</li>
                <li>✓ We'll ship your items within 2-3 business days</li>
                <li>✓ You'll receive a tracking number via email</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Link href="/profile" className="flex-1">
                <Button variant="outline" className="w-full">
                  View Orders
                </Button>
              </Link>
              <Link href="/shop" className="flex-1">
                <Button className="w-full">Continue Shopping</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="mx-auto mb-4 animate-spin text-primary" size={48} />
            <p className="text-muted-foreground">Loading order details...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
