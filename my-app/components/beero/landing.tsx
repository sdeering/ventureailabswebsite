'use client'

/**
 * BEERO public landing page.
 *
 * Ported from the private Beero.ai app (Venture AI Labs portfolio project)
 * for display purposes only — the authenticated product lives elsewhere.
 * CTA links point to "#" since the sign-up/login flow is not hosted here.
 *
 * Visual system:
 *   - Display: Archivo Black (chunky, confident)
 *   - Body: Inter
 *   - Editorial italic: Instrument Serif
 *   - Mono: JetBrains Mono
 *   - Palette: amber-orange #FF6B1F, deep stout #1A0F0A, cream foam #FBF1DC,
 *              paper #FDF6E8
 *   - Borders: hard 3px stout-black with offset orange shadows
 *   - Texture: subtle paper-grain dot overlay
 */
import { useEffect, useState } from 'react'
import './landing.css'

export default function BeeroLandingPage() {
  return (
    <div className="beero-landing">
      <Nav />
      <Hero />
      <Ticker />
      <Features />
      <BeerMath />
      <AppShow />
      <Reviews />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--orange)',
        color: 'var(--stout)',
        border: '3px solid var(--stout)',
        borderRadius: '50%',
        boxShadow: '4px 4px 0 var(--stout)',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 200ms ease, transform 200ms ease',
        zIndex: 50,
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="6 15 12 9 18 15" />
      </svg>
    </button>
  )
}

// ─── SVGs ─────────────────────────────────────────────────────────────

function BeerMug({ size = 480 }: { size?: number }) {
  return (
    <svg viewBox="0 0 400 480" width={size} height={size * 480 / 400} style={{ display: 'block' }}>
      <defs>
        <linearGradient id="beerGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFC857" />
          <stop offset="0.55" stopColor="var(--orange)" />
          <stop offset="1" stopColor="var(--orange-deep)" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="0.4" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.12)" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="455" rx="150" ry="14" fill="var(--stout)" opacity="0.18" />
      <path d="M 290 160 Q 370 160 370 240 Q 370 320 290 320 L 290 290 Q 335 290 335 240 Q 335 190 290 190 Z" fill="var(--orange-deep)" stroke="var(--stout)" strokeWidth="4" />
      <rect x="70" y="130" width="230" height="310" rx="14" fill="url(#beerGrad)" stroke="var(--stout)" strokeWidth="5" />
      <rect x="70" y="130" width="230" height="310" rx="14" fill="url(#glassGrad)" />
      <circle cx="115" cy="200" r="6" fill="#FFE7A1" opacity="0.9" />
      <circle cx="140" cy="260" r="4" fill="#FFE7A1" opacity="0.8" />
      <circle cx="105" cy="330" r="5" fill="#FFE7A1" opacity="0.8" />
      <circle cx="170" cy="380" r="3" fill="#FFE7A1" opacity="0.7" />
      <circle cx="135" cy="410" r="6" fill="#FFE7A1" opacity="0.9" />
      <circle cx="240" cy="220" r="4" fill="#FFE7A1" opacity="0.8" />
      <circle cx="260" cy="300" r="5" fill="#FFE7A1" opacity="0.7" />
      <circle cx="220" cy="360" r="3" fill="#FFE7A1" opacity="0.8" />
      <path d="M 65 140 C 75 100, 105 95, 120 115 C 130 85, 165 80, 175 110 C 188 85, 220 88, 225 115 C 240 90, 275 95, 280 120 C 295 100, 315 115, 305 145 L 65 145 Z"
        fill="#FFFCF1" stroke="var(--stout)" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="115" cy="105" r="6" fill="#FFFCF1" stroke="var(--stout)" strokeWidth="3" />
      <circle cx="175" cy="95" r="7" fill="#FFFCF1" stroke="var(--stout)" strokeWidth="3" />
      <circle cx="235" cy="100" r="5" fill="#FFFCF1" stroke="var(--stout)" strokeWidth="3" />
      <circle cx="265" cy="85" r="4" fill="#FFFCF1" stroke="var(--stout)" strokeWidth="3" />
      <rect x="85" y="150" width="10" height="200" rx="5" fill="white" opacity="0.55" />
    </svg>
  )
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36">
      <rect x="2" y="2" width="32" height="32" rx="9" fill="var(--orange)" stroke="var(--stout)" strokeWidth="2.5" />
      <path d="M 9 11 Q 11 6, 14 10 Q 17 6, 20 10 Q 23 6, 26 11 L 26 14 L 9 14 Z" fill="#FFFCF1" stroke="var(--stout)" strokeWidth="2" strokeLinejoin="round" />
      <rect x="9" y="14" width="17" height="15" rx="1.5" fill="#FFC857" stroke="var(--stout)" strokeWidth="2" />
      <circle cx="14" cy="20" r="1" fill="#FFFCF1" />
      <circle cx="20" cy="24" r="1" fill="#FFFCF1" />
    </svg>
  )
}

