import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="vail" style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
