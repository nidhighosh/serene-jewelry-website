import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShopGrid } from "@/components/shop-grid"

export const metadata = {
  title: "Shop | Serene",
  description:
    "Explore our collection of minimal everyday jewelry. Quiet luxury priced between \u20B9600 and \u20B91,000.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Page header */}
        <section className="flex flex-col items-center gap-3 px-6 pt-20 pb-10 md:pt-28 md:pb-14 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance">
            Our Pieces
          </h1>
          <p className="text-base text-muted-foreground mt-2 max-w-md leading-relaxed">
            Each piece is crafted to feel as natural as sunlight on sand.
            Everyday jewelry for every one.
          </p>
          <div className="w-12 h-px bg-primary/40 mt-4" />
        </section>

        {/* Product grid */}
        <ShopGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
