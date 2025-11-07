'use client'

import { useState, useEffect } from 'react'
import { SectionHeader } from '../SectionHeader'
import { MenuCard } from '../MenuCard'
import { UtensilsCrossed, Wine, Sparkles, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  name: string
  description: string
  price?: string
}

const dinnerMenu: MenuItem[] = [
  { name: "Bouillabaisse du Littoral Bleu", description: "Traditional Provençal fish stew with saffron, fennel, and rouille", price: "$42" },
  { name: "Citrus-Herb Turbot", description: "Pan-seared turbot with preserved lemon, herbs de Provence, and beurre blanc", price: "$48" },
  { name: "Coquilles Saint-Jacques", description: "Seared scallops with cauliflower purée, brown butter, and caviar", price: "$52" },
  { name: "Duck Confit", description: "Slow-cooked duck leg with garlic-rosemary potatoes and cherry gastrique", price: "$38" },
  { name: "Côte de Bœuf", description: "28-day dry-aged ribeye with sauce au poivre and pommes frites", price: "$68" },
  { name: "Moules Marinières", description: "Prince Edward Island mussels in white wine, shallots, and garlic", price: "$32" },
]

const wineMenu: MenuItem[] = [
  { name: "Sancerre, Loire Valley", description: "Crisp, mineral-driven Sauvignon Blanc", price: "$14/$56" },
  { name: "Chablis Premier Cru", description: "Elegant Chardonnay with notes of green apple and flint", price: "$18/$72" },
  { name: "Châteauneuf-du-Pape", description: "Bold Grenache blend with dark fruit and spice", price: "$22/$88" },
  { name: "Montrachet, California", description: "Local Chardonnay with rich, buttery notes", price: "$16/$64" },
  { name: "Pinot Noir, Monterey County", description: "Silky red with cherry, earth, and coastal terroir", price: "$15/$60" },
]

const specialsMenu: MenuItem[] = [
  { name: "Oysters on the Half Shell", description: "Daily selection from local bays, served with mignonette" },
  { name: "Lobster Thermidor", description: "Maine lobster with cognac cream sauce and Gruyère" },
  { name: "Seasonal Vegetable Tart", description: "Market vegetables with chèvre and herbed pastry" },
  { name: "Chef's Tasting Menu", description: "Six-course journey through coastal French cuisine, changes weekly" },
]

type MenuType = 'dinner' | 'wine' | 'specials' | null

export function MenuSection() {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>(null)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    if (selectedMenu) {
      // Prevent scrolling
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [selectedMenu])

  const getMenuItems = (type: MenuType): MenuItem[] => {
    switch (type) {
      case 'dinner': return dinnerMenu
      case 'wine': return wineMenu
      case 'specials': return specialsMenu
      default: return []
    }
  }

  const getMenuTitle = (type: MenuType): string => {
    switch (type) {
      case 'dinner': return 'Dinner Menu'
      case 'wine': return 'Wine Selection'
      case 'specials': return "Chef's Specials"
      default: return ''
    }
  }

  return (
    <section id="menu" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          title="Our Menu"
          subtitle="French coastal cuisine crafted with seasonal ingredients"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <MenuCard
            title="Dinner"
            description="A curated menu featuring the finest seafood and French classics"
            icon={<UtensilsCrossed className="w-12 h-12" />}
            onClick={() => setSelectedMenu('dinner')}
          />
          <MenuCard
            title="Wine"
            description="French and California coastal wines, by the glass & bottle"
            icon={<Wine className="w-12 h-12" />}
            onClick={() => setSelectedMenu('wine')}
          />
          <MenuCard
            title="Chef's Specials"
            description="Seasonal seafood and market-driven dishes"
            icon={<Sparkles className="w-12 h-12" />}
            onClick={() => setSelectedMenu('specials')}
          />
        </div>
      </div>

      {/* Menu Modal */}
      <AnimatePresence>
        {selectedMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedMenu(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-cream rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-10 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMenu(null)}
                className="absolute top-4 right-4 text-navy hover:text-gold transition-colors z-10 bg-cream/80 backdrop-blur-sm rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-10 pr-12">
                {getMenuTitle(selectedMenu)}
              </h2>

              <div className="space-y-8">
                {getMenuItems(selectedMenu).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-navy-200 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy leading-tight">
                        {item.name}
                      </h3>
                      {item.price && (
                        <span className="text-gold font-medium text-lg whitespace-nowrap">{item.price}</span>
                      )}
                    </div>
                    <p className="text-navy-500 text-base md:text-lg leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
