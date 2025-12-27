"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import OfferingsSection from "@/components/offerings-section"
import { CommunitySection } from "@/components/community-section"
import { EnquirySection } from "@/components/enquiry-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const lenis = async () => {
      const Lenis = (await import("lenis")).default
      const lenisInstance = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      })

      function raf(time: number) {
        lenisInstance.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    lenis()
  }, [])

  return (
    <main className="relative overflow-hidden bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <CommunitySection />
      <EnquirySection />
      <Footer />
    </main>
  )
}
