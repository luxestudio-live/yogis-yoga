"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"

const offerings = [
  {
    title: "Weight Loss & Detox Programs",
    description: "Science-backed yoga flows combined with customized diet plans for sustainable weight management and body detoxification.",
    gradient: "from-sage/10 to-pink-100/10",
    benefits: [
      "Customized Diet Plan",
      "Yoga Mudra Therapy",
      "Sustainable Results",
    ],
  },
  {
    title: "Stress Relief & Overthinking Control",
    description: "Specialized techniques to manage stress, calm your mind, and break free from overthinking patterns through mindfulness and meditation.",
    gradient: "from-pink-100/10 to-sage/10",
    benefits: [
      "Mental Clarity",
      "Emotional Balance",
      "Anxiety Management",
    ],
  },
  {
    title: "Pranayama & Breathwork",
    description: "Master the art of breath control to increase energy, enhance mental focus, and achieve inner balance through ancient breathing techniques.",
    gradient: "from-sage/10 to-pink-100/10",
    benefits: [
      "Energy Boost",
      "Better Focus",
      "Respiratory Health",
    ],
  },
  {
    title: "Live Classes & Workshops",
    description: "Join interactive live sessions, guided challenges, and workshops. Morning and evening time slots available to fit your schedule.",
    gradient: "from-pink-100/10 to-sage/10",
    benefits: [
      "Flexible Timings",
      "Interactive Sessions",
      "Guided Challenges",
    ],
  },
]

export default function OfferingsSection() {
  const sectionRef = useRef(null)
  const { scrollY } = useScroll({ target: sectionRef })
  const headerY = useTransform(scrollY, [0, 200], [0, -40])
  return (
    <ScrollReveal>
      <section id="offerings" ref={sectionRef} className="relative min-h-screen w-full px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div style={{ y: headerY }} className="mb-20 text-center">
            <span className="mb-6 inline-block rounded-full bg-sage/10 px-4 py-1.5 text-xs font-light tracking-widest text-sage dark:bg-sage/20 dark:text-warm-white">
              WHAT WE OFFER
            </span>
            <h2 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Transformative Programs
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Professional yoga classes designed with care to help you reconnect with your breath, body, and purpose
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-sage/30 bg-linear-to-br from-sage/5 to-pink-100/5 p-8 backdrop-blur-sm transition-all hover:border-sage/50 hover:shadow-2xl dark:border-sage/20 dark:from-sage/10 dark:to-pink-900/10">
              <div className="mb-6">
                <div className="mb-2 text-5xl font-light text-sage dark:text-sage-light">₹1200</div>
                <div className="text-lg text-muted-foreground">Per 1 Month</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-sage" />
                  <span className="text-sm text-muted-foreground">Access to all classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-sage" />
                  <span className="text-sm text-muted-foreground">Personalized guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-sage" />
                  <span className="text-sm text-muted-foreground">Community support</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border-2 border-pink-300/30 bg-linear-to-br from-pink-100/5 to-sage/5 p-8 backdrop-blur-sm transition-all hover:border-pink-300/50 hover:shadow-2xl dark:border-pink-900/20 dark:from-pink-900/10 dark:to-sage/10">
              <div className="absolute right-4 top-4 rounded-full bg-pink-300/20 px-3 py-1 text-xs font-light dark:bg-pink-900/30">
                BEST VALUE
              </div>
              <div className="mb-6">
                <div className="mb-2 text-5xl font-light text-pink-300 dark:text-pink-200">₹2000</div>
                <div className="text-lg text-muted-foreground">Per 2 Months</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-300" />
                  <span className="text-sm text-muted-foreground">Everything in 1 month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-300" />
                  <span className="text-sm text-muted-foreground">Save ₹400</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-300" />
                  <span className="text-sm text-muted-foreground">Better results with continuity</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20 rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm md:p-12"
          >
            <h3 className="mb-8 text-center text-3xl font-light text-foreground">Class Timings</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-sage/10 p-3 dark:bg-sage/20">
                    <svg className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-light text-foreground">Morning</h4>
                </div>
                <div className="space-y-2 pl-14">
                  <div className="text-muted-foreground">6:30 AM to 7:30 AM</div>
                  <div className="text-muted-foreground">7:30 AM to 8:30 AM</div>
                </div>
              </div>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-pink-300/10 p-3 dark:bg-pink-900/20">
                    <svg className="h-5 w-5 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-light text-foreground">Evening</h4>
                </div>
                <div className="space-y-2 pl-14">
                  <div className="text-muted-foreground">6:00 PM to 7:00 PM</div>
                  <div className="text-muted-foreground">7:00 PM to 8:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="offering-card group"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-sage/50 hover:shadow-2xl dark:hover:border-warm-white/30 md:p-10">
                  <div className={`absolute inset-0 bg-linear-to-br ${offering.gradient} opacity-50`} />

                  <div className="relative">
                    <h3 className="mb-4 text-3xl font-light text-foreground md:text-4xl">{offering.title}</h3>
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {offering.description}
                    </p>

                    <div className="space-y-2">
                      {offering.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-sage dark:bg-sage-light" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