function Scribble({ width = 280, color = 'var(--orange)' }: { width?: number | string; color?: string }) {
  return (
    <svg viewBox="0 0 280 24" width={width as number} height="24" style={{ display: 'block' }}>
      <path d="M 5 14 Q 60 4, 110 12 T 215 10 T 275 14" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function Stamp({ children, rotate = -8 }: { children: React.ReactNode; rotate?: number }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      border: '3px solid var(--orange-deep)', color: 'var(--orange-deep)',
      padding: '8px 14px', borderRadius: 8,
      fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 600, fontSize: 11,
      letterSpacing: 2, textTransform: 'uppercase',
      transform: `rotate(${rotate}deg)`,
      background: 'rgba(255,107,31,0.06)',
    }}>{children}</div>
  )
}

function BottleCap({ size = 100 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <g>
        {Array.from({ length: 22 }).map((_, i) => {
          const a = (i * 360 / 22) * Math.PI / 180
          return <line key={i} x1={50 + Math.cos(a) * 30} y1={50 + Math.sin(a) * 30} x2={50 + Math.cos(a) * 45} y2={50 + Math.sin(a) * 45} stroke="var(--orange)" strokeWidth="4" strokeLinecap="round" />
        })}
        <circle cx="50" cy="50" r="32" fill="var(--orange)" stroke="var(--stout)" strokeWidth="3" />
        <text x="50" y="56" textAnchor="middle" fontFamily="var(--font-archivo-black), sans-serif" fontSize="14" fill="var(--stout)">BEERO</text>
      </g>
    </svg>
  )
}

function ReceiptIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M 6 3 L 22 3 L 22 25 L 19 22 L 16 25 L 13 22 L 10 25 L 6 22 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
      <line x1="9" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function InvoiceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M 14 9 L 14 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 17 11 Q 14 9, 11 11 Q 8 13, 11 15 Q 14 17, 17 15 Q 20 13, 17 11" stroke="currentColor" strokeWidth="2.2" fill="none" />
    </svg>
  )
}
function TaxIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2.2" />
      <line x1="9" y1="19" x2="19" y2="9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="10.5" cy="10.5" r="1.8" fill="currentColor" />
      <circle cx="17.5" cy="17.5" r="1.8" fill="currentColor" />
    </svg>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="nav" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '24px 56px', position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in srgb, var(--paper) 88%, transparent)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Logo />
        <span className="display" style={{ fontSize: 28, color: 'var(--stout)' }}>BEERO</span>
        <span className="mono nav-brand-beta" style={{ fontSize: 10, letterSpacing: 2, color: 'var(--orange-deep)', padding: '3px 7px', border: '1.5px solid var(--orange-deep)', borderRadius: 4, marginLeft: 4 }}>BETA</span>
      </div>
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36, fontSize: 15, fontWeight: 500 }}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#tab">Bar tab</a>
        <a href="#reviews">Stories</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="#" className="nav-signin" style={{ background: 'transparent', border: 0, fontSize: 15, fontWeight: 600, color: 'var(--stout)' }}>Sign in</a>
        <a href="#" style={{
          background: 'var(--stout)', color: 'var(--paper)',
          border: 0, padding: '10px 18px', borderRadius: 999, fontWeight: 600, fontSize: 14,
          boxShadow: '3px 3px 0 var(--orange)',
          display: 'inline-block',
        }}><span className="nav-cta-text">Pour me in </span>→</a>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────

function FloatingChip({ children, top, bottom, left, right, rotate = 0 }: { children: React.ReactNode; top?: number; bottom?: number; left?: number; right?: number; rotate?: number }) {
  return (
    <div className="chip" style={{
      position: 'absolute',
      top, bottom, left, right,
      background: 'var(--paper)',
      border: '2.5px solid var(--stout)',
      borderRadius: 12,
      padding: '12px 16px',
      display: 'flex', flexDirection: 'column', gap: 2,
      fontSize: 15, fontWeight: 600, color: 'var(--stout)',
      transform: `rotate(${rotate}deg)`,
      boxShadow: '4px 4px 0 var(--orange)',
      zIndex: 3,
      minWidth: 200,
    }}>
      {children}
    </div>
  )
}

