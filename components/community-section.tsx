"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Users, Eye, Video } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const stats = [
  { value: 4580, label: "YouTube Subscribers", suffix: "+", icon: Users },
  { value: 780593, label: "Video Views", suffix: "+", icon: Eye },
  { value: 673, label: "Videos Created", suffix: "+", icon: Video },
]

export function CommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [counts, setCounts] = useState(stats.map(() => 0))
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000
        const increment = stat.value / (duration / 16)
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(current)
            return newCounts
          })
        }, 16)
        return () => clearInterval(timer)
      })
    }
  }, [isInView])
  return (
    <ScrollReveal>
      <section id="community" ref={sectionRef} className="relative min-h-screen w-full px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="mb-6 inline-block rounded-full bg-sage/10 px-4 py-1.5 text-xs font-light tracking-widest text-sage dark:bg-sage/20 dark:text-warm-white">
            OUR COMMUNITY
          </span>
          <h2 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Join Our Global Family
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Be part of a thriving community committed to wellness, awareness, and personal evolution
          </p>
        </div>

        <div className="group relative mb-20 overflow-hidden rounded-3xl">
          <div className="relative aspect-video w-full">
            <img
              src="/group-yoga-class-students-practicing-together-peac.jpg"
              alt="Yogi's Yoga community class"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-br from-sage/30 via-transparent to-pink-300/30 dark:from-sage/20 dark:to-pink-900/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.a
                href="https://www.youtube.com/@YogisYoga"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 animate-ping rounded-full bg-sage/30 dark:bg-warm-white/30" />
                <div className="relative rounded-full bg-sage/95 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-sage dark:bg-warm-white/95 dark:hover:bg-warm-white">
                  <Play className="h-12 w-12 fill-warm-white text-warm-white dark:fill-charcoal dark:text-charcoal" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-sage/50 hover:shadow-2xl dark:hover:border-warm-white/30"
            >
              <div className="absolute inset-0 bg-linear-to-br from-sage/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-warm-white/5" />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-full bg-sage/10 p-4 dark:bg-warm-white/10">
                  <stat.icon className="h-8 w-8 text-sage dark:text-warm-white" />
                </div>
                <div className="mb-2 text-6xl font-light text-sage dark:text-warm-white md:text-7xl">
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-lg text-muted-foreground md:text-xl">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">Connect with us on social media</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/@YogisYoga"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border/50 bg-card/30 px-6 py-3 backdrop-blur-sm transition-all hover:border-sage/50 hover:shadow-lg"
            >
              <svg className="h-5 w-5 text-sage" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="text-sm font-light">YouTube</span>
            </a>
            <a
              href="https://instagram.com/Yogisyoga_india"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border/50 bg-card/30 px-6 py-3 backdrop-blur-sm transition-all hover:border-pink-300/50 hover:shadow-lg"
            >
              <svg className="h-5 w-5 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm font-light">Instagram</span>
            </a>
            <a
              href="https://facebook.com/share/1CqDP8x4TG"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border/50 bg-card/30 px-6 py-3 backdrop-blur-sm transition-all hover:border-blue-400/50 hover:shadow-lg"
            >
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-light">Facebook</span>
            </a>
          </div>
        </div>
      </div>
      </section>
    </ScrollReveal>
  )
}
