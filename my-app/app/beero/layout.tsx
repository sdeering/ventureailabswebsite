import type { Metadata } from "next"
import { Archivo_Black, Instrument_Serif, JetBrains_Mono } from "next/font/google"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-archivo-black" })
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Beero — AI-Powered Accounting",
  description: "Spend your money on beer, not accounting. Fully automated AI-powered bookkeeping.",
}

export default function BeeroLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${archivoBlack.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  )
}
