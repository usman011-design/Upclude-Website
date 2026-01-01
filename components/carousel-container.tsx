"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CarouselSlide } from "./carousel-slide"
import { SidebarNavigation } from "./sidebar-navigation"
import { WordFindInterface } from "./app-interfaces/word-find-interface"

export function CarouselContainer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slidesRef = useRef(0) // keeps track of latest index

  const slides = [
    {
      title: "drop anxiety",
      subtitle: "dropanxiety",
      heading: "Your instant path to anxiety relief, anytime, anywhere.",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-amber-400 via-amber-400 to-amber-300",
      interface: <WordFindInterface src="./Group 3.png" />,
    },
    {
      title: "word find",
      subtitle: "wordfind",
      heading: "Find the hidden words, unlock your brainpower!",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#824DFF] via-[#AD8AFE] to-[#824DFF]",
      interface: <WordFindInterface src="./Group 2.png" />,
    },
    {
      title: "sudoku puzzle",
      subtitle: "sudokupuzzle",
      heading: "Challenge your brain with endless Sudoku fun.",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#698F66] via-[#78C273] to-[#698F66]",
      interface: <WordFindInterface src="./Group 4.png" />,
    },
    {
      title: "abc think tank",
      subtitle: "abcthinktank",
      heading: "Learn ABCs and 123s through fun play!",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#66808F] via-[#73ACC2] to-[#66808F]",
      interface: <WordFindInterface src="./Group 5.png" />,
    },
    {
      title: "draw quick draw",
      subtitle: "drawquickdraw",
      heading: "Draw any shape and watch the app instantly recognize it.",
      description: "Elegant, Flexible & Rich Features",
      bgGradient: "bg-gradient-to-br from-[#A9A35D] via-[#E1D485] to-[#A9A35D]",
      interface: <WordFindInterface src="./Group 6.png" />,
    },
  ]

  // Update ref whenever activeIndex changes
  useEffect(() => {
    slidesRef.current = activeIndex
  }, [activeIndex])

  // Replace setInterval auto-slide with timeout tied to current state
  useEffect(() => {
    if (isAnimating) return
    const t = setTimeout(() => {
      if (!isAnimating) handleNext()
    }, 7000) // slide every 7s when idle
    return () => clearTimeout(t)
  }, [activeIndex, isAnimating])

  const handleNext = () => {
    if (isAnimating) return

    const currentIndex = slidesRef.current
    const nextIndex = (currentIndex + 1) % slides.length

    setPrevIndex(currentIndex)
    setActiveIndex(nextIndex)
    slidesRef.current = nextIndex // keep ref synced
    setIsAnimating(true)
  }

  const handleNavigate = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setPrevIndex(activeIndex)
    setActiveIndex(index)
    slidesRef.current = index
    setIsAnimating(true)
  }

  return (
    <div className="relative w-full h-screen bg-neutral-950 overflow-hidden">
      <SidebarNavigation activeIndex={activeIndex} onNavigate={handleNavigate} />

      {/* Previous slide visible underneath */}
      <div className="absolute inset-0 z-10">
        {/* Always keep base slide visible to avoid black screen.
            We'll switch prevIndex to the new active at the end of the animation. */}
        <CarouselSlide {...slides[prevIndex]} isActive={true}>
          {slides[prevIndex].interface}
        </CarouselSlide>
      </div>

      {/* Reveal next slide from right → left */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key={activeIndex}
            className="absolute inset-0 z-20 overflow-hidden"
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            animate={{
              clipPath: "inset(0 0 0 0%)",
              transition: { duration: 3, ease: [0.65, 0.05, 0.36, 1] },
            }}
            onAnimationComplete={() => {
              setPrevIndex(slidesRef.current)
              setIsAnimating(false)
            }}
          >
            <CarouselSlide {...slides[activeIndex]} isActive={true}>
              {slides[activeIndex].interface}
            </CarouselSlide>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleNavigate(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
              activeIndex === i ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
