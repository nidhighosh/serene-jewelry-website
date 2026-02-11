"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

export interface Order {
  id: string
  status: "paid" | "unpaid" | "no_payment_required"
  amountTotal: number | null
  currency: string
  customerEmail: string | null
  customerName?: string
  createdAt: Date
  items?: Array<{
    productId: string
    name: string
    quantity: number
    price: number
  }>
}

interface OrdersContextValue {
  orders: Order[]
  currentOrder: Order | null
  isLoading: boolean
  fetchOrders: (email: string) => Promise<void>
  fetchOrderById: (sessionId: string) => Promise<void>
  createOrder: (sessionId: string) => Promise<void>
}

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined)

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchOrders = useCallback(async (email: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/orders?email=${encodeURIComponent(email)}`)
      if (!response.ok) throw new Error("Failed to fetch orders")

      const data = await response.json()
      setOrders(
        data.orders.map((order: any) => ({
          ...order,
          createdAt: new Date(order.createdAt * 1000),
        }))
      )
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchOrderById = useCallback(async (sessionId: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/orders?sessionId=${encodeURIComponent(sessionId)}`)
      if (!response.ok) throw new Error("Failed to fetch order")

      const data = await response.json()
      const order: Order = {
        id: data.id,
        status: data.status,
        amountTotal: data.amountTotal,
        currency: data.currency,
        customerEmail: data.customerEmail,
        customerName: data.metadata?.customerName,
        createdAt: new Date(data.createdAt * 1000),
      }
      setCurrentOrder(order)
    } catch (error) {
      console.error("Error fetching order:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createOrder = useCallback(async (sessionId: string) => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      })

      if (!response.ok) throw new Error("Failed to create order")

      const data = await response.json()
      const order: Order = {
        id: data.orderId,
        status: data.status,
        amountTotal: data.amount,
        currency: data.currency,
        customerEmail: data.email,
        createdAt: new Date(data.createdAt),
      }
      setCurrentOrder(order)
      setOrders((prev) => [...prev, order])
    } catch (error) {
      console.error("Error creating order:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <OrdersContext.Provider
      value={{
        orders,
        currentOrder,
        isLoading,
        fetchOrders,
        fetchOrderById,
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrdersContext)
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider")
  }
  return context
}
