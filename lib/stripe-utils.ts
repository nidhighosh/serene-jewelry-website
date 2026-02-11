import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

// Helper to initialize Stripe
export function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2024-12-15.acacia" as any,
  })
}

// Helper to format currency
export function formatPrice(amount: number, currency: string = "INR"): string {
  if (currency.toUpperCase() === "INR") {
    return `₹${amount.toLocaleString("en-IN")}`
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100)
}

// Helper to check if payment is successful
export function isPaymentSuccessful(status: string): boolean {
  return status === "paid" || status === "succeeded"
}
