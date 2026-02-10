export function ShellLogo({
  className = "",
  size = 48,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Serene shell logo"
    >
      {/* Scallop shell shape - thin line art */}
      <path
        d="M32 58C32 58 8 42 8 26C8 18 14 10 32 6C50 10 56 18 56 26C56 42 32 58 32 58Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Shell ridges */}
      <path
        d="M32 6C32 6 32 58 32 58"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M32 6C32 6 18 42 14 52"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M32 6C32 6 46 42 50 52"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M32 6C32 6 12 34 9 38"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <path
        d="M32 6C32 6 52 34 55 38"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      {/* Small inner arcs for shell texture */}
      <path
        d="M16 36C20 30 26 20 32 14C38 20 44 30 48 36"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M12 44C18 36 24 26 32 18C40 26 46 36 52 44"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity="0.25"
      />
    </svg>
  )
}
