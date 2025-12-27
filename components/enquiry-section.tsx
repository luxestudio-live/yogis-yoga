"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check, Send, Phone, MapPin, Mail } from "lucide-react"

// ...existing code...
export function EnquirySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  // const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  return (
    <ScrollReveal>
      <section id="contact" ref={sectionRef} className="relative min-h-screen w-full px-6 py-32 md:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-sage/5 to-transparent dark:via-sage/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full bg-sage/10 px-4 py-1.5 text-xs font-light tracking-widest text-sage dark:bg-sage/20 dark:text-warm-white">
            GET IN TOUCH
          </span>
          <h2 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Begin Your
            <br />
            Transformation
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
            Take the first step towards a healthier, more balanced life. Reach out to start your wellness journey.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm md:p-10">
              <div className="absolute inset-0 bg-linear-to-br from-sage/5 via-transparent to-pink-100/5 dark:from-sage/10 dark:to-pink-900/10" />

              <div className="relative space-y-8">
                <div>
                  <h3 className="mb-6 text-3xl font-light text-foreground">Contact Details</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Ready to transform your life? Get in touch with Sneha and start your personalized wellness journey
                    today.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.a href="tel:+919786543210" whileHover={{ x: 5 }} className="group flex items-start gap-4">
                    <div className="rounded-full bg-sage/10 p-3 transition-colors group-hover:bg-sage/20 dark:bg-sage/20 dark:group-hover:bg-sage/30">
                      <Phone className="h-6 w-6 text-sage dark:text-sage-light" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-light text-muted-foreground">Call or WhatsApp</div>
                      <div className="text-xl text-foreground">+91 9876543210</div>
                      <div className="text-sm text-muted-foreground">Sneha Gosai</div>
                    </div>
                  </motion.a>

                  <motion.div whileHover={{ x: 5 }} className="group flex items-start gap-4">
                    <div className="rounded-full bg-pink-300/10 p-3 transition-colors group-hover:bg-pink-300/20 dark:bg-pink-900/20 dark:group-hover:bg-pink-900/30">
                      <MapPin className="h-6 w-6 text-pink-300 dark:text-pink-200" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-light text-muted-foreground">Location</div>
                      <div className="text-lg leading-relaxed text-foreground">
                        Near Retnagar Parivar Mahol, Pal
                        <br />
                        Opposite Swapnil Society
                        <br />
                        Rajkot, Gujarat
                      </div>
                    </div>
                  </motion.div>

                  <motion.a
                    href="https://www.youtube.com/@YogisYoga"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="group flex items-start gap-4"
                  >
                    <div className="rounded-full bg-sage/10 p-3 transition-colors group-hover:bg-sage/20 dark:bg-sage/20 dark:group-hover:bg-sage/30">
                      <Mail className="h-6 w-6 text-sage dark:text-sage-light" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-light text-muted-foreground">YouTube Channel</div>
                      <div className="text-lg text-foreground">@YogisYoga</div>
                      <div className="text-sm text-muted-foreground">4.5K+ Subscribers</div>
                    </div>
                  </motion.a>
                </div>

                <div className="rounded-2xl border border-sage/20 bg-sage/5 p-6 dark:border-sage/10 dark:bg-sage/10">
                  <h4 className="mb-3 text-lg font-light text-foreground">Class Timings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Morning</span>
                      <span className="font-light">6:30 AM - 8:30 AM</span>
                    </div>
                    <div className="h-px bg-border/50" />
                    <div className="flex justify-between text-muted-foreground">
                      <span>Evening</span>
                      <span className="font-light">6:00 PM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm md:p-10">
            <div className="absolute inset-0 bg-linear-to-br from-pink-100/5 via-transparent to-sage/5 dark:from-pink-900/10 dark:to-sage/10" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <h3 className="mb-2 text-3xl font-light text-foreground">Send a Message</h3>
                <p className="text-muted-foreground">Fill out the form and we'll get back to you shortly</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-light text-muted-foreground">Full Name</label>
                  <Input
                    id="fullName"
                    placeholder="Your name"
                    required
                    className="h-14 border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-sage focus:ring-2 focus:ring-sage/20 dark:focus:border-warm-white dark:focus:ring-warm-white/20"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="phoneNumber" className="mb-2 block text-sm font-light text-muted-foreground">Phone Number</label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="h-14 border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-sage focus:ring-2 focus:ring-sage/20 dark:focus:border-warm-white dark:focus:ring-warm-white/20"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label htmlFor="email" className="mb-2 block text-sm font-light text-muted-foreground">Email Address (Optional)</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-14 border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-sage focus:ring-2 focus:ring-sage/20 dark:focus:border-warm-white dark:focus:ring-warm-white/20"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label htmlFor="programInterest" className="mb-2 block text-sm font-light text-muted-foreground">Program Interest</label>
                <Select name="programInterest">
                  <SelectTrigger className="h-14 border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-sage focus:ring-2 focus:ring-sage/20 dark:focus:border-warm-white dark:focus:ring-warm-white/20">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1month">1 Month - ₹1200</SelectItem>
                    <SelectItem value="2month">2 Months - ₹2000</SelectItem>
                    <SelectItem value="weightloss">Weight Loss & Detox</SelectItem>
                    <SelectItem value="stress">Stress Relief</SelectItem>
                    <SelectItem value="pranayama">Pranayama & Breathwork</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label htmlFor="message" className="mb-2 block text-sm font-light text-muted-foreground">Your Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your wellness goals..."
                  rows={5}
                  className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-sage focus:ring-2 focus:ring-sage/20 dark:focus:border-warm-white dark:focus:ring-warm-white/20"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="h-16 w-full bg-sage text-lg font-light text-warm-white transition-all hover:bg-sage/90 hover:shadow-xl dark:bg-warm-white dark:text-charcoal dark:hover:bg-warm-white/90"
                >
                  {submitted ? (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-3">
                      <Check className="h-6 w-6" />
                      Message Sent Successfully
                    </motion.span>
                  ) : (
                    <span className="flex items-center gap-3">
                      Send Message
                      <Send className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
      </section>
    </ScrollReveal>
  )
}
