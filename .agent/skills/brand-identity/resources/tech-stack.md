# Preferred Tech Stack & Implementation Rules

## Core Stack
* **Framework:** Next.js (App Router) with TypeScript
* **Styling:** Tailwind CSS (Mandatory)
* **Component Library:** shadcn/ui
* **Icons:** Lucide React
* **Animations:** GSAP + ScrollTrigger
* **Database:** Supabase with RLS
* **Email:** Resend
* **Fonts:** Cormorant Garamond (headings) + Plus Jakarta Sans (body) via next/font/google
* **Deployment:** Cloudflare Pages

## Implementation Guidelines

### 1. Mixed Mode Design
* Hero section: dark background #0A0A0A
* All other sections: light background #FAFAF8
* Smooth transition between dark hero and light sections
* Never mix dark and light randomly — follow the pattern

### 2. Typography Rules
* Headlines: Cormorant Garamond, elegant and sophisticated
* Body: Plus Jakarta Sans, clean and readable
* Gold accents: #B8965A for prices, highlights, CTAs
* Never use bold athletic fonts (Space Grotesk) in this project

### 3. Component Patterns
* Property cards: rounded-xl with subtle shadow
* Buttons: rounded-full always
* Primary CTA: bg #B8965A text white
* Secondary CTA: border #B8965A text #B8965A
* Cards on light bg: white with subtle shadow
* Cards on dark bg: #111111 with gold border accent

### 4. Property Listings
* Always show: price, bedrooms, bathrooms, sqft
* Image: full width top of card, height 220px object-fit cover
* Hover: image zooms scale(1.05), card lifts translateY(-4px)
* Featured badge: bg #B8965A text white rounded-full

### 5. Forbidden Patterns
* NO generic real estate blue color schemes
* NO handshake or suit stock photos
* NO equal boring 3-column property grids
* NO cluttered layouts with too much information
* NO fitness or wellness patterns from previous projects
* NO Calendly embeds
* NO dark mode throughout — only hero is dark

### 6. Form Handling
* Server actions with use server
* Zod validation server side always
* Connect to Supabase leads table
* Resend notification on successful submission
* Show success toast on submit
