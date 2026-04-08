# Dhyana Villas - Koh Phangan

Luxury boutique villa booking website for Dhyana Villas, a private pool villa property in Hin Kong, Koh Phangan, Thailand.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4, Framer Motion 12
- **Smooth Scroll:** Lenis
- **i18n:** next-intl (English, French, Thai)
- **Maps:** OpenStreetMap embed
- **TypeScript** throughout

## Features

- Cinematic hero with staggered blur focus-pull entrance animations
- Smooth scroll-triggered section reveals with directional animations
- Gold scroll progress bar and section dividers for visual continuity
- Interactive gallery with category filtering and direction-aware lightbox
- Auto-rotating review carousel with progress indicators
- Responsive navigation with spring-physics compact-on-scroll
- Film grain texture overlay and parallax effects
- Animated number counters for stats
- Full internationalization (EN/FR/TH)
- Accessibility: skip links, keyboard navigation, reduced motion support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/              # Next.js app directory (layouts, pages, globals.css)
  components/
    layout/         # Navigation, Footer, SmoothScroll, LanguageSwitcher
    sections/       # Hero, Intro, Villas, Gallery, Experience, Reviews, Booking
    gallery/        # LightboxModal
    ui/             # AnimatedSection, SectionIntro, StaggerGroup, CountUp,
                    # SectionDivider, ScrollProgress, ParallaxLayer, Button,
                    # FeatureGlyph, Logo, RatingBadge, ScrollIndicator
  data/             # Static data (villas, gallery, attractions, reviews)
  i18n/             # Internationalization config
  lib/              # Constants and utilities
  messages/         # Locale JSON files (en, fr, th)
  styles/           # Font configuration
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
