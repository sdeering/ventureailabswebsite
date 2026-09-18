"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

const GRID_OPTIONS = [2, 3, 4] as const

interface Project {
  name: string
  description: string
  image: string
  href?: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    name: "CryptoDataAPI.com",
    description: "Real-time crypto market data infrastructure — 190+ endpoints for AI trading agents.",
    image: "/img/projects/cryptodataapi.jpg",
    href: "https://cryptodataapi.com",
  },
  {
    name: "StockMarketAPI.ai",
    description: "Real-time equities, fundamentals, and options data for trading agents.",
    image: "/img/projects/stockmarketapi.jpg",
    href: "https://stockmarketapi.ai",
  },
  {
    name: "Datasales.ai",
    description: "An AI training-data marketplace for buying and selling structured datasets.",
    image: "/img/projects/datasales.jpg",
    href: "https://datasales.ai/",
  },
  {
    name: "EasyEscrow.ai",
    description: "A non-custodial stablecoin settlement layer on Solana for institutions.",
    image: "/img/projects/easyescrow.jpg",
    href: "https://easyescrow.ai/",
  },
  {
    name: "DigitalDeals.ai",
    description: "An agent-to-agent marketplace where AI agents trade digital goods via API.",
    image: "/img/projects/digitaldeals.jpg",
    href: "https://digitaldeals.ai/",
  },
  {
    name: "FindEvents.ai",
    description: "A personal AI assistant that connects people with local events worldwide.",
    image: "/img/projects/findevents.jpg",
    href: "https://findevents.ai/",
  },
  {
    name: "TrustPass.ai",
    description: "An on-chain identity and reputation layer for AI agents.",
    image: "/img/projects/trustpass.jpg",
    href: "https://trustpass.ai/",
  },
  {
    name: "RequestTap.ai",
    description: "Turns any API into a x402 USDC pay-per-request service for AI agents.",
    image: "/img/projects/requesttap.jpg",
    href: "https://requesttap.ai",
  },
  {
    name: "UrgentTradie.com",
    description: "An emergency tradie network connecting Australians with verified local trades, fast.",
    image: "/img/projects/urgenttradie.jpg",
    href: "https://urgenttradie.com/",
  },
  {
    name: "StacksTasker.com",
    description: "An AI-agent task marketplace paying out in STX on the Stacks blockchain.",
    image: "/img/projects/stackstasker.jpg",
    href: "https://stackstasker.com/",
  },
  {
    name: "SportsPredictor.ai",
    description: "Real-time sports prediction data built for AI agents, not dashboards.",
    image: "/img/projects/sportspredictor.jpg",
    href: "https://sportspredictor.ai/",
  },
  {
    name: "NFTSwap.gg",
    description: "A Solana platform for swapping NFTs directly with other collectors.",
    image: "/img/projects/nftswap.jpg",
    href: "https://nftswap.gg/",
  },
  {
    name: "BEERO",
    description: "AI-powered bookkeeping for small businesses — $9/month, no accountant required.",
    image: "/img/projects/beero.jpg",
    href: "/beero",
  },
  {
    name: "ALFRED",
    description: "A financial-brain research agent that automates fundamentals gathering and strategy hypotheses.",
    image: "/img/projects/alfred.jpg",
    href: "https://alfredinvestor.com/",
  },
  {
    name: "Algobrain",
    description: "An LLM knowledge base of trading strategies, served to AI agents via MCP.",
    image: "/img/projects/algobrain.gif",
    href: "https://github.com/Crypto-Data-API/algobrain",
    linkLabel: "View on GitHub",
  },
  {
    name: "Hyperliquid Trading Agent",
    description: "An autonomous trading agent built on the Hyperliquid perpetuals exchange.",
    image: "/img/projects/hyperliquid-trader.png",
  },
]

function handleTiltMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  el.style.transform = `perspective(900px) rotateX(${y * -10}deg) rotateY(${x * 12}deg) translateY(-6px)`
}

function handleTiltLeave(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)"
}

export function Projects() {
  const [cols, setCols] = useState<(typeof GRID_OPTIONS)[number]>(2)
  const [isNarrow, setIsNarrow] = useState(false)

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth < 640)
    onResize()
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section id="projects" style={{ borderBottom: "1px solid rgba(255,255,255,.07)", background: "#0C0A30" }}>
      <div style={{ maxWidth: 1420, margin: "0 auto", padding: "clamp(64px,10vw,110px) clamp(20px,4vw,32px)" }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  padding: 2,
                  background: "linear-gradient(135deg,#45E0E8,#5B8DEF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px -12px rgba(0,0,0,.9)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/brand/mascot-arms.png"
                  alt=""
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 6%", background: "#0D0B33", display: "block" }}
                />
              </span>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11.5, letterSpacing: ".18em", textTransform: "uppercase", color: "#6FE3F0" }}>
                01 — Projects
              </div>
            </div>
            <h2
              style={{
                margin: "18px 0 0",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(30px,3.6vw,46px)",
                lineHeight: 1.08,
                letterSpacing: "-.025em",
                color: "#fff",
              }}
            >
              Projects from the lab
            </h2>
          </div>
          <Link href="/apply" style={{ fontSize: 15, color: "#6FE3F0" }}>
            Build the next one →
          </Link>
        </Reveal>

        <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#97A0B5" }}>
            Grid
          </span>
          <div style={{ display: "flex", gap: 6, padding: 4, borderRadius: 999, border: "1px solid rgba(255,255,255,.09)", background: "#0D0B32" }}>
            {GRID_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setCols(n)}
                aria-pressed={cols === n}
                aria-label={`${n} per row`}
                style={{
                  width: 34,
                  height: 30,
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 12.5,
                  fontWeight: 500,
                  color: cols === n ? "#0A0828" : "#9BA3B6",
                  background: cols === n ? "linear-gradient(90deg,#45E0E8,#5B8DEF)" : "transparent",
                  transition: "background .2s, color .2s",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 22,
            display: "grid",
            gridTemplateColumns: isNarrow ? "1fr" : `repeat(${cols}, minmax(0, 1fr))`,
            gap: 26,
          }}
        >
          {projects.map((project) => (
            <Reveal key={project.name}>
              <div
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
                className="vail-project-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  border: "1px solid rgba(255,255,255,.09)",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "#0D0B32",
                  willChange: "transform",
                }}
              >
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", aspectRatio: "16/9", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,.07)", background: "radial-gradient(70% 90% at 30% 10%, rgba(124,58,237,.18), transparent)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.image} alt={`${project.name} screenshot`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </a>
                ) : (
                  <div style={{ aspectRatio: "16/9", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,.07)", background: "radial-gradient(70% 90% at 30% 10%, rgba(124,58,237,.18), transparent)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.image} alt={`${project.name} screenshot`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                )}
                <div style={{ padding: "26px 26px 28px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 20, color: "#fff" }}>{project.name}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#9BA3B6", flex: 1 }}>{project.description}</p>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: 8, fontSize: 14, color: "#6FE3F0" }}
                    >
                      {project.linkLabel ?? "Visit site"} →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
