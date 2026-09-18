import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function Contact() {
  return (
    <section id="contact">
      <div style={{ maxWidth: 1420, margin: "0 auto", padding: "clamp(64px,10vw,110px) clamp(20px,4vw,32px)" }}>
        <Reveal
          style={{
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 26,
            padding: "clamp(40px,6vw,76px)",
            background: "linear-gradient(140deg,rgba(124,58,237,.22),rgba(111,227,240,.08),rgba(9,10,13,.6))",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(80% 80% at 80% 20%, #000, transparent)",
              WebkitMaskImage: "radial-gradient(80% 80% at 80% 20%, #000, transparent)",
            }}
          />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 40, alignItems: "center" }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    padding: 2,
                    background: "linear-gradient(135deg,#F5C242,#FF5FA2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px -12px rgba(0,0,0,.9)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/brand/mascot-rocket.png"
                    alt=""
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 6%", background: "#0D0B33", display: "block" }}
                  />
                </span>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11.5, letterSpacing: ".18em", textTransform: "uppercase", color: "#6FE3F0" }}>
                  03 — Get in touch
                </div>
              </div>
              <h2
                style={{
                  margin: "18px 0 0",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(30px,4vw,50px)",
                  lineHeight: 1.06,
                  letterSpacing: "-.025em",
                  color: "#fff",
                  textWrap: "balance",
                }}
              >
                Building something with AI? Tell us about it.
              </h2>
              <p style={{ margin: "20px 0 0", fontSize: 17, lineHeight: 1.65, color: "#C3C9D4", textWrap: "pretty" }}>
                Founders, investors and industry partners — one form, and we&rsquo;ll come back to you within a week.
              </p>
              <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", gap: 14 }}>
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
                    }}
                  >
                    Make an enquiry<span style={{ fontSize: 17, lineHeight: 1 }}>→</span>
                  </span>
                </Link>
                <a
                  href="mailto:hello@ventureailabs.com"
                  className="vail-outline-btn"
                  style={{ padding: "15px 30px", borderRadius: 999, color: "#fff", fontWeight: 500, fontSize: 15.5 }}
                >
                  hello@ventureailabs.com
                </a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", minWidth: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/brand/mascot-tablet.png"
                alt=""
                style={{ width: "min(100%,60vw)", maxWidth: 340, height: "auto", display: "block", filter: "drop-shadow(0 30px 50px rgba(0,0,0,.5))", animation: "vail-float 9s ease-in-out infinite" }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
