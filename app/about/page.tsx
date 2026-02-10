import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShellLogo } from "@/components/shell-logo"

export const metadata = {
  title: "About | Serene",
  description:
    "Learn about Serene - everyday minimal jewelry inspired by shells, sand, and calm seas.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="flex flex-col items-center gap-3 px-6 pt-20 pb-10 md:pt-28 md:pb-14 text-center">
          <ShellLogo size={48} className="text-primary mb-2" />
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance">
            Our Story
          </h1>
          <div className="w-12 h-px bg-primary/40 mt-4" />
        </section>

        {/* Content */}
        <section className="mx-auto max-w-2xl px-6 pb-24 md:pb-32">
          <div className="flex flex-col gap-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Serene was born from a simple observation: the most beautiful
              things in nature are never loud. A shell resting on wet sand, the
              way morning light catches a ripple, the quiet curve of a wave just
              before it breaks.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We translate that stillness into jewelry. Every piece in our
              collection is designed to be worn without thought yet remembered
              always. No heavy embellishments. No fleeting trends. Just quiet
              forms that feel right against your skin.
            </p>

            <div className="bg-card rounded-2xl p-8 md:p-12 my-4">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6 text-balance">
                What We Believe
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    Calm over loud
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our designs speak softly. We choose restraint over excess,
                    and trust that beauty reveals itself in simplicity.
                  </p>
                </div>
                <div className="w-full h-px bg-border" />
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    For every one
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Serene is designed for all genders and all occasions.
                    Jewelry should feel like an extension of who you are, not a
                    category you fit into.
                  </p>
                </div>
                <div className="w-full h-px bg-border" />
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    Accessible quiet luxury
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every piece is priced between {"\u20B9"}600 and{" "}
                    {"\u20B9"}1,000. We believe that thoughtful design and
                    careful craftsmanship should never be out of reach.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Named after the feeling we hope to give you, Serene is more than a
              brand. It is an invitation to slow down, to notice, and to carry a
              small piece of calm with you wherever you go.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
