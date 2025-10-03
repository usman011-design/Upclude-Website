"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export function AnimatedText({ texts, interval = 3000, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <p className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
      {texts[currentIndex]}
    </p>
  )
}
