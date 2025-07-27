"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
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
      className="pt-16 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#21262d] dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#21262d] relative overflow-hidden"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
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
              <p className="text-xl text-gray-300 leading-relaxed">
                VENTURE AI LABS delivers cutting-edge AI automation services, startup solutions, SEO optimization, and
                social media content generation to accelerate your business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <Image
                src="/lightbulb-img.png"
                alt="AI Innovation Lightbulb with Technology Icons"
                width={600}
                height={600}
                className="w-full h-auto max-w-lg mx-auto mix-blend-screen"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
