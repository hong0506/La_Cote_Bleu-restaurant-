# La Côte Bleu - Customer-Facing Website

A beautiful, modern website for La Côte Bleu, a coastal French bistro in Pacific Grove, California.

## Brand Identity

- **Theme**: Modern French coastal bistro with Monterey inspiration
- **Colors**:
  - Deep Navy: `#0A2740`
  - Washed Gold: `#C8A877`
  - Soft Cream: `#F4F1EC`
- **Design**: Elegant, maritime, minimal, and warm — inspired by French Riviera + Pacific Grove coast

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (serif) + Inter (sans-serif)

## Features

- ✨ **Hero Section**: Full-width gradient background with logo, tagline, and CTA buttons
- 📖 **About Section**: Story of Chef Juan Carlos Ponce and the restaurant's philosophy
- 🍽️ **Menu Section**: Interactive menu cards with modals for Dinner, Wine, and Chef's Specials
- 📅 **Reservations Section**: Contact information and booking CTAs
- 🖼️ **Gallery Section**: Lightbox gallery showcasing dishes and coastal inspiration
- 📍 **Visit Section**: Location details, parking information, and map placeholder
- 🦶 **Footer**: Quick links, contact info, hours, and social media

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx            # Hero section with animated background
│   ├── Footer.tsx          # Footer with links and contact info
│   ├── SectionHeader.tsx   # Reusable section header component
│   ├── MenuCard.tsx        # Interactive menu card with hover effects
│   ├── ui/
│   │   └── button.tsx      # Button component with variants
│   └── sections/
│       ├── AboutSection.tsx
│       ├── MenuSection.tsx
│       ├── ReservationsSection.tsx
│       ├── GallerySection.tsx
│       └── VisitSection.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── tailwind.config.ts      # Tailwind configuration with brand colors

```

## Customization

### Update Menu Items

Edit the menu arrays in `components/sections/MenuSection.tsx`:
- `dinnerMenu`
- `wineMenu`
- `specialsMenu`

### Update Contact Information

Edit contact details in:
- `components/sections/ReservationsSection.tsx`
- `components/sections/VisitSection.tsx`
- `components/Footer.tsx`

### Add Real Images

Replace placeholder backgrounds in:
- Hero section (`components/Hero.tsx`)
- About section (`components/sections/AboutSection.tsx`)
- Gallery section (`components/sections/GallerySection.tsx`)
- Visit section map (`components/sections/VisitSection.tsx`)

Use Next.js Image component for optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

### Integrate OpenTable

Update the reservation button in `components/sections/ReservationsSection.tsx` with your OpenTable widget or booking link.

### Add Google Maps

Replace the map placeholder in `components/sections/VisitSection.tsx` with a Google Maps embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

## SEO Keywords

The site is optimized for:
- French restaurant Pacific Grove
- Coastal French cuisine
- Seafood restaurant Monterey County
- Fine dining Pacific Grove

Update metadata in `app/layout.tsx` as needed.

## Performance

- Mobile-first responsive design
- Optimized fonts with `next/font`
- Smooth scroll behavior
- Lazy-loaded animations with Framer Motion
- Semantic HTML for accessibility

## License

© La Côte Bleu. All Rights Reserved.
