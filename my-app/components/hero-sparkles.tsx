const COLORS = ["#45E0E8", "#5B8DEF", "#A855F7", "#FF5FA2", "#F5C242", "#6FE3F0", "#fff"]

// Seeded LCG so server and client render identical positions (avoids hydration mismatch).
function makeSparkles(count = 50) {
  let seed = 7
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  return Array.from({ length: count }, (_, i) => {
    const size = 2 + rnd() * 5
    const color = COLORS[i % COLORS.length]
    return {
      key: i,
      left: rnd() * 100,
      top: 8 + rnd() * 92,
      size,
      color,
      duration: 5 + rnd() * 9,
      delay: -rnd() * 14,
      hueDuration: 4 + rnd() * 5,
      hueDelay: -rnd() * 8,
    }
  })
}

const sparkles = makeSparkles()

export function HeroSparkles() {
  return (
    <>
      {sparkles.map((s) => (
        <span
          key={s.key}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: s.color,
            boxShadow: `0 0 ${s.size * 3.5}px ${s.color}`,
            opacity: 0,
            animation: `vail-spark ${s.duration}s linear ${s.delay}s infinite, vail-hue ${s.hueDuration}s linear ${s.hueDelay}s infinite`,
          }}
        />
      ))}
    </>
  )
}
