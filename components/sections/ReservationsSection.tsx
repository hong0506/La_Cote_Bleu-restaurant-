"use client";

import { SectionHeader } from "../SectionHeader";
import { Button } from "../ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export function ReservationsSection() {
  return (
    <section id="reservations" className="py-20 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Reservations"
          subtitle="Book a table for dinner. We welcome walk-ins when space allows."
          className="text-cream [&_h2]:text-cream [&_p]:text-cream-300"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-navy-600 p-8 rounded-lg border border-gold-400/20">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-gold">
                Book Your Table
              </h3>

              <div className="space-y-4 mb-6">
                <p className="text-cream-200">
                  For reservations, please call us or use our online booking
                  system through OpenTable.
                </p>
                <p className="text-cream-200 text-sm">
                  Reservations are recommended, especially for Friday and
                  Saturday evenings.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open('https://www.opentable.com', '_blank')}
                >
                  Book on OpenTable
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-navy"
                  onClick={() => window.location.href = 'tel:+18315551234'}
                >
                  Call to Reserve
                </Button>
              </div>
            </div>

            <div className="space-y-6 md:ml-8">
              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Hours</h4>
                  <p className="text-cream-300">Tuesday - Sunday</p>
                  <p className="text-cream-300">5:00 PM - 10:00 PM</p>
                  <p className="text-cream-400 text-sm mt-1">Closed Mondays</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <a
                    href="tel:+18315551234"
                    className="text-cream-300 hover:text-gold transition-colors"
                  >
                    (831) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a
                    href="mailto:info@lacotebleu.com"
                    className="text-cream-300 hover:text-gold transition-colors"
                  >
                    info@lacotebleu.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-cream-300">Pacific Grove, CA</p>
                  <p className="text-cream-400 text-sm mt-1">
                    Street parking available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
