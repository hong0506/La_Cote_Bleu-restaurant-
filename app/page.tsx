import dynamic from 'next/dynamic'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { MenuSection } from '@/components/sections/MenuSection'
import { ReservationsSection } from '@/components/sections/ReservationsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { VisitSection } from '@/components/sections/VisitSection'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

// 动态导入客户端组件，禁用SSR
const PageLoader = dynamic(() => import('@/components/PageLoader').then(mod => ({ default: mod.PageLoader })), { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress').then(mod => ({ default: mod.ScrollProgress })), { ssr: false })
const FloatingNav = dynamic(() => import('@/components/FloatingNav').then(mod => ({ default: mod.FloatingNav })), { ssr: false })
const CursorFollower = dynamic(() => import('@/components/CursorFollower').then(mod => ({ default: mod.CursorFollower })), { ssr: false })
const BackToTop = dynamic(() => import('@/components/BackToTop').then(mod => ({ default: mod.BackToTop })), { ssr: false })

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
