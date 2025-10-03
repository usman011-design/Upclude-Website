"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { CarouselSlide } from "./carousel-slide"
import { SidebarNavigation } from "./sidebar-navigation"
import { LoadingAnimation } from "./loading-animation"
import { DropAnxietyInterface } from "./app-interfaces/drop-anxiety-interface"
import { WordFindInterface } from "./app-interfaces/word-find-interface"
import { SudokuInterface } from "./app-interfaces/sudoku-interface"
import { ABCInterface } from "./app-interfaces/abc-interface"
import { DrawInterface } from "./app-interfaces/draw-interface"

export function CarouselContainer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      title: "drop anxiety",
      subtitle: "dropanxiety",
      heading: "Your instant path to anxiety relief, anytime, anywhere.",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-amber-400 via-amber-400 to-amber-300",
      interface: <WordFindInterface src="../../Group 3.png" />,
    },
    {
      title: "word find",
      subtitle: "wordfind",
      heading: "Find the hidden words, unlock your brainpower!",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#824DFF] via-[#AD8AFE] to-[#824DFF]",
      interface: <WordFindInterface src="../../group 2.png"/>,
    },
    {
      title: "sudoku puzzle",
      subtitle: "sudokupuzzle",
      heading: "Challenge you brain with endless Sudoku fun.",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#698F66] via-[#78C273] to-[#698F66]",
      interface: <WordFindInterface src="../../Group 4.png"/>,
    },
    {
      title: "abc think tank",
      subtitle: "abcthinktank",
      heading: "Learn ABCs and 123s through fun play!",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#66808F] via-[#73ACC2] to-[#66808F]",
      interface: <WordFindInterface src="../../Group 5.png"/>,
    },
    {
      title: "draw quick draw",
      subtitle: "drawquickdraw",
      heading: "Draw any shape and watch the app instantly recognize it.",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#A9A35D] via-[#E1D485] to-[#A9A35D]",
      interface: <WordFindInterface src="../../Group 6.png"/>,
    },
  ]

  const handleNavigate = (index: number) => {
    if (index === activeIndex) return
  
    setIsLoading(true)
  
    setTimeout(() => {
      setActiveIndex(index)
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: index * window.innerWidth,  // ✅ use index directly here
          behavior: "smooth",
        })
      }
    }, 100)
  }
  

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (containerRef.current) {
      const newIndex = Math.round(containerRef.current.scrollLeft / window.innerWidth)
      setActiveIndex(newIndex)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (containerRef.current) {
      const newIndex = Math.round(containerRef.current.scrollLeft / window.innerWidth)
      setActiveIndex(newIndex)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && !isDragging) {
        const newIndex = Math.round(containerRef.current.scrollLeft / window.innerWidth)
        setActiveIndex(newIndex)
      }
    }

    const container = containerRef.current
    container?.addEventListener("scroll", handleScroll)
    return () => container?.removeEventListener("scroll", handleScroll)
  }, [isDragging])

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}

      <SidebarNavigation activeIndex={activeIndex} onNavigate={handleNavigate} />

      <div
        ref={containerRef}
        className="flex h-screen w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full snap-start">
            <CarouselSlide {...slide}>{slide.interface}</CarouselSlide>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}
