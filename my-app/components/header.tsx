"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md border-gray-200/50 dark:border-gray-800/50 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/img/alpha-ai-labs-logo15.png"
              alt="VENTURE AI LABS"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg"
            />
            <span
              className="text-xl font-bold text-gray-900 dark:text-white"
              style={{
                fontFamily: 'GARET, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: "bold",
              }}
            >
              VENTURE AI LABS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("ai-tools")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              AI Tools
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white border-0"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md border-gray-200/50 dark:border-gray-800/50">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("ai-tools")}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-full text-left"
              >
                AI Tools
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full border-0"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
