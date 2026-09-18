"use client"

import { useEffect, useState } from "react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        width: 52,
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        padding: 2,
        background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242,#45E0E8)",
        backgroundSize: "300% 100%",
        animation: "vail-sweep 4s linear infinite",
        boxShadow: "0 14px 34px -16px rgba(91,141,239,.95)",
        border: "none",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 200ms ease, transform 200ms ease",
        zIndex: 50,
      }}
    >
      <span
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "rgba(10,8,40,.94)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 15 12 9 18 15" />
        </svg>
      </span>
    </button>
  )
}
