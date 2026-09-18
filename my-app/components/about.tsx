import { Reveal } from "@/components/reveal"

function SectionBadge({ image, label, gradient }: { image: string; label: string; gradient: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <span
        aria-hidden="true"
        style={{
          flex: "none",
          width: 46,
          height: 46,
          borderRadius: "50%",
          padding: 2,
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px -12px rgba(0,0,0,.9)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 6%", background: "#0D0B33", display: "block" }}
        />
      </span>
      <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11.5, letterSpacing: ".18em", textTransform: "uppercase", color: "#6FE3F0" }}>
        {label}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 1420, margin: "0 auto", padding: "clamp(64px,10vw,110px) clamp(20px,4vw,32px)" }}>
        <Reveal style={{ maxWidth: 760 }}>
          <SectionBadge image="/img/brand/mascot-laptop.png" label="02 — About" gradient="linear-gradient(135deg,#A855F7,#FF5FA2)" />
          <h2
            style={{
              margin: "18px 0 0",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px,3.6vw,46px)",
              lineHeight: 1.08,
              letterSpacing: "-.025em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            About Venture AI Labs
          </h2>
          <p style={{ margin: "24px 0 0", fontSize: "clamp(17px,1.6vw,20px)", lineHeight: 1.65, color: "#C3C9D6", textWrap: "pretty" }}>
            We are Brisbane&rsquo;s premier AI startup incubator, dedicated to nurturing the next generation of
            artificial intelligence companies that will shape our future.
          </p>
        </Reveal>

        <Reveal
          style={{
            position: "relative",
            overflow: "hidden",
            marginTop: 52,
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 26,
            padding: "clamp(30px,4.6vw,58px)",
            background: "linear-gradient(140deg,rgba(69,224,232,.09),rgba(168,85,247,.08),rgba(255,95,162,.05),transparent 75%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-40%",
              right: "-12%",
              width: "52%",
              aspectRatio: "1/1",
              pointerEvents: "none",
              background: "radial-gradient(circle at center, rgba(111,227,240,.16), transparent 68%)",
              filter: "blur(24px)",
              animation: "vail-drift 26s ease-in-out infinite",
            }}
          />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 40, alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", minWidth: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/brand/mascot-arms.png"
                alt=""
                style={{ width: "min(100%,60vw)", maxWidth: 340, height: "auto", display: "block", filter: "drop-shadow(0 30px 50px rgba(0,0,0,.5))", animation: "vail-float 9s ease-in-out infinite" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    padding: 2,
                    background: "linear-gradient(135deg,#45E0E8,#A855F7,#F5C242)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px -12px rgba(0,0,0,.9)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/brand/mascot-tablet.png"
                    alt=""
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 6%", background: "#0D0B33", display: "block" }}
                  />
                </span>
                <span style={{ width: 54, height: 3, borderRadius: 2, background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11.5, letterSpacing: ".2em", textTransform: "uppercase", color: "#6FE3F0" }}>
                  Our Mission
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  maxWidth: "22ch",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(26px,3.2vw,40px)",
                  lineHeight: 1.14,
                  letterSpacing: "-.025em",
                  color: "#fff",
                  textWrap: "balance",
                }}
              >
                AI that solves humanity&rsquo;s greatest challenges.
              </p>
              <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: "#AEB6C6", textWrap: "pretty" }}>
                At Venture AI Labs, we believe artificial intelligence has the power to solve humanity&rsquo;s greatest
                challenges. Our mission is to identify, nurture, and accelerate innovative AI startups that are
                building solutions for a better tomorrow.
              </p>
              <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: "#AEB6C6", textWrap: "pretty" }}>
                Located in the heart of Brisbane&rsquo;s thriving tech ecosystem, we provide entrepreneurs with the
                resources, mentorship, and network they need to transform their AI innovations into successful,
                scalable businesses.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