function Hero() {
  const ctaLabel = 'Pour me a free trial'
  return (
    <section className="hero section-pad" style={{ position: 'relative', padding: '64px 56px 80px' }}>
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1480, margin: '0 auto' }}>
        <div>
          <div className="hero-stamps" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <Stamp rotate={-4}>★ Now Pouring</Stamp>
            <div className="mono" style={{ fontSize: 12, color: 'var(--ink)', letterSpacing: 1 }}>
              v1.0 · self-serve books for small businesses
            </div>
          </div>
          <h1 className="display hero-h1" style={{ fontSize: 'clamp(56px, 7vw, 108px)', color: 'var(--stout)', margin: '0 0 22px' }}>
            Spend money<br />
            on <span style={{ position: 'relative', display: 'inline-block', color: 'var(--orange)' }}>
              Beer<i className="serif-i" style={{ fontWeight: 400, color: 'var(--stout)' }}>,</i>
              <span style={{ position: 'absolute', left: -4, right: -4, bottom: -4 }}>
                <Scribble width="100%" color="var(--orange-deep)" />
              </span>
            </span><br />
            not <span className="serif-i" style={{ fontWeight: 400, color: 'var(--ink)' }}>accountants</span>
            <span style={{ color: 'var(--orange)' }}>…</span>
          </h1>
          <p className="hero-sub" style={{ fontSize: 21, lineHeight: 1.45, color: 'var(--ink)', maxWidth: 540, margin: '0 0 36px' }}>
            BEERO is bookkeeping that finishes itself. Snap a receipt, send an invoice,
            file your taxes — all before your pint goes flat. <strong style={{ color: 'var(--stout)' }}>$9/month. No CPA on retainer.</strong>
          </p>
          <div className="hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href="#" style={{
              background: 'var(--orange)', color: 'var(--stout)',
              border: '3px solid var(--stout)',
              padding: '18px 28px', borderRadius: 999,
              fontFamily: 'var(--font-archivo-black), sans-serif', fontSize: 18, letterSpacing: '-0.01em',
              boxShadow: '6px 6px 0 var(--stout)',
              display: 'inline-block',
            }}>🍺 &nbsp;{ctaLabel}</a>
            <button style={{
              background: 'transparent', color: 'var(--stout)',
              border: '2px dashed var(--stout)',
              padding: '17px 24px', borderRadius: 999,
              fontWeight: 600, fontSize: 16,
            }}>
              Watch a 60-sec demo →
            </button>
          </div>
          <div className="hero-social" style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 36, fontSize: 13, color: 'var(--ink)' }}>
            <div style={{ display: 'flex' }}>
              {['#F2A93B', '#FF6B1F', '#E2530A', '#8B4513'].map((c, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: c, border: '2px solid var(--paper)',
                  marginLeft: i ? -10 : 0,
                  fontFamily: 'var(--font-archivo-black), sans-serif', fontSize: 12, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{['MK', 'JR', 'AL', '+'][i]}</div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--stout)' }}>★★★★★ &nbsp;4.9 from 2,184 small businesses</div>
              <div style={{ marginTop: 2 }}>&ldquo;Replaced my $400/mo accountant. Sorry, Brenda.&rdquo; — Maya, brewery owner</div>
            </div>
          </div>
        </div>
        <div className="hero-right" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', minHeight: 580 }}>
          <div className="hero-circle" style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', background: 'var(--cream)', top: 20, right: 30, border: '3px solid var(--stout)' }} />
          <div className="hero-orbit" style={{ position: 'absolute', width: 560, height: 560, borderRadius: '50%', border: '2px dashed var(--orange-deep)', top: 0, right: 10, opacity: 0.4 }} />
          <FloatingChip top={40} left={-10} rotate={-6}>
            <strong style={{ color: 'var(--orange-deep)' }}>+$2,140</strong>
            <span style={{ color: 'var(--ink)', fontSize: 12 }}>auto-categorized · invoice #482</span>
          </FloatingChip>
          <FloatingChip top={260} right={-30} rotate={5}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink)', letterSpacing: 1 }}>RECEIPT 📸</span>
            <strong>Tap → Booked.</strong>
            <span style={{ color: 'var(--ink)', fontSize: 12 }}>0.8 sec · 100% confident</span>
          </FloatingChip>
          <FloatingChip bottom={20} left={20} rotate={-3}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--orange-deep)', letterSpacing: 1 }}>Q3 TAXES</span>
            <strong>Filed.</strong>
            <span style={{ color: 'var(--ink)', fontSize: 12 }}>Saved $1,820 vs. last yr</span>
          </FloatingChip>
          <div className="hero-mug-wrap" style={{ position: 'relative', zIndex: 2, transform: 'translateY(20px)' }}>
            <BeerMug size={480} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Ticker ───────────────────────────────────────────────────────────

