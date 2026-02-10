"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ShellLogo } from "@/components/shell-logo"
import { ShoppingBag, Menu, X, User, Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { useWishlist } from "@/lib/wishlist-context"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const { totalItems: wishlistCount } = useWishlist()
  const { isSignedUp, requireAuth } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Serene home">
          <ShellLogo size={36} className="text-primary transition-transform duration-300 group-hover:scale-105" />
          <span className="font-serif text-xl font-medium tracking-wide text-foreground">
            Serene
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-widest uppercase transition-colors duration-200 hover:text-primary",
                pathname === link.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              if (!requireAuth()) return
              router.push("/profile?tab=wishlist")
            }}
            className="relative text-muted-foreground hover:text-primary transition-colors"
            aria-label="Wishlist"
          >
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {wishlistCount}
              </span>
            )}
          </button>
          {isSignedUp ? (
            <Link
              href="/profile"
              className="relative text-muted-foreground hover:text-primary transition-colors"
              aria-label="My profile"
            >
              <User size={20} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => requireAuth()}
              className="relative text-muted-foreground hover:text-primary transition-colors"
              aria-label="Sign up"
            >
              <User size={20} />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (!requireAuth()) return
              setIsOpen(true)
            }}
            className="relative text-muted-foreground hover:text-primary transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background px-6 pb-6 pt-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm tracking-widest uppercase transition-colors duration-200",
                  pathname === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
