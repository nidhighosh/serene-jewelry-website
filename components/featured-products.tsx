import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import Link from "next/link"

export function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="mx-auto max-w-6xl px-6 py-22 md:py-30">
      {/* Section header */}
      <div className="flex flex-col items-center gap-4 mb-14 text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-primary/85">
          Our Collection
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground text-balance">
          Timeless Pieces
        </h2>
        <p className="max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground text-balance">
          Designed for layering, gifting, and everyday elegance.
        </p>
        <div className="w-14 h-px bg-primary/45 mt-1" />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View all link */}
      <div className="flex justify-center mt-14">
        <Link
          href="/shop"
          className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-200 border-b border-border hover:border-primary pb-1"
        >
          View All Pieces
        </Link>
      </div>
    </section>
  )
}
