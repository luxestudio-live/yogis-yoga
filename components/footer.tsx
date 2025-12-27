"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: false, amount: 0.5 })

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/Yogisyoga_india", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/yogisyoga", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com/share/1CqDP8x4TG", label: "Facebook" },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative w-full border-t border-border/50 bg-card/30 px-6 py-16 backdrop-blur-sm md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-light text-foreground">Sneha</h3>
            <p className="text-sm text-muted-foreground">Yoga & Wellness Educator</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="rounded-full bg-sage/10 p-3 transition-colors hover:bg-sage/20 dark:bg-warm-white/10 dark:hover:bg-warm-white/20"
              >
                <link.icon className="h-6 w-6 text-sage dark:text-warm-white" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            © 2025 Sneha. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xs text-muted-foreground mt-2"
          >
            <span className="italic">Dreamed, designed, and brought to life by </span>
            <a
              href="https://www.luxestudio.live"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sage underline underline-offset-4 hover:text-pink-300 transition-colors"
            >
              LuxeStudio
            </a>
            <span className="italic"> — where ideas find their elegance.</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
