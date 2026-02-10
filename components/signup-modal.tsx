"use client"

import React from "react"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { ShellLogo } from "@/components/shell-logo"
import { X } from "lucide-react"

export function SignupModal() {
  const { showSignupModal, setShowSignupModal, signUp } = useAuth()
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
    setFormData({ fullName: "", phone: "", email: "" })
  }

  if (!showSignupModal) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={() => setShowSignupModal(false)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setShowSignupModal(false)
        }}
        role="button"
        tabIndex={0}
        aria-label="Close signup"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-6 rounded-2xl bg-background p-8 shadow-lg animate-in fade-in zoom-in-95 duration-300">
        {/* Close */}
        <button
          type="button"
          onClick={() => setShowSignupModal(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <ShellLogo size={40} className="text-primary" />
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Join Serene
          </h2>
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Create your account to add items to your bag and checkout.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="modal-fullName"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Full Name
            </label>
            <input
              id="modal-fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="Your full name"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="modal-phone"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Phone Number
            </label>
            <input
              id="modal-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="modal-email"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Email Address
            </label>
            <input
              id="modal-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
