import { NextRequest, NextResponse } from "next/server"

// Generate a mock session ID
function generateMockSessionId(): string {
  return `mock_session_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`
}

export async function POST(request: NextRequest) {
  try {
    const { items, email, userProfile } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      )
    }

    // Generate mock session ID
    const sessionId = generateMockSessionId()

    // Calculate total
    const totalAmount = items.reduce(
      (sum: number, item: any) => sum + item.product.price * item.quantity,
      0
    )

    // Return mock success with redirect URL
    const successUrl = `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id=${encodeURIComponent(sessionId)}`

    return NextResponse.json(
      { 
        sessionId, 
        url: successUrl,
        // Store order data that will be retrieved on success page
        orderData: {
          sessionId,
          items,
          email,
          userProfile,
          totalAmount,
          createdAt: new Date().toISOString(),
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
