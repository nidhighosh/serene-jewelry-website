import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import { OrdersProvider } from "@/lib/orders-context"
import { CartDrawer } from "@/components/cart-drawer"
import { SignupModal } from "@/components/signup-modal"

import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Serene | Quiet Beauty for Every Day',
  description:
    'Everyday minimal jewelry inspired by shells, sand, and calm seas. Quiet luxury for all.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <OrdersProvider>
                {children}
                <CartDrawer />
              </OrdersProvider>
            </CartProvider>
          </WishlistProvider>
          <SignupModal />
        </AuthProvider>
      </body>
    </html>
  )
}
