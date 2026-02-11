"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CreditCard, Smartphone, Building2, Loader2 } from "lucide-react"

interface PaymentMethodsModalProps {
  open: boolean
  onComplete: () => void
  isProcessing: boolean
}

export function PaymentMethodsModal({ open, onComplete, isProcessing }: PaymentMethodsModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
    },
    {
      id: "upi",
      name: "UPI",
      description: "Google Pay, PhonePe, Paytm",
      icon: Smartphone,
    },
    {
      id: "netbanking",
      name: "Net Banking",
      description: "All major banks supported",
      icon: Building2,
    },
  ]

  const handlePaymentSelect = async (methodId: string) => {
    setSelectedMethod(methodId)
    setIsProcessingPayment(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsProcessingPayment(false)
    onComplete()
  }

  return (
    <Dialog open={open && !isProcessing}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Select Payment Method</DialogTitle>
          <DialogDescription>
            Choose your preferred payment method to complete your order
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 py-4">
          {paymentMethods.map((method) => {
            const Icon = method.icon
            return (
              <button
                key={method.id}
                onClick={() => handlePaymentSelect(method.id)}
                disabled={isProcessingPayment}
                className="text-left"
              >
                <Card
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedMethod === method.id
                      ? "ring-2 ring-primary border-primary"
                      : "hover:border-primary"
                  } ${isProcessingPayment ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    {selectedMethod === method.id && isProcessingPayment && (
                      <Loader2 className="w-5 h-5 text-primary animate-spin flex-shrink-0" />
                    )}
                  </div>
                </Card>
              </button>
            )
          })}
        </div>

        {isProcessingPayment && selectedMethod && (
          <div className="py-4 text-center space-y-2">
            <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Processing payment...</p>
          </div>
        )}

        {!isProcessingPayment && !selectedMethod && (
          <p className="text-xs text-muted-foreground text-center py-2">
            Select a payment method to proceed
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}
