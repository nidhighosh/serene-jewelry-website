import Link from "next/link"
import { ShellLogo } from "@/components/shell-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShellLogo size={28} className="text-primary" />
            <span className="font-serif text-lg font-medium tracking-wide text-foreground">
              Serene
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer navigation">
            <Link
              href="/"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/profile"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Profile
            </Link>
          </nav>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-md">
            Quiet beauty for every day. Inspired by shells, sand, and calm seas.
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            {"2026 Serene. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
