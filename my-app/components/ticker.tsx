const ITEMS = [
  "Agentic workflows",
  "Large language models",
  "RAG pipelines",
  "Computer vision",
  "Multimodal models",
  "Fine-tuning",
  "Vector search",
  "MLOps",
  "Edge inference",
  "Synthetic data",
  "Reinforcement learning",
  "AI copilots",
]

export function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <section style={{ borderBottom: "1px solid rgba(255,255,255,.07)", overflow: "hidden", padding: "22px 0", background: "#0C0A30" }}>
      <div
        style={{
          display: "flex",
          gap: 56,
          width: "max-content",
          animation: "vail-marquee 34s linear infinite",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 12.5,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "#97A0B5",
        }}
      >
        {row.map((t, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 56 }}>
            {t}
            <span style={{ color: "#45E0E8" }}>◆</span>
          </span>
        ))}
      </div>
    </section>
  )
}
