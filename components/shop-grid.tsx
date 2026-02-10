"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { cn } from "@/lib/utils"

const categories = ["All", "Earrings", "Rings", "Necklaces", "Bracelets"]

export function ShopGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300",
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">
          No pieces found in this category.
        </p>
      )}
    </section>
  )
}
