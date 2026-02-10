import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { ShellLogo } from "@/components/shell-logo"
import { Mail, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact | Serene",
  description:
    "Get in touch with Serene. We would love to hear from you.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="flex flex-col items-center gap-3 px-6 pt-20 pb-10 md:pt-28 md:pb-14 text-center">
          <ShellLogo size={48} className="text-primary mb-2" />
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance">
            Get in Touch
          </h1>
          <p className="text-base text-muted-foreground mt-2 max-w-md leading-relaxed">
            We would love to hear from you. Reach out with questions,
            feedback, or just to say hello.
          </p>
          <div className="w-12 h-px bg-primary/40 mt-4" />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-6">
                  Reach Us
                </h2>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Email
                      </p>
                      <p className="text-sm text-muted-foreground">
                        hello@serene.in
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Studio
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Serene Studio
                        <br />
                        Bandra West, Mumbai
                        <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-2xl p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                  Studio Hours
                </h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
