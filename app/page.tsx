import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { MenuSection } from '@/components/sections/MenuSection'
import { ReservationsSection } from '@/components/sections/ReservationsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { VisitSection } from '@/components/sections/VisitSection'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <SectionDivider variant="wave" />
      <AboutSection />
      <SectionDivider variant="dots" />
      <MenuSection />
      <SectionDivider variant="line" />
      <ReservationsSection />
      <SectionDivider variant="wave" />
      <GallerySection />
      <SectionDivider variant="dots" />
      <VisitSection />
      <Footer />
    </main>
  )
}
