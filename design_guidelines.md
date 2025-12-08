# SiyanahBest (صيانةبست) Design Guidelines

## Design Approach
**Reference-Based:** Drawing from successful home service platforms like TaskRabbit, Thumbtack, and regional Arabic service platforms. Focus on trust-building through visual clarity, prominent contact options, and service legitimacy signals.

## Bilingual Architecture (Critical)
**Language Selector Overlay:** Full-screen language selection as absolute entry point with two large, elegant buttons (Arabic/English). No content visible until selection.

**Layout Switching:**
- Arabic: RTL layout, "صيانةبست" branding throughout
- English: LTR layout, "SiyanahBest" branding throughout
- All spacing, padding, and component layouts must mirror perfectly in RTL/LTR

## Typography
**Arabic (Primary):**
- Headings: Cairo or Almarai (Bold 700-800)
- Body: Tajawal or Cairo (Regular 400, Medium 500)

**English (Secondary):**
- Headings: Inter or Poppins (Semibold 600-700)
- Body: Inter (Regular 400, Medium 500)

**Scale:** text-5xl/6xl for hero headlines, text-3xl/4xl for section headers, text-xl/2xl for card titles, text-base/lg for body

## Layout System
**Spacing Units:** Tailwind 4, 6, 8, 12, 16, 24 units for consistent rhythm
**Container:** max-w-7xl with px-4 to px-8 responsive padding
**Section Padding:** py-16 mobile, py-24 desktop

## Core Sections

### 1. Sticky Header
- Logo "صيانةبست" (Arabic) / "SiyanahBest" (English) - bold minimalist typography
- Primary CTA: "اتصل الآن" / "Call Now" button with phone number 0554276643
- Glassmorphism effect: backdrop-blur with subtle shadow
- Height: 80px desktop, 64px mobile

### 2. Hero Section
**Layout:** Full-viewport height (min-h-screen) with high-quality appliance repair images as background
- Dark overlay (bg-black/40) for text legibility
- Center-aligned content with z-index layering
- Headline: "صيانةبست - الخيار الأفضل لإصلاح منزلك" (Arabic) / "SiyanahBest - The best choice for your home repair" (English)
- Subheading: "Expert maintenance in Jeddah. Fast, reliable, and guaranteed."
- Dual CTA buttons: Primary "اتصل الآن" with blurred background (backdrop-blur-md), Secondary "واتساب"
- Trust indicators: "30-Day Warranty" badge, "Jeddah Coverage" badge

### 3. Services Grid
**3-column layout (desktop), single column (mobile)**
- Cards with glassmorphism: backdrop-blur, border, rounded-2xl
- Each service card: Icon, Title, Issue list
- AC Installation & Repair
- Washing Machine Repair (with specific issues: Stains, Drainage, Noise, Jammed door, Vibration, Leaks)
- Refrigerator Maintenance
- Service card images from attached assets

### 4. Guarantee Section
**Prominent centered section with visual emphasis**
- Large "30" number typography (text-8xl)
- "Day Warranty" subtext
- "If the issue recurs, we fix it for free" promise
- Badge-style presentation with glassmorphic card

### 5. Brands We Service
**Grid layout: 4 columns desktop, 3 tablet, 2 mobile**
- Logo placeholders with consistent sizing (h-16 to h-20)
- Brands: Whirlpool, Maytag, General Electric, Ariston, Samsung, Daewoo, Toshiba
- Subtle hover lift effect (translate-y)

### 6. Coverage Area
- Map integration or visual of Jeddah
- "خدمة في جميع أنحاء جدة" text emphasis

### 7. Footer
- Contact: 0554276643
- Service areas
- Quick links (Services, Warranty, Contact)
- Arabic description text provided
- Social proof elements

## Floating Action Button (FAB)
**Fixed bottom-right (bottom-left for RTL)**
- WhatsApp green circular button (w-16 h-16)
- Shadow-2xl with pulse animation
- Phone number: 0554276643
- z-index: 50 for always-visible

## Component Specifications
**Buttons:** Rounded-lg to rounded-xl, py-3 px-6 minimum, semibold text
**Cards:** Rounded-2xl with backdrop-blur-sm, border border-white/20, shadow-xl
**Inputs (if forms added):** Rounded-lg, p-4, border focus states

## Images
**Hero Background:** Use attached appliance repair images - technician working on machines, professional service environment
**Service Cards:** Specific appliance images (AC unit, washing machine, refrigerator) from attached assets
**Image Treatment:** Subtle overlay filters for text readability, object-cover for hero

## Glassmorphism Implementation
- backdrop-filter: blur(12px)
- background: rgba(255,255,255,0.1) or theme equivalent
- border: 1px solid rgba(255,255,255,0.2)
- Apply to: Header, service cards, CTA sections, guarantee badge

## Mobile Responsiveness
- Single column layouts below md breakpoint
- Larger touch targets (min 48px)
- Sticky FAB always accessible
- Hero text scales appropriately (text-3xl mobile vs text-6xl desktop)

## Performance Optimizations
- Lazy load images below fold
- Optimize hero images (WebP format)
- Minimal animations (only FAB pulse and subtle card hovers)
- Single-page architecture for instant perceived load