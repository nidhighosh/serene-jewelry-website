import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShellLogo } from "@/components/shell-logo"
import { ProfileContent } from "@/components/profile-content"

export const metadata = {
  title: "Profile | Serene",
  description: "Your Serene profile. View your orders, wishlist, and account details.",
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="flex flex-col items-center gap-3 px-6 pt-20 pb-10 md:pt-28 md:pb-14 text-center">
          <ShellLogo size={48} className="text-primary mb-2" />
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance">
            My Profile
          </h1>
          <p className="text-base text-muted-foreground mt-2 max-w-md leading-relaxed">
            Your personal space at Serene.
          </p>
          <div className="w-12 h-px bg-primary/40 mt-4" />
        </section>

        <Suspense fallback={<ProfileFallback />}>
          <ProfileContent />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}

function ProfileFallback() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 md:pb-32">
      <div className="bg-card rounded-2xl p-8 text-center">
        <p className="text-sm text-muted-foreground">Loading profile...</p>
      </div>
    </section>
  )
}
