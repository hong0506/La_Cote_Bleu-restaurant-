'use client'

import { motion } from 'framer-motion'
import { Anchor, Instagram, Facebook, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-cream py-12 relative overflow-hidden">
      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C8A877' fill-opacity='0.3'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center w-16 h-16 bg-navy-700 rounded-full border-2 border-gold mb-4">
              <Anchor className="w-8 h-8 text-gold" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-cream-400">
              Coastal French Cuisine
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cream-300 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream-300 hover:text-gold transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-cream-300 hover:text-gold transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream-300 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-cream-300">
              <li>Pacific Grove, CA</li>
              <li>
                <a href="tel:+18315551234" className="hover:text-gold transition-colors">
                  (831) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@lacotebleu.com" className="hover:text-gold transition-colors">
                  info@lacotebleu.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Hours</h3>
            <p className="text-cream-300 mb-4">
              Tuesday - Sunday<br />
              5:00 PM - 10:00 PM<br />
              <span className="text-sm">Closed Mondays</span>
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cream-300 hover:text-gold transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cream-300 hover:text-gold transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:info@lacotebleu.com" 
                className="text-cream-300 hover:text-gold transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-400 pt-8 text-center text-cream-400 text-sm">
          <p>© {currentYear} La Côte Bleu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
