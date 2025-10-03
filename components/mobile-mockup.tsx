import type * as React from "react"
import { cn } from "@/lib/utils"

type Size = "sm" | "md"

interface MobileMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  rotation?: number // degrees, positive is clockwise
  size?: Size
  elevation?: "front" | "back"
  screenClassName?: string // background and styling for the inner "screen"
  children: React.ReactNode
}

const sizeMap: Record<Size, string> = {
  sm: "h-[440px] w-[250px] md:h-[520px] md:w-[280px]",
  md: "h-[540px] w-[290px] md:h-[620px] md:w-[320px]",
}

export function MobileMockup({
  rotation = 0,
  size = "sm",
  elevation = "front",
  screenClassName,
  className,
  children,
  ...props
}: MobileMockupProps) {
  return (
    <div
      className={cn("relative", sizeMap[size], elevation === "front" ? "z-10" : "z-0", className)}
      style={{ transform: `rotate(${rotation}deg)` }}
      {...props}
    >
      {/* Device frame */}
      <div className="relative h-full w-full rounded-[36px] bg-gradient-to-b from-zinc-900 to-zinc-800 p-1.5 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.55)] ring-1 ring-black/40">
        {/* Outer metallic edge highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-white/5" />

        {/* Dynamic Island / Notch */}
        <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/90 md:h-5 md:w-24" />

        {/* Screen */}
        <div
          className={cn(
            "relative h-full w-full overflow-hidden rounded-[30px] border-[6px] border-zinc-900",
            screenClassName,
          )}
        >
          {/* Subtle glossy reflection */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,rgba(255,255,255,0.22),transparent_60%)] opacity-40 mix-blend-overlay" />
          {/* Content slot */}
          <div className="relative z-10 h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default MobileMockup
