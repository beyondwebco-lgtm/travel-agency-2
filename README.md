# 🏔️ Aarohan Travels — Premium Domestic India Journeys
> **"Every Journey, Beautifully Planned."**

Aarohan Travels is a premium, modern travel agency website designed for a luxury travel brand based in **Jubilee Hills, Hyderabad, Telangana**. The platform is curated exclusively for domestic Indian travel, featuring a minimalist, high-end design inspired by Apple-level minimalism and luxury hospitality brands (like Airbnb Luxe and Aman Resorts).

---

## 🎨 Design System & Aesthetics

The interface is built to deliver a premium visual hierarchy with immersive imagery, soft glassmorphic elements, smooth parallax scrolls, and polished micro-interactions.

- **Color Palette**:
  - **Primary**: `#0F4C81` (Deep Indigo Blue)
  - **Accent**: `#FF9F1C` (Amber Orange)
  - **Success**: `#2A9D8F` (Emerald Teal)
  - **Background**: `#FAFAF8` (Off-white Canvas)
  - **Dark**: `#1E293B` (Slate Grey)
- **Typography**:
  - **Headings**: `Poppins` (Bold, elegant geometric sans)
  - **Body**: `Inter` (Clean, highly legible neo-grotesque)
- **Layout Tokens**:
  - Rounded corners: `20px` to `28px` for premium modern containers.
  - Smooth custom-scrolling layout.
  - Immersive full-screen drone-shot overlays.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**:
  - [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) with `ScrollTrigger` for advanced scroll-driven animations & parallax effects.
  - [Framer Motion](https://www.framer.com/motion/) for micro-interactions, spring physics, drawers, and modal transitions.
- **Iconography**: [Lucide Icons](https://lucide.dev/)

---

## 🧭 Main Sections & Features

### 1. Sticky Navigation Bar
- Transparent background initially, transitioning to a blurred glassmorphic header (`solid-nav`) upon scroll.
- Responsive mobile drawer using Framer Motion.
- Quick call-to-action button ("Plan My Trip") with hover-slide effects.

### 2. Full-Screen Cinematic Hero
- Background image featuring the Himalayas with a Ken Burns zoom animation.
- Dynamic Search Bar widget filtering:
  - **Destination** (Dropdown of Indian regions)
  - **Travel Date** (Date picker with custom dark color scheme)
  - **Travelers** (Guest selectors)
- Parallax scrolling on the background image controlled by GSAP.

### 3. Popular Destinations Grid
- 12 curated Indian hotspots: **Kashmir, Ladakh, Manali, Shimla, Goa, Kerala, Andaman Islands, Rajasthan, Rishikesh, Coorg, Ooty, Munnar**.
- Cards featuring starting price indicators, hover-zoom zoom effects, and 45-degree rotating arrow link indicators.

### 4. Featured Tour Catalog
- Complete packages with detailed breakdowns:
  - **Kashmir Paradise** (6 Days / ₹24,999)
  - **Golden Rajasthan** (7 Days / ₹27,999)
  - **Kerala Backwaters** (5 Days / ₹19,999)
  - **Goa Escape** (4 Days / ₹14,999)
  - **Ladakh Adventure** (7 Days / ₹29,999)
  - **Andaman Bliss** (5 Days / ₹31,999)
- Meta tags for package contents: Included Meals, Hotel Ratings, Transport (SUV/Sedans), and Custom Sightseeing routes.

### 5. Why Choose Us (Trust Factors)
- Polished grid showcasing unique selling points: 24/7 Support, Best Price Guarantee, Trusted Guides, Handpicked Hotels, Safe Travel, Easy Booking, Custom Itineraries, and 100% Customer Satisfaction.

### 6. Curated Travel Experiences
- Horizontal scrolling track categorization: **Adventure, Luxury, Wildlife, Hill Stations, Beaches, Road Trips, Pilgrimage, Weekend Getaways, Photography Tours**.

### 7. Interactive Stats Counters
- Animated counters showing business milestones:
  - `20,000+` Happy Travelers
  - `150+` Indian Destinations
  - `4.9★` Average Rating
  - `8+` Years of Experience

### 8. Masonry Photo Gallery
- Pinterest-style staggered image layout showcasing highlights of Incredible India.
- Dynamic hover overlays and high-resolution lightbox previews.

### 9. Testimonials Carousel
- Automated sliding glassmorphic carousel showing reviews, client pictures, ratings, and locations.

### 10. Booking Engine Modal
- State-controlled dynamic inquiry modal pre-populating chosen packages/destinations.
- Form submissions handling user info, dates, guest counts, and customized tour requirements.

### 11. Contact & Map Section
- Hyperlocal information for the head office in **Jubilee Hills, Hyderabad, Telangana**.
- Integrated contact forms, contact details (+91 91000 45678, hello@aarohantravels.in), and responsive map placeholders.
- A floating WhatsApp button for instant support.

---

## ⚡ Setup & Local Development

To run Aarohan Travels locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css      # Core styles & Tailwind directives
│   │   ├── layout.tsx       # Typography & Metadata configuration
│   │   └── page.tsx         # Main entry point with GSAP triggers
│   └── components/
│       ├── BookingModal.tsx # Form engine for trip inquiries
│       ├── CTASection.tsx   # Premium bottom banner
│       ├── ContactSection.tsx
│       ├── Destinations.tsx # Showcase for Indian regions
│       ├── Experiences.tsx  # Horizontal scroll categories
│       ├── Footer.tsx
│       ├── Gallery.tsx      # Lightbox masonry photo panel
│       ├── Hero.tsx         # Cinematic entry & Search widget
│       ├── Navbar.tsx       # Scrolling header navigation
│       ├── Packages.tsx     # Card catalogs
│       ├── Stats.tsx        # Animated milestones dashboard
│       ├── Testimonials.tsx # Auto-sliding slider
│       ├── WhatsAppButton.tsx
│       └── WhyChooseUs.tsx  # Grid of trust highlights
```
