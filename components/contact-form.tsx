"use client"

import React from "react"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 bg-card rounded-2xl p-12 text-center">
        <p className="font-serif text-2xl font-light text-foreground">
          Thank you
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your message has been received. We will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors border-b border-border hover:border-primary pb-1"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h2 className="font-serif text-2xl font-light text-foreground mb-2">
        Send a Message
      </h2>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-xs tracking-widest uppercase text-muted-foreground"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-xs tracking-widest uppercase text-muted-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs tracking-widest uppercase text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
          placeholder="Tell us what you are thinking..."
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-primary px-8 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  )
}
