'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, BookOpen, Calendar, Image as ImageIcon, MapPin } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: BookOpen, label: 'Menu', id: 'menu' },
  { icon: Calendar, label: 'Reservations', id: 'reservations' },
  { icon: ImageIcon, label: 'Gallery', id: 'gallery' },
  { icon: MapPin, label: 'Contact', id: 'contact' },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 仅在客户端执行
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      // Show nav after scrolling 300px
      setIsVisible(window.scrollY > 300)

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-navy/95 backdrop-blur-lg px-6 py-4 rounded-full border-2 border-gold/30 shadow-2xl">
            <div className="flex items-center gap-6">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative p-3 rounded-full transition-colors ${
                      isActive ? 'text-gold' : 'text-cream-400 hover:text-gold'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gold/20 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className="w-5 h-5 relative z-10" />
                    
                    {/* Tooltip */}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: -40 }}
                      className="absolute left-1/2 transform -translate-x-1/2 bg-navy text-cream text-xs px-3 py-1 rounded-full whitespace-nowrap pointer-events-none"
                    >
                      {item.label}
                    </motion.span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
