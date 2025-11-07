import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { MenuSection } from '@/components/sections/MenuSection'
import { ReservationsSection } from '@/components/sections/ReservationsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { VisitSection } from '@/components/sections/VisitSection'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'
import { PageLoader } from '@/components/PageLoader'
import { ScrollProgress } from '@/components/ScrollProgress'
import { FloatingNav } from '@/components/FloatingNav'
import { CursorFollower } from '@/components/CursorFollower'
import { BackToTop } from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <FloatingNav />
      <CursorFollower />
      <BackToTop />
      
      <main id="home" className="min-h-screen font-sans">
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
    </>
  )
}
