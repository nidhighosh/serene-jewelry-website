"use client"

import Image from "next/image"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { useWishlist } from "@/lib/wishlist-context"
import { Check, Heart } from "lucide-react"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category?: string
}

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const { addItem } = useCart()
  const { toggleItem, isInWishlist } = useWishlist()
  const { requireAuth } = useAuth()
  const wishlisted = isInWishlist(product.id)

  function handleAddToCart() {
    if (!requireAuth()) return
    addItem(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1200)
  }

  function handleWishlistToggle() {
    if (!requireAuth()) return
    toggleItem(product)
  }

  return (
    <article
      className="group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-card mb-4">
        <button
          type="button"
          onClick={handleWishlistToggle}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200 ${
            wishlisted
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background/80 text-muted-foreground border-border hover:border-primary hover:text-primary"
          }`}
        >
          <Heart size={16} className={wishlisted ? "fill-current" : ""} />
        </button>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-1">
        <h3 className="font-serif text-lg font-medium text-foreground leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {"\u20B9"}{product.price.toLocaleString("en-IN")}
          </p>
          <button
            type="button"
            onClick={handleAddToCart}
            className={`text-xs tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
              justAdded
                ? "bg-primary text-primary-foreground border-primary"
                : isHovered
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
            }`}
          >
            {justAdded ? (
              <span className="flex items-center gap-1.5">
                <Check size={12} />
                Added
              </span>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
