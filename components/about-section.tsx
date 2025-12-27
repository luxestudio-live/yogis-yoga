"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9 },
        {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            end: "top 40%",
            scrub: 1,
          },
          scale: 1,
          ease: "power2.out",
        },
      )
    }
  }, [])
  return (
    <ScrollReveal>
      <section id="about" ref={sectionRef} className="relative min-h-screen w-full px-6 py-32 md:px-12">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-pink-100/30 to-sage/20 blur-3xl dark:from-pink-900/10 dark:to-sage/10" />
      <div className="absolute right-1/4 top-2/3 h-80 w-80 rounded-full bg-gradient-to-br from-sage/20 to-pink-100/30 blur-3xl dark:from-sage/10 dark:to-pink-900/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div style={{ y: imageY }} ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src="/peaceful-woman-in-white-doing-yoga-meditation-pose.jpg"
                alt="Sneha practicing yoga"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sage/30 to-pink-200/30 blur-2xl dark:from-sage/20 dark:to-pink-900/20"
            />
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-gradient-to-br from-pink-200/30 to-sage/30 blur-2xl dark:from-pink-900/20 dark:to-sage/20"
            />
          </motion.div>

          <motion.div style={{ y: textY }} className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-sage/10 px-4 py-1.5 text-xs font-light tracking-widest text-sage dark:bg-sage/20 dark:text-warm-white">
                MEET SNEHA
              </span>
            </div>

            <h2 className="mb-8 text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Your Dedicated
              <br />
              <span className="bg-gradient-to-r from-sage via-pink-300 to-sage bg-clip-text text-transparent dark:from-sage-light dark:via-warm-white dark:to-olive-dark">
                Wellness Guide
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
                Sneha Gosai is a certified Yoga & Wellness Educator passionate about helping you transform your life
                through ancient yogic wisdom adapted for modern living. With a thriving YouTube community of thousands,
                she brings authentic, science-backed teachings to every session.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
                Every class is designed with care to help you reconnect with your breath, your body, and your purpose.
                Whether you're seeking weight loss, stress relief, or spiritual growth, you'll find a supportive space
                to grow and evolve.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
                Join a thriving global community committed to wellness, awareness, and personal evolution. Be part of
                millions who have discovered the transformative power of Yogi's Yoga.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sage transition-colors hover:text-sage/80 dark:text-warm-white dark:hover:text-warm-white/80"
              >
                <span className="text-lg font-light">Start your transformation</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </ScrollReveal>
  )
}
