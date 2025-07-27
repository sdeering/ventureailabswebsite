"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { SpaceBackground } from "@/components/space-background"
import { useState, useEffect } from "react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["Automate", "Transform", "Grow", "Socialize"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#21262d] relative overflow-hidden"
    >
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      {/* Three.js Space Background */}
      <SpaceBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex items-center justify-center">
          {/* Content */}
          <div className="text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span
                  key={currentWordIndex}
                  className="inline-block animate-pulse"
                  style={{
                    animation: "fadeInOut 3s ease-in-out infinite",
                  }}
                >
                  {words[currentWordIndex]}
                </span>{" "}
                Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                  AI Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                VENTURE AI LABS delivers cutting-edge AI automation services, startup solutions, SEO optimization, and
                social media content generation to accelerate your business growth.
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg border-0 backdrop-blur-sm"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
          </div>

          {/* Visual */}
        </div>
      </div>
    </section>
  )
}
