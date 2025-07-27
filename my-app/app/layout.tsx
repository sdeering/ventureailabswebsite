import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ALPHA AI LABS - Transform Your Business with AI Innovation",
  description:
    "Leading AI innovation in Australia. We help businesses transform through intelligent automation, startup solutions, and cutting-edge AI technologies.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style>{`
html {
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  --font-sans: var(--font-inter);
}
        `}</style>
      </head>
      <body className="min-h-screen bg-[#0d1117] font-sans antialiased dark:bg-[#0d1117]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
