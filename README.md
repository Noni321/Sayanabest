# SiyanahBest (صيانةبست) - Bilingual Landing Page

A stunning, high-performance bilingual landing page for SiyanahBest, a home appliance maintenance service in Jeddah, Saudi Arabia.

## Features

### Bilingual Support
- **Arabic (RTL)**: صيانةبست branding with right-to-left layout
- **English (LTR)**: SiyanahBest branding with left-to-right layout
- Language selector overlay on initial load
- Seamless language switching throughout the application

### Design & UI
- **Modern Aesthetic**: Glassmorphism effects, rounded corners, clean typography
- **Color Palette**: Deep Blue (#1e40af, #1e3a8a, #172554), White, Silver/Grey accents
- **Responsive**: Mobile-first design optimized for all screen sizes (320px+)
- **Animations**: Smooth transitions, fade-in effects, pulse animations

### Sections

#### 1. Sticky Header
- Dynamic logo based on language
- Language toggle button
- Prominent "Call Now" CTA
- Glassmorphism effect on scroll

#### 2. Hero Section
- Full-screen background with high-quality appliance repair images
- Bilingual headlines and subtitles
- Trust badges (30-Day Warranty, Jeddah Coverage)
- Multiple CTAs (Call Now, WhatsApp, Book Now)

#### 3. Services
- Three service categories with custom images:
  - AC Installation & Repair
  - Washing Machine Repair (with specific issue badges)
  - Refrigerator Maintenance
- Glassmorphic cards with hover effects

#### 4. Guarantee Section
- Prominent 30-day warranty display
- Visual emphasis with gradient background
- Clear messaging in both languages

#### 5. Brands Section
- Grid display of supported brands
- Whirlpool, Maytag, GE, Ariston, Samsung, Daewoo, Toshiba, LG, Bosch, Siemens, Haier, Hitachi

#### 6. Coverage Section
- Service area visualization for Jeddah
- Area breakdown (North, South, Central, East Jeddah)

#### 7. Footer
- Contact information (Phone: 0554276643)
- Quick links navigation
- Detailed service description
- Social links

#### 8. Floating Action Button
- Always-visible WhatsApp button
- Positioned bottom-right (LTR) or bottom-left (RTL)
- Pulse animation for attention

### Additional Features
- **Booking Form**: Complete service booking with validation
  - Service type selection
  - Customer details
  - Preferred date and time
  - Additional notes
  - Form validation with Zod
- **Toast Notifications**: Success/error feedback
- **Database Integration**: PostgreSQL with Drizzle ORM

## Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS 3**: Utility-first styling
- **Vite**: Fast build tool
- **Wouter**: Lightweight routing
- **React Query**: Server state management
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Radix UI**: Accessible component primitives
- **Lucide React**: Modern icon library
- **Framer Motion**: Animation library

### Backend
- **Express**: Web server
- **Drizzle ORM**: Type-safe database queries
- **PostgreSQL**: Relational database

### Fonts
- **Arabic**: Cairo (headings), Tajawal (body)
- **English**: Poppins (headings), Inter (body)
- All fonts loaded via Google Fonts

## Development

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database

### Installation

```bash
# Install dependencies
npm install

# Set up database (if needed)
npm run db:push

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure

```
/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # Reusable UI components
│   │   │   ├── sticky-header.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── guarantee-section.tsx
│   │   │   ├── brands-section.tsx
│   │   │   ├── coverage-section.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── floating-whatsapp.tsx
│   │   │   ├── language-selector.tsx
│   │   │   └── booking-form.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and context
│   │   │   ├── language-context.tsx  # Bilingual support
│   │   │   └── queryClient.ts
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Root component
│   │   ├── index.css      # Global styles
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend application
│   ├── db.ts             # Database connection
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data access layer
│   └── index.ts          # Server entry point
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema and validation
├── attached_assets/      # Images and assets
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json
```

## API Endpoints

### POST /api/bookings
Create a new service booking

**Request Body:**
```json
{
  "serviceType": "ac" | "washing" | "fridge",
  "customerName": "string",
  "phone": "string",
  "preferredDate": "YYYY-MM-DD",
  "preferredTime": "morning" | "afternoon" | "evening",
  "notes": "string (optional)"
}
```

**Response:** `201 Created`

### GET /api/bookings
Retrieve all bookings

**Response:** `200 OK`

## Performance Optimizations

- Image optimization with Vite
- Code splitting with dynamic imports
- Lazy loading for below-the-fold content
- Minimal animation overhead
- Efficient re-renders with React Query
- Responsive images with proper sizing

## Accessibility

- Semantic HTML structure
- Proper ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast text for readability
- Focus indicators on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

**Phone:** 0554276643  
**WhatsApp:** https://wa.me/966554276643  
**Service Area:** Jeddah, Saudi Arabia

## License

MIT License - See LICENSE file for details

---

Built with ❤️ for SiyanahBest (صيانةبست)
