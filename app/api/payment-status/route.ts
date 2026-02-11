import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("sessionId")

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID required" },
        { status: 400 }
      )
    }

    // Return mock payment status (always successful for demo)
    return NextResponse.json({
      sessionId,
      status: "paid",
      paymentStatus: "succeeded",
      amountTotal: null,
      amountSubtotal: null,
      currency: "inr",
      customerEmail: null,
      customerName: "Guest",
      createdAt: new Date(),
      expiresAt: null,
    })
  } catch (error) {
    console.error("Payment status error:", error)
    return NextResponse.json(
      { error: "Failed to fetch payment status" },
      { status: 500 }
    )
  }
}
