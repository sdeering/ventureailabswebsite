"use client"

import { useState } from "react"
import Link from "next/link"

const STEPS = [
  { n: "1", text: "Send the form — no deck required." },
  { n: "2", text: "A 30-minute call with the team to dig into the problem." },
  { n: "3", text: "If it's a fit, we scope the first eight weeks together." },
]

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@company.com" },
  { name: "company", label: "Company / project", type: "text", required: false, placeholder: "Optional" },
]

export function ApplyForm() {
  const [sent, setSent] = useState(false)
  const [sentName, setSentName] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const fullName = (data.get("name") || "").toString().trim()
    const email = (data.get("email") || "").toString().trim()
    const company = (data.get("company") || "").toString().trim()
    const kind = (data.get("kind") || "").toString().trim()
    const about = (data.get("about") || "").toString().trim()

    const subject = `Enquiry from ${fullName || "the Venture AI Labs site"}`
    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      company && `Company / project: ${company}`,
      kind && `Who they are: ${kind}`,
      about && `What they're building:\n${about}`,
    ]
      .filter(Boolean)
      .join("\n\n")

    window.location.href = `mailto:hello@ventureailabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSent(true)
    setSentName(fullName.split(" ")[0])
  }

  return (
    <main
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        marginTop: -88,
        paddingTop: 88,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-30% -10% auto",
          height: "70%",
          pointerEvents: "none",
          background: "radial-gradient(45% 55% at 30% 20%, rgba(124,58,237,.4), transparent 70%)",
          filter: "blur(40px)",
          animation: "vail-drift 24s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1060,
          margin: "0 auto",
          padding: "clamp(48px,8vw,84px) clamp(20px,4vw,28px) 110px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: 56,
          alignItems: "start",
        }}
      >
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
                background: "linear-gradient(135deg,#5B8DEF,#45E0E8)",
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
              Enquiry
            </div>
          </div>
          <h1
            style={{
              margin: "18px 0 0",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(34px,4.6vw,54px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            Tell us what you&rsquo;re building.
          </h1>
          <p style={{ margin: "22px 0 0", fontSize: 17, lineHeight: 1.65, color: "#A5ADBC", textWrap: "pretty" }}>
            A few lines is plenty. We read everything and reply within a week.
          </p>
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 18 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    border: "1px solid rgba(111,227,240,.4)",
                    color: "#6FE3F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 11.5,
                  }}
                >
                  {s.n}
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "#9BA3B6" }}>{s.text}</span>
              </div>
            ))}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/brand/mascot-laptop.png"
            alt=""
            style={{ width: "100%", maxWidth: 300, height: "auto", display: "block", marginTop: 34, filter: "drop-shadow(0 30px 50px rgba(0,0,0,.5))", animation: "vail-float 8s ease-in-out infinite" }}
          />
          <Link href="/" style={{ display: "inline-block", marginTop: 28, fontSize: 15, color: "#9AA2B1" }}>
            ← Back to home
          </Link>
        </div>

        <div
          style={{
            padding: "clamp(22px,4vw,34px) clamp(18px,4vw,32px) clamp(24px,4vw,36px)",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 22,
            background: "rgba(11,13,17,.85)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 40px 90px -50px rgba(0,0,0,.9)",
          }}
        >
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "22px 0" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(140deg,#45E0E8,#A855F7,#FF5FA2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0D0618",
                  fontSize: 20,
                }}
              >
                ✓
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/brand/mascot-arms.png" alt="" style={{ width: 140, height: "auto", display: "block" }} />
              <h2 style={{ margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 23, color: "#fff" }}>Enquiry received</h2>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#9BA3B6" }}>
                Thanks {sentName} — we&rsquo;ll be in touch at the email you gave us.
              </p>
              <button
                onClick={() => {
                  setSent(false)
                  setSentName("")
                }}
                className="vail-send-another"
                style={{
                  marginTop: 10,
                  alignSelf: "flex-start",
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "none",
                  color: "#ECEEF2",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14.5,
                  cursor: "pointer",
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {FIELDS.map((f) => (
                <label key={f.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#9BA3B6" }}>
                    {f.label}
                  </span>
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    className="vail-field"
                    style={{
                      padding: "13px 15px",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,.13)",
                      background: "rgba(255,255,255,.03)",
                      color: "#fff",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 15.5,
                      outline: "none",
                    }}
                  />
                </label>
              ))}
              <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#9BA3B6" }}>
                  Who you are
                </span>
                <select
                  name="kind"
                  className="vail-field"
                  style={{
                    padding: "13px 15px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,.13)",
                    background: "rgba(255,255,255,.03)",
                    color: "#fff",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 15.5,
                    outline: "none",
                  }}
                >
                  <option value="founder" style={{ color: "#111" }}>Founder</option>
                  <option value="investor" style={{ color: "#111" }}>Investor / partner</option>
                  <option value="corporate" style={{ color: "#111" }}>Corporate AI project</option>
                  <option value="talent" style={{ color: "#111" }}>Talent / community</option>
                </select>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#9BA3B6" }}>
                  What you&rsquo;re building
                </span>
                <textarea
                  name="about"
                  rows={4}
                  placeholder="One or two lines on the problem and where you're up to."
                  className="vail-field"
                  style={{
                    padding: "13px 15px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,.13)",
                    background: "rgba(255,255,255,.03)",
                    color: "#fff",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </label>
              <button
                type="submit"
                className="vail-submit-btn"
                style={{
                  marginTop: 6,
                  padding: 2,
                  borderRadius: 999,
                  border: "none",
                  background: "linear-gradient(90deg,#45E0E8,#5B8DEF,#A855F7,#FF5FA2,#F5C242,#45E0E8)",
                  backgroundSize: "300% 100%",
                  animation: "vail-sweep 4s linear infinite",
                  color: "#fff",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  cursor: "pointer",
                  boxShadow: "0 14px 34px -16px rgba(91,141,239,.95)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 9,
                    padding: "13px 24px",
                    borderRadius: 999,
                    background: "rgba(10,8,40,.94)",
                    fontWeight: 600,
                    fontSize: 15.5,
                  }}
                >
                  Send enquiry<span style={{ fontSize: 17, lineHeight: 1 }}>→</span>
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
