"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

  useEffect(() => {
    const bird = document.querySelector(".bird-element")
    if (bird) {
      gsap.to(bird, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        rotation: 15,
        scale: 0.8,
        ease: "power2.inOut",
      })
    }
  }, [])

  return (
    <ScrollReveal>
      <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50/50 via-background to-sage-50/50 dark:from-charcoal dark:via-background dark:to-olive-dark/20"
    >
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-sage/10 to-pink-200/10 blur-3xl"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Bird SVG */}
      <motion.div
        className="bird-element absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 md:top-1/4"
        animate={{
          y: [-15, 15, -15],
          rotateY: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          fill="none"
          className="drop-shadow-2xl md:h-40 md:w-40 lg:h-48 lg:w-48"
        >
          <defs>
            <linearGradient id="birdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-sage/40 dark:text-sage/30" stopColor="currentColor" />
              <stop offset="100%" className="text-pink-200/40 dark:text-pink-300/20" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M100 50C100 50 70 65 55 90C40 115 50 145 65 138C80 131 88 115 100 100C112 115 120 131 135 138C150 145 160 115 145 90C130 65 100 50 100 50Z"
            fill="url(#birdGradient)"
          />
          <path
            d="M100 50C100 50 70 65 55 90C40 115 50 145 65 138C80 131 88 115 100 100C112 115 120 131 135 138C150 145 160 115 145 90C130 65 100 50 100 50Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-sage/60 dark:text-sage-light/40"
            fill="none"
          />
          <circle cx="80" cy="85" r="4" fill="currentColor" className="text-foreground/70" />
          <circle cx="120" cy="85" r="4" fill="currentColor" className="text-foreground/70" />
        </svg>
      </motion.div>

      {/* Main Content - removed all initial opacity: 0 animations */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-16 text-center sm:px-6 md:pt-16 md:pb-24"
      >
        <div className="mb-6">
          <span className="inline-block rounded-full bg-sage/15 px-4 py-2 text-xs font-light tracking-widest text-sage dark:bg-sage/20 dark:text-sage-light md:px-6 md:py-2.5 md:text-sm">
            YOGI'S YOGA BY SNEHA
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl">
          Where Ancient
          <br />
          <span className="bg-gradient-to-r from-sage via-pink-300 to-sage bg-clip-text text-transparent dark:from-sage-light dark:via-warm-white dark:to-sage">
            Wisdom Meets
          </span>
          <br />
          Modern Living
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg md:mb-12 md:text-xl">
          Transform your life with holistic yoga practices. Led by Sneha, discover your sanctuary for health, mental
          clarity, and spiritual growth.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#offerings"
            className="group relative overflow-hidden rounded-full bg-foreground px-8 py-3.5 text-sm font-light tracking-wide text-background transition-all hover:scale-105 hover:shadow-lg md:px-10 md:py-4 md:text-base"
          >
            <span className="relative z-10">Explore Offerings</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sage to-pink-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-foreground/20 px-8 py-3.5 text-sm font-light tracking-wide text-foreground backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-foreground/5 md:px-10 md:py-4 md:text-base"
          >
            Contact Sneha
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-light tracking-widest text-muted-foreground">SCROLL</span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </div>
      </section>
    </ScrollReveal>
  )
}
