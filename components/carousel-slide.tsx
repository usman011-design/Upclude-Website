"use client"

import type React from "react"
import Image from 'next/image'

import { Apple, Facebook, Twitter, Youtube } from "lucide-react"

interface CarouselSlideProps {
  title: string
  subtitle: string
  heading: string
  description: string
  bgGradient: string
  children: React.ReactNode
  appStoreLink?: string
  playStoreLink?: string
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
}: CarouselSlideProps) {
  return (
    <div className={`relative h-screen w-full ${bgGradient}`}>
      <div className="absolute left-16 top-6 z-10 text-white md:left-20 md:top-8 lg:left-20">
      <h1 className="text-lg font-bold md:text-xl">upclude.</h1>
        <div className="flex items-baseline gap-24">
          <p className="text-[10px] font-semibold md:text-xs">{title}</p>
          <p className="font-bold text-sm">/ {subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-full items-center">
        <div className="container mx-20 px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="z-10 ml-12 max-w-lg text-white md:ml-16 lg:ml-22 mt-4">
              <h2 className="mb-3 text-xl font-bold leading-tight md:text-3xl lg:text-3xl xl:text-4xl">{heading}</h2>
              <p className="mb-5 text-sm  md:text-sm">{description}</p>

              <div className="flex flex-wrap gap-4 md:gap-4">
                <a
                  href={appStoreLink}
                  className="flex items-center gap-2 rounded-full bg-black px-6 py-1 text-white transition-transform hover:scale-105 md:px-6 md:py-2"
                >
                  <Image
                  src="../../Social Icons.svg"
                  alt="apple icon"
                  height={20}
                  width={20}
                  />
                  <div className="text-left">
                    <div className="text-sm md:text-[10px]">Download app</div>
                    <div className="text-[10px] font-semibold md:text-xs">App Store</div>
                  </div>
                </a>
                <a
                  href={playStoreLink}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-1 text-gray-900 transition-transform hover:scale-105 md:px-6 md:py-2"
                >
                  <Image
                  src="../../image 14.svg"
                  alt="apple icon"
                  height={20}
                  width={20}
                  />
                  <div className="text-left">
                    <div className="text-sm md:text-[10px]">Download app</div>
                    <div className="text-[10px] font-semibold md:text-xs">Play Store</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">{children}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-between px-4 text-white md:bottom-6 md:px-8 lg:px-16">
        <div className="ml-2 md:ml-16 lg:ml-6">
          <p className="text-[10px] font-bold md:text-xs">© 2025 Upclude</p>
          <p className="text-[9px] font-bold md:text-[10px]">All rights reserved.</p>
        </div>
        <div className="flex gap-2.5 md:gap-3">
          <a href="#" className="transition-opacity hover:opacity-70">
          <Image
                  src="../../fi_facebook.svg"
                  alt="apple icon"
                  height={15}
                  width={15}
                  />
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
          <Image
                  src="../../Vector.svg"
                  alt="apple icon"
                  height={15}
                  width={15}
                  />
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
          <Image
                  src="../../Vector (1).svg"
                  alt="apple icon"
                  height={15}
                  width={15}
                  />
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
          <Image
                  src="../../Vector (2).svg"
                  alt="apple icon"
                  height={12}
                  width={12}
                  />
          </a>
        </div>
      </div>
    </div>
  )
}
