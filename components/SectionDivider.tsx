'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'dots' | 'line'
}

export function SectionDivider({ variant = 'wave' }: SectionDividerProps) {
  if (variant === 'dots') {
    return (
      <div className="flex justify-center items-center gap-3 py-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gold rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'line') {
    return (
      <div className="relative py-8">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: '50%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>
    )
  }

  return (
    <motion.div
      className="relative h-12 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <svg
        viewBox="0 0 1440 60"
        className="absolute inset-0 w-full h-full text-gold opacity-20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,30 Q360,0 720,30 T1440,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  )
}
