import { ShellLogo } from "@/components/shell-logo"

export function HeroSection() {
  return (
    <section className="relative isolate flex flex-col items-center justify-center px-6 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      {/* Aesthetic doodles */}
      <div className="pointer-events-none absolute left-[10%] top-[18%] hidden text-primary/45 md:block animate-[drift_10s_ease-in-out_infinite]">
        <SparkDoodle />
      </div>
      <div className="pointer-events-none absolute right-[12%] top-[24%] hidden text-primary/40 md:block animate-[drift_12s_ease-in-out_infinite]">
        <DiamondDoodle />
      </div>
      <div className="pointer-events-none absolute left-[14%] bottom-[24%] hidden text-primary/40 lg:block animate-[drift_11s_ease-in-out_infinite]">
        <RingDoodle />
      </div>
      <div className="pointer-events-none absolute right-[16%] bottom-[18%] hidden text-primary/45 lg:block animate-[drift_13s_ease-in-out_infinite]">
        <CharmDoodle />
      </div>
      <div className="pointer-events-none absolute left-[28%] top-[30%] hidden text-primary/30 lg:block animate-[drift_9s_ease-in-out_infinite]">
        <TinySparkDoodle />
      </div>
      <div className="pointer-events-none absolute right-[30%] bottom-[30%] hidden text-primary/30 lg:block animate-[drift_14s_ease-in-out_infinite]">
        <TinySparkDoodle />
      </div>
      <div className="pointer-events-none absolute left-[7%] top-[42%] hidden text-primary/40 lg:block animate-[drift_15s_ease-in-out_infinite]">
        <ShellDoodle />
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[46%] hidden text-primary/40 lg:block animate-[drift_16s_ease-in-out_infinite]">
        <StarTrailDoodle />
      </div>
      <div className="pointer-events-none absolute left-[22%] bottom-[12%] hidden text-primary/30 xl:block animate-[drift_12s_ease-in-out_infinite]">
        <GemDropDoodle />
      </div>
      <div className="pointer-events-none absolute right-[24%] top-[14%] hidden text-primary/30 xl:block animate-[drift_13s_ease-in-out_infinite]">
        <PearlStrandDoodle />
      </div>
      <div className="pointer-events-none absolute left-[34%] top-[18%] hidden text-primary/25 xl:block animate-[drift_11s_ease-in-out_infinite]">
        <TinySparkDoodle />
      </div>

      {/* Center logo background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.1] pointer-events-none">
        <ShellLogo size={500} className="text-primary" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7 text-center max-w-3xl">
        <ShellLogo size={64} className="text-primary" />

        <p className="text-[11px] tracking-[0.32em] uppercase text-primary/85">
          Fine Everyday Jewelry
        </p>

        {/* Brand name */}
        <h1 className="-mt-2 font-serif text-6xl md:text-8xl font-light tracking-wide text-foreground text-balance">
          Serene
        </h1>

      </div>
    </section>
  )
}

function SparkDoodle() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M36 11V24" stroke="currentColor" strokeWidth="1.4" />
      <path d="M36 48V61" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11 36H24" stroke="currentColor" strokeWidth="1.4" />
      <path d="M48 36H61" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 18L27 27" stroke="currentColor" strokeWidth="1.4" />
      <path d="M45 45L54 54" stroke="currentColor" strokeWidth="1.4" />
      <path d="M54 18L45 27" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 54L27 45" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="36" cy="36" r="4.5" fill="currentColor" />
    </svg>
  )
}

function DiamondDoodle() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
      <path
        d="M18 28L35 13L52 28L35 57L18 28Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M18 28H52" stroke="currentColor" strokeWidth="1.2" />
      <path d="M35 13L27 28L35 57L43 28L35 13Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function RingDoodle() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <circle cx="36" cy="43" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M25 28L31 21L37 28L43 21L49 28" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="31" cy="21" r="2" fill="currentColor" />
      <circle cx="37" cy="28" r="2" fill="currentColor" />
      <circle cx="43" cy="21" r="2" fill="currentColor" />
    </svg>
  )
}

function CharmDoodle() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 12V26" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="32" cy="33" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M32 42L27.5 47.5L32 53L36.5 47.5L32 42Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function TinySparkDoodle() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path d="M17 5V12" stroke="currentColor" strokeWidth="1.3" />
      <path d="M17 22V29" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 17H12" stroke="currentColor" strokeWidth="1.3" />
      <path d="M22 17H29" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17" cy="17" r="1.8" fill="currentColor" />
    </svg>
  )
}

function ShellDoodle() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M32 56C32 56 12 41 12 28C12 21 17 14 32 10C47 14 52 21 52 28C52 41 32 56 32 56Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M32 10V56" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 10C32 10 22 38 18 47" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 10C32 10 42 38 46 47" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function StarTrailDoodle() {
  return (
    <svg width="72" height="56" viewBox="0 0 72 56" fill="none" aria-hidden="true">
      <path d="M8 44C20 32 34 26 64 22" stroke="currentColor" strokeWidth="1.2" />
      <path d="M48 10V18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M44 14H52" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="36" r="1.7" fill="currentColor" />
      <circle cx="30" cy="30" r="1.3" fill="currentColor" />
      <circle cx="42" cy="26" r="1.1" fill="currentColor" />
    </svg>
  )
}

function GemDropDoodle() {
  return (
    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" aria-hidden="true">
      <path d="M31 10V20" stroke="currentColor" strokeWidth="1.2" />
      <path d="M21 24L31 16L41 24L31 42L21 24Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M21 24H41" stroke="currentColor" strokeWidth="1.1" />
      <path d="M31 16L27 24L31 42L35 24L31 16Z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function PearlStrandDoodle() {
  return (
    <svg width="78" height="54" viewBox="0 0 78 54" fill="none" aria-hidden="true">
      <path d="M8 34C20 20 56 20 70 34" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="28" r="2.3" fill="currentColor" />
      <circle cx="30" cy="25" r="2.1" fill="currentColor" />
      <circle cx="40" cy="24" r="2.2" fill="currentColor" />
      <circle cx="50" cy="25" r="2.1" fill="currentColor" />
      <circle cx="60" cy="28" r="2.3" fill="currentColor" />
    </svg>
  )
}