function Ticker() {
  const items = [
    '🍺 Self-serve bookkeeping',
    '★ No accountants required',
    '$9/month flat',
    '🧾 Receipts → categorized in 0.8s',
    'Quarterly taxes? Filed.',
    '★ 2,184 happy small businesses',
    'Built for restaurants, freelancers, & barflies',
  ]
  const row = [...items, ...items, ...items]
  return (
    <div style={{
      background: 'var(--stout)', color: 'var(--paper)',
      padding: '18px 0', overflow: 'hidden',
      borderTop: '3px solid var(--orange)',
      borderBottom: '3px solid var(--orange)',
    }}>
      <div className="ticker-row" style={{
        display: 'flex', gap: 56, whiteSpace: 'nowrap',
        animation: 'beeroTickerScroll 40s linear infinite',
        fontFamily: 'var(--font-archivo-black), sans-serif', fontSize: 22, letterSpacing: '-0.01em',
      }}>
        {row.map((t, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            {t}
            <span style={{ color: 'var(--orange)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Features ─────────────────────────────────────────────────────────

function Features() {
  const feats = [
    { n: '01', title: 'Snap receipts. Done.', body: 'Point your phone, BEERO reads the line items, vendor, tax, and tip. Categorizes it, logs it, archives the JPG.', icon: <ReceiptIcon /> },
    { n: '02', title: 'Invoices that get paid.', body: 'Branded invoices in two taps. Automatic nudges. Stripe-fast payouts. We make it weird if they don’t pay.', icon: <InvoiceIcon /> },
    { n: '03', title: 'Taxes, filed flat.', body: 'Quarterlies, sales tax, year-end — auto-prepared and e-filed. Our beer-money guarantee covers any penalty.', icon: <TaxIcon /> },
  ]
  return (
    <section id="features" className="features section-pad" style={{ padding: '120px 56px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="features-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: 12, color: 'var(--orange-deep)', letterSpacing: 3, marginBottom: 14 }}>◆ ON TAP — THE WORKS</div>
            <h2 className="display section-h2" style={{ fontSize: 'clamp(48px, 5vw, 76px)', margin: 0, maxWidth: 900 }}>
              Three pours. One <span className="serif-i" style={{ color: 'var(--orange)' }}>flawless</span> back office.
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--ink)', maxWidth: 360, margin: 0 }}>
            Every feature on this page replaces a thing your accountant used to charge you for. We did the math. They will hate us.
          </p>
        </div>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {feats.map((f, i) => (
            <article key={f.n} className="feat-card" style={{
              background: i === 1 ? 'var(--orange)' : 'var(--cream)',
              border: '3px solid var(--stout)',
              borderRadius: 20,
              padding: '32px 28px 28px',
              display: 'flex', flexDirection: 'column',
              minHeight: 460,
              boxShadow: '6px 6px 0 var(--stout)',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 28 }}>
                <span className="display" style={{ fontSize: 22, color: 'var(--stout)', opacity: 0.4 }}>—{f.n}</span>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: i === 1 ? 'var(--stout)' : 'var(--orange)',
                  border: '2.5px solid var(--stout)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: i === 1 ? 'var(--orange)' : 'var(--stout)',
                }}>
                  {f.icon}
                </div>
              </div>
              <h3 className="display" style={{ fontSize: 34, color: 'var(--stout)', margin: '0 0 14px', lineHeight: 1 }}>{f.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.45, color: 'var(--stout)', opacity: 0.85, margin: 0, flex: 1 }}>{f.body}</p>
              <div className="mono" style={{ marginTop: 24, fontSize: 12, letterSpacing: 1, color: 'var(--stout)', borderTop: '1.5px solid var(--stout)', paddingTop: 14, opacity: 0.65 }}>
                LEARN MORE →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Beer Math ────────────────────────────────────────────────────────

function MathRow({ label, amount, beers, pad = true }: { label: string; amount: string; beers: string; pad?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: pad ? '10px 0' : '10px 0 0', borderBottom: pad ? '1px solid var(--line)' : 'none' }}>
      <span style={{ fontSize: 15, color: 'var(--ink)' }}>{label}</span>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--orange-deep)' }}>{beers}</span>
        <span style={{ fontWeight: 600, fontSize: 16 }}>{amount}</span>
      </span>
    </div>
  )
}

function BeerMath() {
  return (
    <section className="math section-pad" style={{ background: 'var(--stout)', color: 'var(--paper)', padding: '120px 56px', position: 'relative', overflow: 'hidden' }}>
      <div className="math-grid" style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--orange)', letterSpacing: 3, marginBottom: 14 }}>◆ THE BEER MATH</div>
          <h2 className="display math-h2" style={{ fontSize: 'clamp(46px, 5vw, 76px)', margin: '0 0 28px', lineHeight: 0.95 }}>
            Your accountant<br />
            costs <span style={{ color: 'var(--orange)' }}>409</span> beers<br />
            a year<span className="serif-i" style={{ fontWeight: 400, color: 'var(--orange)' }}>.</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'rgba(251,241,220,0.75)', maxWidth: 500, margin: 0 }}>
            The average U.S. small business spends $2,455/yr on accounting. At $6 a pint, that&rsquo;s 409 beers you didn&rsquo;t drink. BEERO is $108/yr. That&rsquo;s 391 beers, back in your pocket.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="math-card" style={{
            background: 'var(--paper)', color: 'var(--stout)',
            border: '3px solid var(--orange)',
            borderRadius: 20, padding: 32,
            boxShadow: '10px 10px 0 var(--orange)',
          }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--ink)', marginBottom: 18 }}>ANNUAL COST · TYPICAL SMB</div>
            <MathRow label="Bookkeeper retainer" amount="$1,680" beers="280 beers" />
            <MathRow label="Tax filing (quarterly + annual)" amount="$575" beers="96 beers" />
            <MathRow label="The frustrated reply-all emails" amount="$200" beers="33 beers" />
            <MathRow label="Software no one uses" amount="$240" beers="40 beers" pad={false} />
            <hr style={{ border: 0, borderTop: '2px dashed var(--line)', margin: '20px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 600, fontSize: 16 }}>The old way</span>
              <span className="display" style={{ fontSize: 38, color: 'var(--ink)' }}>$2,695</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 12, padding: '14px 18px', background: 'var(--orange)', borderRadius: 10, border: '2px solid var(--stout)' }}>
              <span className="display" style={{ fontSize: 18, color: 'var(--stout)' }}>BEERO</span>
              <span className="display" style={{ fontSize: 38, color: 'var(--stout)' }}>$108<span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 500, opacity: 0.7 }}>/yr</span></span>
            </div>
            <div className="mono" style={{ marginTop: 18, fontSize: 13, color: 'var(--orange-deep)', textAlign: 'center', letterSpacing: 1 }}>
              ↑ that&rsquo;s 431 more beers. you&rsquo;re welcome.
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 60, right: 80, opacity: 0.12 }}><BottleCap size={120} /></div>
      <div style={{ position: 'absolute', bottom: 40, left: 100, opacity: 0.08 }}><BottleCap size={180} /></div>
    </section>
  )
}

