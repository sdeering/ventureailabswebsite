import Link from "next/link"

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ventureailabs",
    color: "#5B8DEF",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05A4.2 4.2 0 0 1 16.6 8.7c3.2 0 4.4 2 4.4 5.2V21h-4v-6.3c0-1.5-.3-2.8-1.9-2.8s-2.1 1.2-2.1 2.7V21H9V9z",
  },
  {
    name: "X",
    href: "https://x.com/ventureailabs",
    color: "#A855F7",
    path: "M17.2 3h3.3l-7.2 8.2L21.5 21h-6.1l-4.4-5.6L5.7 21H2.4l7.5-8.6L2.8 3h6.2l4.1 5.3L17.2 3zm-1.1 16h1.8L7.9 4.8H6L16.1 19z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ventureailabs",
    color: "#FF5FA2",
    path: "M12 2.2c-2.7 0-3 0-4.1.06-1 .05-1.8.22-2.4.47a4.8 4.8 0 0 0-1.8 1.16A4.8 4.8 0 0 0 2.5 5.7c-.25.6-.42 1.4-.47 2.4C1.97 9.2 2 9.5 2 12s0 2.8.06 3.9c.05 1 .22 1.8.47 2.4a4.8 4.8 0 0 0 1.16 1.8 4.8 4.8 0 0 0 1.8 1.16c.6.25 1.4.42 2.4.47 1.1.06 1.4.06 4.1.06s3 0 4.1-.06c1-.05 1.8-.22 2.4-.47a5 5 0 0 0 2.96-2.96c.25-.6.42-1.4.47-2.4.06-1.1.06-1.4.06-3.9s0-2.8-.06-3.9c-.05-1-.22-1.8-.47-2.4a4.8 4.8 0 0 0-1.16-1.8 4.8 4.8 0 0 0-1.8-1.16c-.6-.25-1.4-.42-2.4-.47C15 2.2 14.7 2.2 12 2.2zm0 1.8c2.7 0 2.9 0 4 .06.8.04 1.2.17 1.5.29.4.15.6.33.9.63.3.3.48.5.63.9.12.3.25.7.29 1.5.05 1.1.06 1.3.06 4s0 2.9-.06 4c-.04.8-.17 1.2-.29 1.5-.15.4-.33.6-.63.9-.3.3-.5.48-.9.63-.3.12-.7.25-1.5.29-1.1.05-1.3.06-4 .06s-2.9 0-4-.06c-.8-.04-1.2-.17-1.5-.29-.4-.15-.6-.33-.9-.63-.3-.3-.48-.5-.63-.9-.12-.3-.25-.7-.29-1.5-.05-1.1-.06-1.3-.06-4s0-2.9.06-4c.04-.8.17-1.2.29-1.5.15-.4.33-.6.63-.9.3-.3.5-.48.9-.63.3-.12.7-.25 1.5-.29 1.1-.05 1.3-.06 4-.06zm0 3.06a4.94 4.94 0 1 0 0 9.88 4.94 4.94 0 0 0 0-9.88zm0 8.14a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.29-8.34a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ventureailabs",
    color: "#F5C242",
    path: "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.4V8.6l6 3.4-6 3.4z",
  },
]

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.07)", background: "#0C0A30" }}>
      <div style={{ height: 3, background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242)" }} />
      <div style={{ maxWidth: 1420, margin: "0 auto", padding: "54px clamp(20px,4vw,32px) 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 36 }}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/brand/vail-wordmark-light.png" alt="Venture AI Labs" style={{ height: 40, width: "auto", display: "block" }} />
          <p style={{ margin: "18px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#98A0B3", maxWidth: "38ch", textWrap: "pretty" }}>
            Incubating the future of AI startups in Brisbane, Australia. Transforming innovative ideas into
            market-ready solutions.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            {SOCIALS.map((so) => (
              <a
                key={so.name}
                href={so.href}
                target="_blank"
                rel="noopener"
                title={so.name}
                aria-label={so.name}
                className="vail-social-link"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C6CCD9",
                  background: "rgba(255,255,255,.03)",
                }}
              >
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
                  <path d={so.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5 }}>
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#97A0B5" }}>Site</span>
          <Link href="/#about" style={{ color: "#9AA2B1" }}>About</Link>
          <Link href="/#projects" style={{ color: "#9AA2B1" }}>Projects</Link>
          <Link href="/apply" style={{ color: "#9AA2B1" }}>Enquire</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5 }}>
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#97A0B5" }}>Contact</span>
          <a href="mailto:hello@ventureailabs.com" style={{ color: "#9AA2B1" }}>hello@ventureailabs.com</a>
          <span style={{ color: "#98A0B3" }}>Brisbane, QLD, Australia</span>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1420,
          margin: "0 auto",
          padding: "22px clamp(20px,4vw,32px) 40px",
          borderTop: "1px solid rgba(255,255,255,.07)",
          fontSize: 13,
          lineHeight: 1.6,
          color: "#8A93A8",
          textWrap: "pretty",
        }}
      >
        © 2026 Venture AI Labs. A division of Inception Web Pty Ltd (ABN 68 606 736 252). All rights reserved.
      </div>
    </footer>
  )
}
