"use client"

import { useEffect, useRef, useState } from "react"

export function Reveal({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    )
    io.observe(el)
    const failsafe = setTimeout(() => setVisible(true), 1200)
    return () => {
      io.disconnect()
      clearTimeout(failsafe)
    }
  }, [])

  return (
    <div ref={ref} className={`vail-reveal ${visible ? "vail-reveal-in" : ""} ${className}`} style={style}>
      {children}
    </div>
  )
}