// ─── App Mockup ───────────────────────────────────────────────────────

function Sparkline() {
  const pts = [22, 28, 25, 35, 32, 42, 38, 48, 45, 55, 52, 62, 58, 70, 68, 78, 82, 88]
  const W = 600, H = 160
  const maxV = Math.max(...pts)
  const path = pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * W
    const y = H - (v / maxV) * (H - 16) - 8
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
  const area = `${path} L ${W} ${H} L 0 ${H} Z`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="160" preserveAspectRatio="none">
      <path d={area} fill="var(--orange)" opacity="0.18" />
      <path d={path} fill="none" stroke="var(--orange-deep)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((v, i) => {
        if (i % 3 !== 0) return null
        const x = (i / (pts.length - 1)) * W
        const y = H - (v / maxV) * (H - 16) - 8
        return <circle key={i} cx={x} cy={y} r="3" fill="var(--orange-deep)" />
      })}
    </svg>
  )
}

function AppShow() {
  return (
    <section id="tab" className="app-show section-pad" style={{ padding: '120px 56px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="app-show-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56, gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: 12, color: 'var(--orange-deep)', letterSpacing: 3, marginBottom: 14 }}>◆ THE DASHBOARD</div>
            <h2 className="display" style={{ fontSize: 'clamp(46px, 5vw, 76px)', margin: 0, maxWidth: 800, lineHeight: 0.95 }}>
              Your business,<br />on a coaster.
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--ink)', maxWidth: 380, margin: 0 }}>
            One screen for cash in, cash out, what&rsquo;s overdue, and what you owe Uncle Sam. The rest is wallpaper.
          </p>
        </div>
        <div style={{
          background: 'var(--paper)',
          border: '3px solid var(--stout)',
          borderRadius: 24,
          boxShadow: '12px 12px 0 var(--orange)',
          padding: 0,
          overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', background: 'var(--stout)', borderBottom: '3px solid var(--stout)' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
            <span className="mono" style={{ flex: 1, textAlign: 'center', fontSize: 12, color: 'rgba(251,241,220,0.6)', letterSpacing: 1 }}>
              app.beero.co — Maya&rsquo;s Brewery
            </span>
          </div>
          <div className="app-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 540 }}>
            <aside className="app-sidebar" style={{ background: 'var(--foam)', borderRight: '2px solid var(--line)', padding: '24px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', marginBottom: 18 }}>
                <Logo />
                <span className="display" style={{ fontSize: 18 }}>BEERO</span>
              </div>
              {([
                ['Tonight’s tab', '🍺', true],
                ['Receipts', '🧾', false],
                ['Invoices', '📨', false],
                ['Cashflow', '📈', false],
                ['Taxes', '🏛', false],
                ['Vendors', '🤝', false],
              ] as Array<[string, string, boolean]>).map(([label, ic, active]) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 12px', borderRadius: 8,
                  background: active ? 'var(--orange)' : 'transparent',
                  color: active ? 'var(--stout)' : 'var(--ink)',
                  fontWeight: active ? 700 : 500,
                  fontSize: 14, marginBottom: 2,
                  border: active ? '2px solid var(--stout)' : '2px solid transparent',
                }}>
                  <span>{ic}</span> {label}
                </div>
              ))}
              <div style={{ marginTop: 24, padding: 14, background: 'var(--paper)', borderRadius: 10, border: '2px dashed var(--orange)' }}>
                <div className="mono" style={{ fontSize: 10, color: 'var(--orange-deep)', letterSpacing: 1.5, marginBottom: 6 }}>BEER FUND</div>
                <div className="display" style={{ fontSize: 22 }}>$1,820</div>
                <div style={{ fontSize: 11, color: 'var(--ink)', marginTop: 4 }}>saved this quarter</div>
              </div>
            </aside>
            <div className="app-main" style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
                <h4 className="display" style={{ fontSize: 26, margin: 0 }}>Tonight&rsquo;s tab — May 16</h4>
                <div className="app-actions" style={{ display: 'flex', gap: 8 }}>
                  <button style={{ background: 'var(--paper)', border: '2px solid var(--stout)', borderRadius: 8, padding: '6px 12px', fontWeight: 600, fontSize: 13 }}>📷 Snap</button>
                  <button style={{ background: 'var(--stout)', color: 'var(--paper)', border: '2px solid var(--stout)', borderRadius: 8, padding: '6px 12px', fontWeight: 600, fontSize: 13 }}>+ New invoice</button>
                </div>
              </div>
              <div className="kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 22 }}>
                {([
                  ['Cash in', '$12,840', '+18%', 'var(--orange)'],
                  ['Cash out', '$4,210', '-6%', null],
                  ['Outstanding', '$2,140', '2 invoices', null],
                  ['Tax set aside', '$3,180', 'ready to file', null],
                ] as Array<[string, string, string, string | null]>).map(([l, v, sub, bg]) => (
                  <div key={l} className="kpi-card" style={{
                    background: bg || 'var(--foam)',
                    border: '2px solid var(--stout)',
                    borderRadius: 12, padding: '14px 16px',
                  }}>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: 1.5, color: 'var(--ink)', marginBottom: 6 }}>{l.toUpperCase()}</div>
                    <div className="display" style={{ fontSize: 24, color: 'var(--stout)' }}>{v}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink)', marginTop: 4 }}>{sub}</div>
                  </div>
                ))}
              </div>
              <div className="activity-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
                <div style={{ border: '2px solid var(--stout)', borderRadius: 12, padding: 16, background: 'var(--paper)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: 1.5 }}>CASH FLOW · 30 DAYS</div>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--orange-deep)' }}>↑ trending up</span>
                  </div>
                  <Sparkline />
                </div>
                <div style={{ border: '2px solid var(--stout)', borderRadius: 12, padding: '14px 16px', background: 'var(--paper)' }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: 1.5, marginBottom: 10 }}>RECENT</div>
                  {([
                    ['Hop supplier · invoice', '-$420', 'auto · supplies'],
                    ['Trivia night cash', '+$680', 'auto · sales'],
                    ['Quarterly tax xfer', '-$1,200', 'tax savings'],
                    ['Yelp ad', '-$96', 'marketing'],
                  ] as Array<[string, string, string]>).map(([l, v, t], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '8px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--line)' }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{l}</div>
                        <div className="mono" style={{ fontSize: 10, color: 'var(--ink)' }}>{t}</div>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: v.startsWith('+') ? 'var(--orange-deep)' : 'var(--stout)' }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ──────────────────────────────────────────────────────────

function Reviews() {
  const reviews = [
    { name: 'Maya R.', role: 'Owner, Pourhouse Brewery', body: 'I fired my accountant and bought a kegerator. BEERO does her job in 4 taps a week. The kegerator does the rest.', tilt: -2 },
    { name: 'Devon K.', role: 'Freelance designer', body: 'Sent my first invoice in 90 seconds. Got paid in three days. Spent the money on, you guessed it, beer.', tilt: 1 },
    { name: 'Priya S.', role: 'Co-owner, Curry & Co.', body: 'Quarterly taxes used to ruin a weekend. Now they ruin about 9 minutes of a Tuesday.', tilt: -1 },
  ]
  return (
    <section id="reviews" className="reviews section-pad" style={{ padding: '120px 56px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div className="mono" style={{ fontSize: 12, color: 'var(--orange-deep)', letterSpacing: 3, marginBottom: 14, textAlign: 'center' }}>◆ THE BAR TAB — REAL CUSTOMERS</div>
        <h2 className="display section-h2" style={{ fontSize: 'clamp(40px, 4.5vw, 68px)', margin: '0 0 56px', textAlign: 'center' }}>
          Word travels fast at the <span className="serif-i" style={{ color: 'var(--orange)' }}>bar</span>.
        </h2>
        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {reviews.map((r, i) => (
            <div key={i} className="review-card" style={{
              background: 'var(--paper)',
              border: '3px solid var(--stout)',
              borderRadius: 18,
              padding: 28,
              transform: `rotate(${r.tilt}deg)`,
              boxShadow: '5px 5px 0 var(--orange)',
            }}>
              <div style={{ fontSize: 22, marginBottom: 14, color: 'var(--orange-deep)' }}>★★★★★</div>
              <p className="serif-i" style={{ fontSize: 22, lineHeight: 1.3, color: 'var(--stout)', margin: 0 }}>
                &ldquo;{r.body}&rdquo;
              </p>
              <div style={{ marginTop: 24, paddingTop: 16, borderTop: '2px dashed var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="display" style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--orange)', border: '2px solid var(--stout)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--stout)' }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink)' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section id="pricing" className="pricing section-pad" style={{ padding: '120px 56px', background: 'var(--orange)', borderTop: '4px solid var(--stout)', borderBottom: '4px solid var(--stout)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: 12, color: 'var(--stout)', letterSpacing: 3, marginBottom: 14 }}>◆ THE TAB</div>
        <h2 className="display" style={{ fontSize: 'clamp(56px, 7vw, 112px)', margin: '0 0 18px', color: 'var(--stout)', lineHeight: 0.92 }}>
          $9 a month.<br />
          <span className="serif-i" style={{ color: 'var(--paper)' }}>Forever.</span>
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--stout)', maxWidth: 560, margin: '0 auto 36px' }}>
          One plan. No add-ons, no per-seat, no per-receipt. Cancel any time — though our churn is lower than your bar&rsquo;s.
        </p>
        <div className="pricing-card" style={{
          display: 'inline-block',
          background: 'var(--paper)', border: '3px solid var(--stout)',
          borderRadius: 24, padding: '32px 48px',
          boxShadow: '10px 10px 0 var(--stout)',
          textAlign: 'left', minWidth: 460,
        }}>
          <div className="pricing-card-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div className="display" style={{ fontSize: 28 }}>BEERO All-In</div>
            <Stamp rotate={6}>30-DAY FREE POUR</Stamp>
          </div>
          {[
            'Unlimited receipts, invoices, accounts',
            'Quarterly + annual tax e-filing',
            'Live human support (sober during business hrs)',
            'Beer-money penalty guarantee',
          ].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ color: 'var(--orange-deep)', fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 16 }}>{t}</span>
            </div>
          ))}
          <a href="#" style={{
            display: 'block', textAlign: 'center', width: '100%', marginTop: 28,
            background: 'var(--stout)', color: 'var(--orange)',
            border: '3px solid var(--stout)', borderRadius: 999,
            padding: '18px 28px',
            fontFamily: 'var(--font-archivo-black), sans-serif', fontSize: 18,
            boxSizing: 'border-box',
          }}>
            🍺 Start drinking again →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number>(0)
  const items: Array<[string, string]> = [
    ['Do I really not need an accountant?', 'For 95% of small businesses doing under $2M in revenue, no. BEERO handles your books, your taxes, and your filings. If your situation is more complex (multi-state, international, M&A), we’ll tell you and refer you to someone who isn’t threatened by software.'],
    ['What if the IRS comes knocking?', 'They won’t — we file on time, every time. But if they do, our beer-money guarantee covers any penalty that was our fault, plus a six-pack for your trouble.'],
    ['Is my data safe?', 'Bank-grade encryption. SOC 2 Type II. Your books live on our servers; your beer lives in your fridge. Both are well-protected.'],
    ['Can I import from QuickBooks / Xero?', 'Yes, in three clicks. Most users finish migration before their first pint.'],
    ['Is BEERO actually for breweries?', 'It works great for breweries — but also for restaurants, cafés, freelancers, dog walkers, etheral-energy-healers, and anyone else who would rather not think about debits and credits.'],
  ]
  return (
    <section className="faq section-pad" style={{ padding: '120px 56px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div className="mono" style={{ fontSize: 12, color: 'var(--orange-deep)', letterSpacing: 3, marginBottom: 14 }}>◆ FAQ</div>
            <h2 className="display" style={{ fontSize: 56, margin: 0, lineHeight: 0.95 }}>
              Last call for <span className="serif-i" style={{ color: 'var(--orange)' }}>questions</span>.
            </h2>
            <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.5, color: 'var(--ink)' }}>
              Still curious? Slack us anytime. We answer in minutes, not hours.
            </p>
          </div>
          <div>
            {items.map(([q, a], i) => (
              <div key={i} style={{
                borderTop: '2px solid var(--stout)',
                borderBottom: i === items.length - 1 ? '2px solid var(--stout)' : 'none',
                padding: '20px 0',
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: '100%', background: 'transparent', border: 0, padding: 0,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  textAlign: 'left', color: 'var(--stout)',
                }}>
                  <span className="display faq-q" style={{ fontSize: 22 }}>{q}</span>
                  <span style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: open === i ? 'var(--orange)' : 'transparent',
                    border: '2px solid var(--stout)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginLeft: 14,
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform .2s, background .2s',
                  }}>+</span>
                </button>
                {open === i && (
                  <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink)', margin: '14px 0 0', maxWidth: 640 }}>{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA + Footer ───────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="final-cta section-pad" style={{ background: 'var(--stout)', color: 'var(--paper)', padding: '140px 56px 80px', textAlign: 'center', position: 'relative' }}>
      <Stamp rotate={-6}>★ ONE LAST POUR</Stamp>
      <h2 className="display" style={{ fontSize: 'clamp(60px, 8vw, 132px)', margin: '32px 0', lineHeight: 0.9 }}>
        Cheers to<br />
        <span style={{ color: 'var(--orange)' }}>fewer spreadsheets</span><span className="serif-i" style={{ fontWeight: 400, color: 'var(--orange)' }}>.</span>
      </h2>
      <a href="#" style={{
        display: 'inline-block',
        background: 'var(--orange)', color: 'var(--stout)',
        border: '3px solid var(--orange)',
        padding: '22px 40px', borderRadius: 999,
        fontFamily: 'var(--font-archivo-black), sans-serif', fontSize: 22,
        boxShadow: '8px 8px 0 var(--paper)',
      }}>
        🍺 &nbsp;Open a tab — 30 days free
      </a>
      <div className="mono" style={{ marginTop: 18, fontSize: 12, color: 'rgba(251,241,220,0.6)', letterSpacing: 1 }}>
        no card · no calls · no Brenda
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" style={{ background: 'var(--stout)', color: 'rgba(251,241,220,0.7)', padding: '40px 56px 56px', borderTop: '1px solid rgba(251,241,220,0.1)' }}>
      <div className="footer-grid" style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, fontSize: 14 }}>
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <Logo />
            <span className="display" style={{ fontSize: 24, color: 'var(--paper)' }}>BEERO</span>
          </div>
          <p style={{ margin: 0, maxWidth: 320, lineHeight: 1.5 }}>Accounting for humans who would rather be at the bar.</p>
        </div>
        {([
          ['Product', ['Features', 'Pricing', 'Changelog', 'Integrations']],
          ['Company', ['About', 'Story', 'Careers', 'Press']],
          ['Resources', ['Help', 'Blog', 'Beer math', 'Status']],
          ['Legal', ['Terms', 'Privacy', 'Security', 'DPA']],
        ] as Array<[string, string[]]>).map(([h, list]) => (
          <div key={h}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--orange)', marginBottom: 12 }}>{h.toUpperCase()}</div>
            {list.map(it => <div key={it} style={{ marginBottom: 7 }}>{it}</div>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom" style={{ maxWidth: 1400, margin: '40px auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, paddingTop: 24, borderTop: '1px solid rgba(251,241,220,0.1)', fontSize: 12 }}>
        <div>© 2026 BEERO Inc. · Drink responsibly. Account effortlessly.</div>
        <div className="mono" style={{ letterSpacing: 2 }}>MADE WITH 🍺 IN BRISBANE, AUSTRALIA</div>
      </div>
    </footer>
  )
}
