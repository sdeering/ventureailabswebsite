import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ApplyForm } from "@/components/apply-form"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Enquire - Venture AI Labs",
  description: "Tell us what you're building. Founders, investors and industry partners — one form, and we'll come back to you within a week.",
}

export default function ApplyPage() {
  return (
    <div className="vail" style={{ minHeight: "100vh", overflowX: "hidden", display: "flex", flexDirection: "column" }}>
      <Header />
      <ApplyForm />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
