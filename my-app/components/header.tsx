"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90)
    const onResize = () => {
      const mobile = window.innerWidth < 760
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }
    onScroll()
    onResize()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, padding: "12px clamp(12px,3vw,20px)", background: "transparent" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "8px 8px 8px 14px",
          borderRadius: 999,
          border: `1px solid ${scrolled ? "rgba(255,255,255,.1)" : "transparent"}`,
          background: "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "blur(4px)",
          boxShadow: scrolled ? "0 22px 50px -28px rgba(0,0,0,.95)" : "none",
          transition: "background .4s ease, border-color .4s ease, box-shadow .4s ease",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff", flex: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/brand/vail-icon.png"
            alt=""
            style={{
              height: 34,
              width: 34,
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 0 12px rgba(111,227,240,.4))",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Venture
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 9.5,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#6FE3F0",
              paddingTop: 2,
            }}
          >
            AI Labs
          </span>
        </Link>

        {!isMobile && (
          <>
            <span style={{ width: 1, height: 22, background: "rgba(255,255,255,.14)", flex: "none" }} />
            <nav style={{ display: "flex", alignItems: "center", gap: 2, fontSize: 14, flexWrap: "wrap" }}>
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="vail-nav-link">
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/apply"
              className="vail-cta"
              style={{
                marginLeft: "auto",
                flex: "none",
                display: "block",
                padding: 2,
                borderRadius: 999,
                background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242,#45E0E8)",
                backgroundSize: "300% 100%",
                animation: "vail-sweep 4s linear infinite",
                boxShadow: "0 10px 26px -14px rgba(91,141,239,.95)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 17px",
                  borderRadius: 999,
                  background: "rgba(10,8,40,.92)",
                  fontWeight: 600,
                  fontSize: 13.5,
                  letterSpacing: ".01em",
                }}
              >
                Enquire<span style={{ fontSize: 15, lineHeight: 1 }}>→</span>
              </span>
            </Link>
          </>
        )}

        {isMobile && (
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            style={{
              marginLeft: "auto",
              flex: "none",
              width: 44,
              height: 44,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(10,8,40,.7)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                background: "#fff",
                display: "block",
                transition: "transform .3s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                background: "#fff",
                display: "block",
                transition: "opacity .3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                background: "#fff",
                display: "block",
                transition: "transform .3s",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            maxWidth: 1360,
            margin: "10px auto 0",
            padding: 10,
            borderRadius: 22,
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(13,11,51,.94)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 30px 60px -30px rgba(0,0,0,.95)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="vail-mobile-link"
              style={{ padding: "14px 16px", borderRadius: 14, color: "#E6E9F0", fontSize: 16, fontWeight: 500 }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 6,
              display: "block",
              padding: 2,
              borderRadius: 999,
              background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242,#45E0E8)",
              backgroundSize: "300% 100%",
              animation: "vail-sweep 4s linear infinite",
              color: "#fff",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                padding: "13px 17px",
                borderRadius: 999,
                background: "rgba(10,8,40,.94)",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Enquire<span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
            </span>
          </Link>
        </div>
      )}
    </header>
  )
}
