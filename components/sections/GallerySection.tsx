'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { id: 1, title: "Bouillabaisse du Littoral Bleu", category: "dish" },
  { id: 2, title: "Coastal Dining Room", category: "interior" },
  { id: 3, title: "Citrus-Herb Turbot", category: "dish" },
  { id: 4, title: "Pacific Grove Coastline", category: "coast" },
  { id: 5, title: "Scallop Emblem Detail", category: "detail" },
  { id: 6, title: "Wine Selection", category: "beverage" },
  { id: 7, title: "Duck Confit", category: "dish" },
  { id: 8, title: "Sunset Over Monterey Bay", category: "coast" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    if (selectedImage !== null) {
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
  }, [selectedImage])

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-navy/10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          title="Gallery"
          subtitle="A glimpse into our culinary world and coastal inspiration"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="relative aspect-square bg-navy-100 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all group"
              onClick={() => setSelectedImage(index)}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-200 to-navy-300 relative">
                <p className="text-navy-500 font-serif text-sm text-center px-4 relative z-20 group-hover:text-cream transition-colors duration-300">
                  {image.title}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
            >
              <X className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-navy-300 to-navy-400 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-cream font-serif text-2xl mb-2">
                    {galleryImages[selectedImage].title}
                  </p>
                  <p className="text-cream-400">Image placeholder</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
