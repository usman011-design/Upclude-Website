"use client"

import Image from "next/image"

interface SidebarNavigationProps {
  activeIndex: number
  onNavigate: (index: number) => void
}

export function SidebarNavigation({ activeIndex, onNavigate }: SidebarNavigationProps) {
  const navItems = [
    { image: "./depression (1) 1.png", label: "Drop Anxiety" },
    { image: "./search 1.png", label: "Word Find" },
    { image: "./game (3) 1.png", label: "Sudoku" },
    { image: "./cubes (1) 1.png", label: "ABC Think Tank" },
    { image: "./abstract-shape (1) 1.png", label: "Draw Quick" },
  ]

  return (
    <div className="fixed left-12 top-1/2 z-40 flex -translate-y-1/2 flex-col md:left-18 md:gap-0">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`group relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 md:h-10 md:w-10 ${
            activeIndex === index
              ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
              : "bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
          }`}
          aria-label={item.label}
        >
          <Image
            src={item.image!}
            alt={item.label}
            width={20}
            height={20}
            className="h-4 w-4 md:h-5 md:w-5"
          />

          <span className="absolute left-full ml-3 whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  )
}
