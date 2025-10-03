"use client"

import { useEffect, useState } from "react"

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [currentColor, setCurrentColor] = useState(0)
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length)
    }, 150)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      onComplete()
    }, 1200)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative h-32 w-32">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`absolute inset-0 rounded-full transition-all duration-300 ${
              index === currentColor ? "scale-100 opacity-100" : "scale-75 opacity-0"
            } ${color}`}
          />
        ))}
      </div>
    </div>
  )
}
