"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { User, Package, Heart, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"

const tabs = [
  { id: "details", label: "Details", icon: User },
  { id: "orders", label: "Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Addresses", icon: MapPin },
] as const

type TabId = (typeof tabs)[number]["id"]

const mockOrders = [
  {
    id: "SRN-20260115",
    date: "Jan 15, 2026",
    status: "Delivered",
    total: 1600,
    items: [
      { name: "Pearl Drop Earrings", qty: 1, price: 850 },
      { name: "Gold Wave Ring", qty: 1, price: 750 },
    ],
  },
  {
    id: "SRN-20260128",
    date: "Jan 28, 2026",
    status: "In Transit",
    total: 950,
    items: [{ name: "Shell Pendant Necklace", qty: 1, price: 950 }],
  },
]

const mockAddresses = [
  {
    id: "1",
    label: "Home",
    line1: "42 Palm Grove Road",
    line2: "Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400050",
    isDefault: true,
  },
  {
    id: "2",
    label: "Office",
    line1: "WeWork BKC, Unit 312",
    line2: "Bandra Kurla Complex",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400051",
    isDefault: false,
  },
]

export function ProfileContent() {
  const [activeTab, setActiveTab] = useState<TabId>("details")
  const wishlistProducts = products.slice(0, 3)

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 md:pb-32">
      {/* Avatar + Name */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center">
          <User size={32} className="text-primary" />
        </div>
        <div className="text-center">
          <h2 className="font-serif text-2xl font-light text-foreground">
            Anya Sharma
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            anya.sharma@email.com
          </p>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-1 bg-card rounded-xl p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "details" && <DetailsTab />}
        {activeTab === "orders" && <OrdersTab />}
        {activeTab === "wishlist" && <WishlistTab products={wishlistProducts} />}
        {activeTab === "addresses" && <AddressesTab />}
      </div>
    </section>
  )
}

function DetailsTab() {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-10">
      <h3 className="font-serif text-xl font-medium text-foreground mb-8">
        Personal Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
            First Name
          </label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border/50">
            Anya
          </div>
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Last Name
          </label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border/50">
            Sharma
          </div>
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Email
          </label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border/50">
            anya.sharma@email.com
          </div>
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Phone
          </label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border/50">
            +91 98765 43210
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
        >
          Edit Profile
        </button>
      </div>
    </div>
  )
}

function OrdersTab() {
  return (
    <div className="flex flex-col gap-6">
      {mockOrders.map((order) => (
        <div key={order.id} className="bg-card rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <p className="text-sm font-medium text-foreground">
                Order {order.id}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {order.date}
              </p>
            </div>
            <span
              className={cn(
                "self-start sm:self-auto text-xs tracking-widest uppercase px-3 py-1 rounded-full",
                order.status === "Delivered"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/20 text-accent-foreground"
              )}
            >
              {order.status}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {order.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
              >
                <div>
                  <p className="text-sm text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.qty}
                  </p>
                </div>
                <p className="text-sm text-foreground">
                  {"\u20B9"}
                  {item.price.toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Total
            </span>
            <span className="text-sm font-medium text-foreground">
              {"\u20B9"}
              {order.total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function WishlistTab({
  products,
}: {
  products: { id: string; name: string; price: number; image: string; category: string }[]
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href="/shop"
          className="group bg-card rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300"
        >
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Heart size={14} className="text-primary fill-primary" />
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
              {product.category}
            </p>
            <h3 className="font-serif text-base font-medium text-foreground">
              {product.name}
            </h3>
            <p className="text-sm text-primary mt-1">
              {"\u20B9"}
              {product.price.toLocaleString("en-IN")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

function AddressesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockAddresses.map((addr) => (
        <div
          key={addr.id}
          className={cn(
            "bg-card rounded-2xl p-6 border transition-colors",
            addr.isDefault
              ? "border-primary/40"
              : "border-border/30"
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                {addr.label}
              </span>
            </div>
            {addr.isDefault && (
              <span className="text-xs tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                Default
              </span>
            )}
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>{addr.line1}</p>
            <p>{addr.line2}</p>
            <p>
              {addr.city}, {addr.state} {addr.pincode}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-border/30 flex gap-4">
            <button
              type="button"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Edit
            </button>
            {!addr.isDefault && (
              <button
                type="button"
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                Set as Default
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Add new address card */}
      <button
        type="button"
        className="bg-card/50 rounded-2xl p-6 border border-dashed border-border hover:border-primary/40 transition-colors flex flex-col items-center justify-center gap-3 min-h-[180px]"
      >
        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
          <MapPin size={18} className="text-muted-foreground" />
        </div>
        <span className="text-sm text-muted-foreground">
          Add New Address
        </span>
      </button>
    </div>
  )
}
