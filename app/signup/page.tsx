"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShellLogo } from "@/components/shell-logo"
import { useAuth } from "@/lib/auth-context"

export default function SignUpPage() {
  const { signUp, isSignedUp, user } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    signUp({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <ShellLogo size={48} className="text-primary" />
            <h1 className="font-serif text-3xl font-medium text-foreground">
              Join Serene
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Create your account and discover quiet beauty.
            </p>
          </div>

          {isSignedUp && user ? (
            <div className="rounded-2xl bg-card border border-border p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShellLogo size={24} className="text-primary" />
                </div>
                <h2 className="font-serif text-xl text-foreground">
                  Welcome, {user.fullName.split(" ")[0]}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Your account has been created. Start exploring our collection.
                </p>
                <button
                  type="button"
                  onClick={() => router.push("/shop")}
                  className="mt-2 inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card border border-border p-8 flex flex-col gap-5"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="fullName"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              >
                Create Account
              </button>

              {/* Existing account */}
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/profile"
                  className="text-primary hover:underline underline-offset-4 transition-colors"
                >
                  View Profile
                </Link>
              </p>
            </form>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
