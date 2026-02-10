"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { User, Package, Heart, MapPin } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useSearchParams } from "next/navigation"
import { useWishlist } from "@/lib/wishlist-context"

const tabs = [
  { id: "details", label: "Details", icon: User },
  { id: "orders", label: "Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Addresses", icon: MapPin },
] as const

type TabId = (typeof tabs)[number]["id"]

function isTabId(value: string | null): value is TabId {
  return tabs.some((tab) => tab.id === value)
}

export function ProfileContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const initialTab = searchParams.get("tab")
    return isTabId(initialTab) ? initialTab : "details"
  })
  const { user, isSignedUp, setShowSignupModal } = useAuth()

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (isTabId(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  // If user is not signed up, do not show any personal data.
  if (!isSignedUp) {
    return (
      <section className="mx-auto max-w-4xl px-6 pb-24 md:pb-32">
        <div className="flex flex-col items-center gap-4 py-24">
          <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center">
            <User size={32} className="text-primary" />
          </div>
          <div className="text-center max-w-lg">
            <h2 className="font-serif text-2xl font-light text-foreground">
              My Profile
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Your profile is empty. Please sign up to save details, view orders, or access your bag.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowSignupModal(true)}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase transition-all duration-200 hover:opacity-90"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // If signed up, show profile details using the real user data only.
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 md:pb-32">
      {/* Avatar + Name */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center">
          <User size={32} className="text-primary" />
        </div>
        <div className="text-center">
          <h2 className="font-serif text-2xl font-light text-foreground">
            {user?.fullName ?? ""}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">{user?.email ?? ""}</p>
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
        {activeTab === "details" && <DetailsTab user={user} />}
        {activeTab === "orders" && <EmptyState label="Orders" />}
        {activeTab === "wishlist" && <WishlistTab />}
        {activeTab === "addresses" && <EmptyState label="Addresses" />}
      </div>
    </section>
  )
}

function DetailsTab({ user }: { user: { fullName: string; phone: string; email: string } | null }) {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-10">
      <h3 className="font-serif text-xl font-medium text-foreground mb-8">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Full Name</label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border/50">{user?.fullName ?? ""}</div>
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border/50">{user?.email ?? ""}</div>
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Phone</label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border/50">{user?.phone ?? ""}</div>
        </div>
      </div>
    </div>
  )
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="bg-card rounded-2xl p-8 text-center">
      <p className="text-sm text-muted-foreground">No {label.toLowerCase()} yet.</p>
    </div>
  )
}

function WishlistTab() {
  const { items } = useWishlist()

  if (items.length === 0) {
    return <EmptyState label="Wishlist" />
  }

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8">
      <h3 className="font-serif text-xl font-medium text-foreground mb-6">Saved Pieces</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((product) => (
          <article key={product.id} className="rounded-xl border border-border/60 bg-background p-3">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-lg text-foreground">{product.name}</h4>
              <p className="text-sm text-muted-foreground">
                {"\u20B9"}
                {product.price.toLocaleString("en-IN")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
