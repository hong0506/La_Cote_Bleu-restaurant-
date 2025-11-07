'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MenuCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export function MenuCard({ title, description, icon, onClick, className }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -12, 
        boxShadow: "0 25px 50px rgba(10, 39, 64, 0.2)",
        scale: 1.02,
      }}
      className={cn(
        "relative bg-white p-8 rounded-xl border-2 border-navy-100 cursor-pointer transition-all duration-300 group overflow-hidden",
        className
      )}
      onClick={onClick}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500" />
      
      {/* Icon with background glow */}
      {icon && (
        <motion.div 
          className="mb-6 text-gold relative"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
          <div className="relative">{icon}</div>
        </motion.div>
      )}
      
      <h3 className="font-serif text-2xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-navy-400 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Animated button */}
      <div className="flex items-center text-gold font-medium group-hover:translate-x-3 transition-all duration-300">
        <span className="border-b-2 border-gold/0 group-hover:border-gold transition-all duration-300">
          View Menu
        </span>
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="ml-2 w-5 h-5" />
        </motion.div>
      </div>

      {/* Hover effect line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-navy"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}
