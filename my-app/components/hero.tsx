"use client"

import { useRef } from "react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { HeroSparkles } from "@/components/hero-sparkles"

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${x * -40}px, ${y * -30}px, 0)`
    }
  }

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.transform = "translate3d(0,0,0)"
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: -88,
        paddingTop: 88,
        borderBottom: "1px solid rgba(255,255,255,.07)",
      }}
    >
      <div ref={glowRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", transition: "transform .6s cubic-bezier(.2,.7,.2,1)", willChange: "transform" }}>
        <div style={{ position: "absolute", inset: "-25% -10%", pointerEvents: "none", background: "radial-gradient(45% 45% at 22% 28%, rgba(124,58,237,.5), transparent 70%)", filter: "blur(30px)", animation: "vail-drift 22s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: "-25% -10%", pointerEvents: "none", background: "radial-gradient(40% 40% at 78% 62%, rgba(69,224,232,.3), transparent 70%)", filter: "blur(40px)", animation: "vail-drift2 28s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: "-25% -10%", pointerEvents: "none", background: "radial-gradient(34% 34% at 62% 18%, rgba(255,95,162,.26), transparent 70%)", filter: "blur(46px)", animation: "vail-drift 32s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", inset: "-25% -10%", pointerEvents: "none", background: "radial-gradient(30% 30% at 12% 82%, rgba(245,194,66,.18), transparent 70%)", filter: "blur(50px)", animation: "vail-drift2 38s ease-in-out infinite" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <HeroSparkles />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(70% 60% at 50% 40%, #000, transparent)",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 40%, #000, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "35%",
          pointerEvents: "none",
          background: "linear-gradient(180deg,transparent,rgba(111,227,240,.06),transparent)",
          animation: "vail-scan 9s linear infinite",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1420,
          margin: "0 auto",
          padding: "clamp(48px,8vw,110px) clamp(20px,4vw,32px) clamp(56px,8vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: 56,
          alignItems: "center",
        }}
      >
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "7px 14px 7px 11px",
                border: "1px solid rgba(111,227,240,.3)",
                borderRadius: 999,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11.5,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#6FE3F0",
                background: "rgba(111,227,240,.06)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6FE3F0", animation: "vail-blink 2.4s ease-in-out infinite" }} />
              Brisbane · AI startup incubator
            </div>
          </div>
          <h1
            style={{
              margin: "26px 0 0",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(40px,6.4vw,74px)",
              lineHeight: 1.02,
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            Incubating the Future of{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI Startups
            </span>{" "}
            in Australia
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: "52ch", fontSize: "clamp(16.5px,1.5vw,19px)", lineHeight: 1.6, color: "#A5ADBC", textWrap: "pretty" }}>
            Based in Brisbane, Australia, we create and accelerate innovative AI startups, transforming groundbreaking
            ideas into rapid prototypes and market-ready solutions.
          </p>
          <div style={{ marginTop: 38, display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link
              href="/apply"
              className="vail-cta"
              style={{
                display: "inline-block",
                padding: 2,
                borderRadius: 999,
                background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242,#45E0E8)",
                backgroundSize: "300% 100%",
                animation: "vail-sweep 4s linear infinite",
                boxShadow: "0 14px 34px -16px rgba(91,141,239,.95)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  padding: "13px 28px",
                  borderRadius: 999,
                  background: "rgba(10,8,40,.94)",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 600,
                  fontSize: 15.5,
                  letterSpacing: "-.01em",
                }}
              >
                Start an enquiry<span style={{ fontSize: 17, lineHeight: 1 }}>→</span>
              </span>
            </Link>
            <a
              href="#projects"
              className="vail-outline-btn"
              style={{ padding: "15px 28px", borderRadius: 999, color: "#ECEEF2", fontWeight: 500, fontSize: 15.5 }}
            >
              See the projects
            </a>
          </div>
        </Reveal>

        <Reveal style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "min(90vw, 600px)" }}>
          <div
            style={{
              position: "absolute",
              width: "78%",
              aspectRatio: "1/1",
              pointerEvents: "none",
              background: "radial-gradient(circle at 50% 50%, rgba(111,227,240,.28), rgba(168,85,247,.18) 45%, transparent 68%)",
              filter: "blur(26px)",
              animation: "vail-drift 20s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 645,
              padding: 4,
              borderRadius: 30,
              background: "linear-gradient(150deg,rgba(69,224,232,.7),rgba(91,141,239,.6),rgba(168,85,247,.6),rgba(255,95,162,.6))",
              boxShadow: "0 50px 110px -40px rgba(0,0,0,.95)",
            }}
          >
            <video
              src="/img/brand/mascot-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/img/brand/mascot-rocket.png"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: 26, background: "#0D0B33" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
