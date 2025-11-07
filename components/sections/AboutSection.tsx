'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { Waves, Fish, Anchor, Shell, Award, Users, Star } from 'lucide-react'
import { AnimatedCounter } from '../AnimatedCounter'

export function AboutSection() {
  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const waveAnimation = {
    initial: { x: 0 },
    animate: {
      x: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative wave pattern at the top */}
      <div className="absolute top-0 left-0 right-0 h-24 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,0 L0,0 Z"
            fill="currentColor"
            className="text-navy"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          title="Our Story"
          subtitle="La Côte Bleu celebrates French cooking shaped by the sea"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-navy-600 leading-relaxed">
              Chef Juan Carlos Ponce crafts dishes inspired by Provence, Brittany, and the Pacific Coast — blending classic French techniques with modern elegance.
            </p>
            <p className="text-navy-500 leading-relaxed">
              Our menu changes with the seasons, highlighting the freshest seafood from local waters and ingredients from the finest coastal purveyors. Each dish tells a story of tradition, craft, and the deep connection between land and sea.
            </p>
            <p className="text-navy-500 leading-relaxed">
              Located in the heart of Pacific Grove, we invite you to experience French coastal cuisine that honors the past while embracing the present.
            </p>
          </motion.div>

          {/* Enhanced visual panel with coastal elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-500 to-navy-600" />
            
            {/* Animated wave overlay */}
            <motion.div
              variants={waveAnimation}
              initial="initial"
              animate="animate"
              className="absolute inset-0 opacity-20"
            >
              <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                <defs>
                  <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path
                      d="M0,50 Q25,40 50,50 T100,50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gold"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#wave-pattern)" />
              </svg>
            </motion.div>

            {/* Floating coastal icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute top-16 right-16"
              >
                <Shell className="w-12 h-12 text-gold opacity-40" />
              </motion.div>

              <motion.div
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute bottom-16 left-16"
              >
                <Fish className="w-16 h-16 text-gold opacity-30" />
              </motion.div>

              <motion.div
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                transition={{ delay: 2 }}
                className="absolute top-24 left-20"
              >
                <Waves className="w-10 h-10 text-cream opacity-25" />
              </motion.div>

              {/* Center anchor with pulse effect */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gold blur-2xl"
                />
                <Anchor className="w-24 h-24 text-gold relative z-10" strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Bottom text overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent p-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-gold font-serif text-2xl text-center"
              >
                Coastal Inspiration
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-cream-300 text-center text-sm mt-2"
              >
                Where French tradition meets Pacific elegance
              </motion.p>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold opacity-40" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold opacity-40" />
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-navy-200"
        >
          {[
            { icon: Award, value: 15, suffix: '+', label: 'Awards Won' },
            { icon: Users, value: 50, suffix: 'K+', label: 'Happy Guests' },
            { icon: Star, value: 4.9, suffix: '/5', label: 'Average Rating' },
            { icon: Fish, value: 100, suffix: '%', label: 'Fresh Seafood' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gold/10 rounded-full">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="font-serif text-4xl font-bold text-navy mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <p className="text-navy-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
