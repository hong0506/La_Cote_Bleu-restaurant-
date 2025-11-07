'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { Anchor, Waves, ChevronDown } from 'lucide-react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  // Parallax effects
  const yParallax = useTransform(scrollY, [0, 500], [0, 150])
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0])
  
  useEffect(() => {
    // 仅在客户端执行
    if (typeof window === 'undefined') return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Create floating particles
  const particles = Array.from({ length: 20 }, (_, i) => i)
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-navy-500">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A877' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold rounded-full opacity-20"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Animated wave decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 opacity-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="currentColor"
            className="text-gold"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ 
          y: yParallax,
          opacity: opacityParallax,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Logo with mouse parallax */}
          <motion.div 
            className="inline-flex items-center justify-center w-32 h-32 mb-6 bg-navy-700 rounded-full border-4 border-gold shadow-2xl"
            animate={{
              rotateY: mousePosition.x,
              rotateX: -mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Anchor className="w-16 h-16 text-gold" strokeWidth={1.5} />
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-4">
            La Côte Bleu
          </h1>
          
          <p className="text-2xl md:text-3xl text-gold-200 font-light mb-3">
            Coastal French Cuisine, Made With Heart.
          </p>
          
          <p className="text-lg text-cream-400 italic">
            Inspired by the sea. Rooted in French tradition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}>
            Reservations
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
            View Menu
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
