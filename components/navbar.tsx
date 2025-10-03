"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base">D</span>
                </div>
                <span className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Drop Anxiety
                </span>
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium text-sm xl:text-base"
              >
                About
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium text-sm xl:text-base"
              >
                Features
              </a>
              <a
                href="#resources"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium text-sm xl:text-base"
              >
                Resources
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium text-sm xl:text-base"
              >
                Contact
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <button className="px-3 py-1.5 xl:px-4 xl:py-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors text-sm xl:text-base">
                Sign In
              </button>
              <button className="px-4 py-2 xl:px-6 xl:py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium text-sm xl:text-base">
                Get Started
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu content */}
        <div
          className={`absolute top-14 sm:top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-1 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
            <a
              href="#about"
              className="block text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors font-medium py-3 px-4 rounded-lg text-base sm:text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="block text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors font-medium py-3 px-4 rounded-lg text-base sm:text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#resources"
              className="block text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors font-medium py-3 px-4 rounded-lg text-base sm:text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors font-medium py-3 px-4 rounded-lg text-base sm:text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>

            <div className="pt-6 space-y-3 border-t border-gray-100 mt-4">
              <button className="w-full px-4 py-3 sm:py-3.5 text-cyan-600 border-2 border-cyan-600 rounded-full hover:bg-cyan-50 font-medium transition-colors text-base sm:text-lg touch-manipulation">
                Sign In
              </button>
              <button className="w-full px-4 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full hover:shadow-lg font-medium transition-all text-base sm:text-lg touch-manipulation">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
