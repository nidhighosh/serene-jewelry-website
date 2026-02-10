import Link from "next/link"
import { ShellLogo } from "@/components/shell-logo"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-32 md:py-44 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <ShellLogo size={500} className="text-primary" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-2xl">
        {/* Shell logo */}
        <ShellLogo size={64} className="text-primary" />

        {/* Brand name */}
        <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide text-foreground">
          Serene
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide leading-relaxed">
          Quiet beauty for every day
        </p>

        {/* CTA */}
        <Link
          href="/shop"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  )
}
