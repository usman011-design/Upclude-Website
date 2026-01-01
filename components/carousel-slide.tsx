"use client"

import React from "react"

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
  isActive
}: CarouselSlideProps) {
  if (!isActive) return null

  return (
    <div
      className={`absolute top-0 left-0 h-screen w-full overflow-hidden ${bgGradient}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1800,
        borderRight: "none"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35 z-0 pointer-events-none" />

      {/* Header */}
      <div className="absolute left-16 top-6 z-30 text-white md:left-20 md:top-8 lg:left-20">
        <h1 className="text-lg font-bold md:text-xl">upclude.</h1>
        <div className="flex items-baseline gap-24">
          <p className="text-[10px] font-semibold md:text-xs">{title}</p>
          <p className="font-bold text-sm">/ {subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex h-full items-center z-20">
        <div className="container mx-20 px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8">
            
            {/* Text block */}
            <div className="z-40 ml-12 max-w-lg text-white md:ml-16 lg:ml-22 mt-4">
              <h2 className="mb-3 text-xl font-bold leading-tight md:text-3xl lg:text-3xl xl:text-4xl">
                {heading}
              </h2>
              <p className="mb-5 text-sm md:text-sm">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 md:gap-4">
                <a
                  href={appStoreLink}
                  className="flex items-center gap-2 rounded-full bg-black px-6 py-1 text-white md:px-6 md:py-2"
                >
                  <img src="./Social Icons.svg" alt="apple icon" height={20} width={20} />
                  <div className="text-left">
                    <div className="text-sm md:text-[10px]">Download app</div>
                    <div className="text-[10px] font-semibold md:text-xs">App Store</div>
                  </div>
                </a>

                <a
                  href={playStoreLink}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-1 text-gray-900 md:px-6 md:py-2"
                >
                  <img src="./image 14.svg" alt="play store" height={20} width={20} />
                  <div className="text-left">
                    <div className="text-sm md:text-[10px]">Download app</div>
                    <div className="text-[10px] font-semibold md:text-xs">Play Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Foreground Image */}
            <div className="relative flex justify-center lg:justify-end z-10 overflow-hidden rounded-2xl">
              {children}
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 z-40 flex items-center justify-between px-4 text-white md:bottom-6 md:px-8 lg:px-16">
        <div className="ml-2 md:ml-16 lg:ml-6">
          <p className="text-[10px] font-bold md:text-xs">© 2025 Upclude</p>
          <p className="text-[9px] font-bold md:text-[10px]">All rights reserved.</p>
        </div>

        <div className="flex gap-2.5 md:gap-3">
          <a href="#"><img src="./fi_facebook.svg" alt="facebook" height={15} width={15} /></a>
          <a href="#"><img src="./Vector.svg" alt="twitter" height={15} width={15} /></a>
          <a href="#"><img src="./Vector (1).svg" alt="youtube" height={15} width={15} /></a>
          <a href="#"><img src="./Vector (2).svg" alt="other" height={12} width={12} /></a>
        </div>
      </div>
    </div>
  )
}
