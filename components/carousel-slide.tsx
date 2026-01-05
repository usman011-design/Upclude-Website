"use client"

import type React from "react"

interface CarouselSlideProps {
  title: string
  subtitle: string
  heading: string
  description: string
  bgGradient: string
  children: React.ReactNode
  appStoreLink?: string
  playStoreLink?: string
  isActive: boolean
}

export function CarouselSlide({
  title,
  subtitle,
  heading,
  description,
  bgGradient,
  children,
  appStoreLink = "#",
  playStoreLink = "#",
  isActive,
}: CarouselSlideProps) {
  if (!isActive) return null

  return (
    <div
      className={`absolute inset-0 w-full min-h-[100svh] overflow-hidden ${bgGradient}`}
      style={{ perspective: 1800 }}
    >
      {/* ===== GLOBAL DARK OVERLAY (DESKTOP + MOBILE) ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 z-0 pointer-events-none" />

      {/* ===== MOBILE / TABLET FULL SCREEN BLUR OVERLAY ===== */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-black/40
          backdrop-blur-[1.5px]
          lg:hidden
        "
      />

      {/* ===== HEADER ===== */}
      <div className="absolute left-6 top-6 z-40 text-white md:left-20 md:top-8">
        <h1 className="text-lg font-extrabold md:text-xl">upclude.</h1>
        <div className="flex items-baseline gap-4 md:gap-24">
          <p className="text-[10px] font-semibold md:text-xs">{title}</p>
          <p className="font-bold text-sm">/ {subtitle}</p>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* ===== IMAGE (UNCHANGED) ===== */}
            <div
              className="
                relative
                flex
                justify-center
                lg:justify-end
                w-full
                order-1
                lg:order-2
                mt-16
                lg:mt-0
              "
            >
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  scale-[0.8]
                  sm:scale-[0.9]
                  md:scale-[0.95]
                  lg:scale-100
                "
              >
                {children}
              </div>
            </div>

            {/* ===== TEXT (OVER IMAGE ON MOBILE) ===== */}
            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                text-center
                text-white
                px-4
                z-30

                lg:static
                lg:z-auto
                lg:px-0
                lg:text-left
                lg:items-start
                lg:justify-center

                order-2
                lg:order-1
              "
            >
              <div className="max-w-xl">
                <h2
                  className="
                    mb-3
                    text-2xl
                    font-extrabold
                    leading-tight
                    sm:text-3xl
                    md:text-4xl
                    lg:text-3xl
                    xl:text-4xl
                  "
                >
                  {heading}
                </h2>

                <p
                  className="
                    mb-5
                    text-sm
                    sm:text-base
                    md:text-lg
                    font-semibold
                    opacity-95
                    lg:font-normal
                    lg:text-base
                  "
                >
                  {description}
                </p>

                {/* ===== BUTTONS ===== */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a
                    href={appStoreLink}
                    className="flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white"
                  >
                    <img src="./Social Icons.svg" alt="apple icon" height={20} width={20} />
                    <div className="text-left">
                      <div className="text-xs font-bold">Download app</div>
                      <div className="text-xs font-semibold">App Store</div>
                    </div>
                  </a>

                  <a
                    href={playStoreLink}
                    className="flex items-center gap-2 rounded-full bg-white px-6 py-2 text-gray-900"
                  >
                    <img src="./image 14.svg" alt="play store" height={20} width={20} />
                    <div className="text-left">
                      <div className="text-xs font-bold">Download app</div>
                      <div className="text-xs font-semibold">Play Store</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="absolute bottom-8 left-0 right-0 z-40 flex items-center justify-between px-6 text-white md:px-8 lg:px-16">
        <div>
          <p className="text-[10px] font-bold">© 2025 Upclude</p>
          <p className="text-[9px] font-bold">All rights reserved.</p>
        </div>

        <div className="flex gap-3">
          <img src="./fi_facebook.svg" alt="facebook" height={15} width={15} />
          <img src="./Vector.svg" alt="twitter" height={15} width={15} />
          <img src="./Vector (1).svg" alt="youtube" height={15} width={15} />
          <img src="./Vector (2).svg" alt="other" height={12} width={12} />
        </div>
      </div>
    </div>
  )
}
