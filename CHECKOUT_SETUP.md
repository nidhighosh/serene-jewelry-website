# Checkout Backend Setup Guide

## Overview
This ecommerce site now has a complete checkout system integrated with Stripe for secure payment processing.

## Features

### ✅ Implemented
- **Checkout Page** (`/checkout`): Full checkout experience with order summary
- **Payment Processing**: Integrated with Stripe for secure card payments
- **Order Confirmation**: Success page with order details after payment
- **Order Management**: API endpoints to track orders and payment status
- **User Authentication**: Checkout requires user signup
- **Cart Integration**: Seamless checkout from cart drawer

### 📁 New Files Created

#### API Routes
- `/api/checkout` - Creates Stripe checkout session
- `/api/orders` - Fetches and creates orders
- `/api/payment-status` - Checks payment status for a session
- `/api/webhooks/stripe` - Webhook handler for Stripe events (production)

#### Pages
- `/checkout` - Main checkout page
- `/checkout/success` - Order confirmation page

#### Context & Utilities
- `lib/orders-context.tsx` - Orders management context
- `lib/stripe-utils.ts` - Stripe utility functions

#### Configuration
- `.env.local.example` - Environment variables template

## Setup Instructions

### 1. Get Stripe API Keys

1. Create a [Stripe account](https://stripe.com)
2. Go to Dashboard → API Keys
3. Copy your keys:
   - **Publishable Key**: Starts with `pk_test_` or `pk_live_`
   - **Secret Key**: Starts with `sk_test_` or `sk_live_`

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Update `.env.local` with your Stripe keys:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key
STRIPE_SECRET_KEY=sk_test_your_actual_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Test Mode (Development)

The system is currently set up for Stripe Test Mode. Use these test cards:

**Card: Visa (Success)**
- Number: 4242 4242 4242 4242
- Expiry: Any future date (e.g., 12/25)
- CVC: Any 3 digits

**Card: Visa (Decline)**
- Number: 4000 0000 0000 0002
- Expiry: Any future date
- CVC: Any 3 digits

### 4. Webhook Setup (Production Only)

For production, set up Stripe webhooks:

1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy the signing secret to `.env.local`:
```env
STRIPE_WEBHOOK_SECRET=whsec_your_signing_secret
```

## Checkout Flow

```
User adds items to cart
    ↓
Clicks "Checkout" in cart drawer
    ↓
Redirected to /checkout page
    ↓
User must be signed up (signup modal appears if not)
    ↓
Reviews order summary
    ↓
Clicks "Proceed to Payment"
    ↓
Redirected to Stripe Checkout (hosted page)
    ↓
User enters payment details
    ↓
Stripe processes payment
    ↓
Success → /checkout/success page (cart cleared)
Failure → Error message shown
```

## API Endpoints Reference

### POST /api/checkout
Creates a Stripe checkout session

**Request:**
```json
{
  "items": [
    {
      "product": {
        "id": "1",
        "name": "Pearl Drop Earrings",
        "price": 850,
        "image": "/images/products/pearl-drop-earrings.jpg",
        "category": "Earrings"
      },
      "quantity": 2
    }
  ],
  "email": "user@example.com",
  "userProfile": {
    "fullName": "John Doe",
    "phone": "+91-XXXXXXXXXX",
    "email": "user@example.com"
  }
}
```

**Response:**
```json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

### GET /api/orders
Fetch orders by email or session ID

**Query Parameters:**
- `email`: User's email address (fetch all orders)
- `sessionId`: Stripe checkout session ID (fetch specific order)

**Response:**
```json
{
  "orders": [
    {
      "id": "cs_test_...",
      "status": "paid",
      "amountTotal": 85000,
      "currency": "inr",
      "customerEmail": "user@example.com",
      "createdAt": 1707662400,
      "metadata": {
        "customerName": "John Doe",
        "customerPhone": "+91-XXXXXXXXXX"
      }
    }
  ]
}
```

### GET /api/payment-status
Check payment status of a checkout session

**Query Parameters:**
- `sessionId`: Required. Stripe checkout session ID

**Response:**
```json
{
  "sessionId": "cs_test_...",
  "status": "paid",
  "paymentStatus": "succeeded",
  "amountTotal": 85000,
  "amountSubtotal": 85000,
  "currency": "inr",
  "customerEmail": "user@example.com",
  "customerName": "John Doe",
  "createdAt": "2024-02-11T10:00:00.000Z",
  "expiresAt": "2024-02-14T10:00:00.000Z"
}
```

## Frontend Components

### useCart() Hook
```tsx
const { items, totalPrice, clearCart, addItem, removeItem } = useCart()
```

### useOrders() Hook
```tsx
const { orders, currentOrder, fetchOrders, fetchOrderById, createOrder } = useOrders()
```

### useAuth() Hook
```tsx
const { user, isSignedUp, signUp, signOut, requireAuth } = useAuth()
```

## Production Checklist

- [ ] Stripe API keys configured for live mode
- [ ] Database set up for order storage (currently uses Stripe as source of truth)
- [ ] Webhook endpoint configured and verified
- [ ] Email service configured for order confirmations
- [ ] SSL/TLS certificate configured
- [ ] CORS headers configured if frontend is on different domain
- [ ] Rate limiting configured for API endpoints
- [ ] Error logging/monitoring set up
- [ ] Order inventory management implemented
- [ ] Refund policy configured
- [ ] Terms and conditions updated

## Future Enhancements

1. **Database Integration**: Currently uses Stripe as source of truth. Integrate with PostgreSQL/MongoDB for:
   - Order history
   - Inventory management
   - Customer profiles
   - Payment history

2. **Email Notifications**: Send order confirmation and shipping updates

3. **Admin Dashboard**: Track orders, manage inventory, process refunds

4. **Multiple Payment Methods**: Add PayPal, Apple Pay, Google Pay

5. **Coupon/Discount System**: Apply discount codes during checkout

6. **Shipping Integration**: Connect with courier services for tracking

7. **Inventory Management**: Automatic stock updates after successful payment

8. **Order History**: User order tracking in profile page

## Troubleshooting

### "Missing Stripe keys" error
- Check `.env.local` has both `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY`
- Restart dev server after updating `.env.local`

### Checkout page appears blank
- Ensure Stripe keys are valid and in correct format
- Check browser console for error messages

### Webhook events not processing
- Verify webhook signing secret is correct
- Check webhook endpoint is publicly accessible
- Review Stripe Dashboard → Webhooks → Events for error details

## Support

For Stripe API documentation: https://stripe.com/docs
For Next.js API routes: https://nextjs.org/docs/app/building-your-application/routing/api-routes
