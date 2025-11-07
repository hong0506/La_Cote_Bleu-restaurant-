'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Anchor } from 'lucide-react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-navy flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-navy-700 rounded-full border-4 border-gold shadow-2xl"
            >
              <Anchor className="w-12 h-12 text-gold" strokeWidth={1.5} />
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl font-bold text-cream mb-2"
            >
              La Côte Bleu
            </motion.h1>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-navy-600 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gold-200 text-sm mt-4 italic"
            >
              Coastal French Cuisine
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
