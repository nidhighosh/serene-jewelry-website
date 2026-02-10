import { ShellLogo } from "@/components/shell-logo"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="bg-card/60">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
        {/* Decorative shell */}
        <div className="flex justify-center mb-8">
          <ShellLogo size={40} className="text-primary/50" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8 text-balance">
          About Serene
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          Born from the quiet rhythm of tides and the gentle curve of seashells,
          Serene creates everyday jewelry that feels as natural as sunlight on sand.
          Each piece is designed to be worn without thought yet remembered always.
        </p>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          We believe beauty should be calm, accessible, and timeless. Our
          collection is crafted for all, priced between {"\u20B9"}600 and {"\u20B9"}1,000,
          because quiet luxury should never feel out of reach.
        </p>

        <Link
          href="/about"
          className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-200 border-b border-border hover:border-primary pb-1"
        >
          Our Story
        </Link>
      </div>
    </section>
  )
}
