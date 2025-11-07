import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'La Côte Bleu | Coastal French Cuisine in Pacific Grove',
  description: 'Experience modern French coastal cuisine in Pacific Grove, CA. Chef Juan Carlos Ponce crafts dishes inspired by Provence, Brittany, and the Pacific Coast.',
  keywords: 'French restaurant Pacific Grove, coastal French cuisine, seafood restaurant Monterey County, fine dining Pacific Grove, French bistro California',
  openGraph: {
    title: 'La Côte Bleu | Coastal French Cuisine',
    description: 'Modern French coastal bistro in Pacific Grove, California',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
