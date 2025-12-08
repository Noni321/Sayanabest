# SiyanahBest (صيانةبست) - Home Appliance Maintenance Landing Page

## Overview
A bilingual (Arabic/English) landing page for SiyanahBest, a home appliance maintenance service based in Jeddah, Saudi Arabia. The site features modern glassmorphism design, RTL/LTR layout switching, and prominent call-to-action elements.

## Recent Changes
- **Dec 8, 2025**: Initial implementation with full bilingual support
- Created language context for AR/EN switching with localStorage persistence
- Built all landing page sections: Hero, Services, Guarantee, Brands, Coverage, Footer
- Added floating WhatsApp button and sticky header
- Implemented smooth scroll behavior

## Project Architecture

### Frontend (client/)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: Wouter
- **State**: React Context for language management

### Key Components
- `LanguageSelector` - Full-screen language choice overlay
- `StickyHeader` - Glassmorphism header with logo and CTA
- `HeroSection` - Full-viewport hero with background image
- `ServicesSection` - Grid of service cards (AC, Washing, Fridge)
- `GuaranteeSection` - 30-day warranty highlight
- `BrandsSection` - Supported brands grid
- `CoverageSection` - Service area information
- `Footer` - Contact info and quick links
- `FloatingWhatsApp` - Sticky WhatsApp button

### Backend (server/)
- **Framework**: Express.js
- **Purpose**: Serves the React frontend (no API endpoints needed)

## Configuration
- **Phone Number**: 0554276643
- **Service Area**: Jeddah, Saudi Arabia
- **Warranty**: 30 days

## Fonts
- **Arabic**: Cairo (headings), Tajawal (body)
- **English**: Poppins (headings), Inter (body)

## Color Scheme
- Primary: Deep Blue (#1e40af to #1e3a8a)
- Accent: White with glassmorphism effects
- WhatsApp: Green (#22c55e)
