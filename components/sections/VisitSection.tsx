'use client'

import { SectionHeader } from '../SectionHeader'
import { MapPin, Utensils, ParkingCircle } from 'lucide-react'

export function VisitSection() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy/5 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          title="Visit Us"
          subtitle="Find us in the heart of Pacific Grove, overlooking the beautiful California coast"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-navy/5 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-navy mb-2">Address</h3>
                <p className="text-navy-600 text-lg">123 Ocean View Boulevard</p>
                <p className="text-navy-600 text-lg">Pacific Grove, CA 93950</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy/5 p-4 rounded-full">
                <ParkingCircle className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-navy mb-2">Parking</h3>
                <p className="text-navy-600">Street parking available on Ocean View Boulevard and adjacent streets. Public parking lot one block away on Lighthouse Avenue.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy/5 p-4 rounded-full">
                <Utensils className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-navy mb-2">Dining</h3>
                <p className="text-navy-600">Dinner service Tuesday through Sunday. Reservations recommended for parties of 4 or more. We accommodate dietary restrictions with advance notice.</p>
              </div>
            </div>
          </div>

          <div className="h-96 bg-navy-100 rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-200 to-navy-300">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-navy-400 mx-auto mb-4" />
                <p className="text-navy-500 font-serif text-xl">Google Maps Embed</p>
                <p className="text-navy-400 text-sm mt-2">Pacific Grove, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
