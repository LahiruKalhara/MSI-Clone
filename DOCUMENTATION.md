# MSI Clone - Project Documentation

## Project Overview

A clone of the MSI (Micro-Star International) official website built as a learning project. Originally developed with vanilla HTML/CSS/JavaScript, the project has been converted to a modern React + Vite stack with multi-page routing and dark mode support.

## Current Status

**Status:** In Development
**Last Updated:** March 18, 2026
**Branch:** danushika

### Completed Features

- [x] Project converted from vanilla HTML/CSS/JS to React + Vite (JavaScript)
- [x] Component-based architecture with reusable components
- [x] Client-side routing with React Router v7
- [x] Dark mode / Light mode toggle with CSS variables
- [x] Scroll-based reveal animations using Intersection Observer
- [x] 7 fully built pages (Home, Products, AIoT Solutions, Community, What's New, Support, Future Trends)
- [x] Sticky header with navigation links
- [x] Gray colored headings with increased font sizes across all pages

### Pending / Future Improvements

- [ ] Responsive design (mobile & tablet breakpoints)
- [ ] Footer navigation links wired to actual routes
- [ ] Search functionality implementation
- [ ] User authentication (login/register)
- [ ] Product detail pages with dynamic routing
- [ ] Loading states and page transitions
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Performance optimization (lazy loading, image compression)

---

## Tech Stack

| Technology       | Version  | Purpose                     |
|------------------|----------|-----------------------------|
| React            | ^18.3.1  | UI library                  |
| React DOM        | ^18.3.1  | DOM rendering               |
| React Router DOM | ^7.13.1  | Client-side routing         |
| Lucide React     | ^0.577.0 | Icon library                |
| Vite             | ^6.0.0   | Build tool & dev server     |
| @vitejs/plugin-react | ^4.3.4 | React support for Vite   |

---

## Project Structure

```
MSI-Clone/
├── index.html                  # Vite entry point
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── DOCUMENTATION.md            # This file
│
└── src/
    ├── main.jsx                # React DOM root
    ├── App.jsx                 # App shell with routing & dark mode state
    ├── index.css               # Global reset & CSS variables (light/dark themes)
    │
    ├── assets/                 # Static images (61 files)
    │   ├── logo.png            # MSI logo
    │   ├── headbanner.jpeg     # Hero banner
    │   ├── card1-6.jpeg        # Product cards
    │   ├── c1-6.jpeg           # AMR solution cards
    │   ├── ev charger*.png     # Category icons
    │   ├── reward2.webp        # Reward program banner
    │   ├── insider.webp        # Insider program banner
    │   ├── banner_*.jpeg/png   # Promotional banners (30 files, unused)
    │   └── ...                 # Icons and misc images
    │
    ├── components/             # Reusable UI components (used on Home page)
    │   ├── Header.jsx / .css   # Sticky nav bar with dark mode toggle
    │   ├── HeroBanner.jsx / .css
    │   ├── LatestInnovation.jsx / .css
    │   ├── AIoTSolutions.jsx / .css
    │   ├── SmartSolutions.jsx / .css
    │   ├── Promotions.jsx / .css
    │   └── Footer.jsx / .css   # Site footer with link columns
    │
    ├── hooks/
    │   └── useScrollAnimation.js   # Intersection Observer hook for scroll reveals
    │
    └── pages/                  # Route-level page components
        ├── Home.jsx            # Landing page (composes home components)
        ├── Products.jsx / .css # Featured products grid + categories
        ├── AiotSolutions.jsx / .css  # EV charging, industry solutions, partners
        ├── Community.jsx / .css      # Forums, featured posts, events
        ├── WhatsNew.jsx / .css       # News articles, press releases
        ├── Support.jsx / .css        # Search, FAQ, service centers
        └── FutureTrends.jsx / .css   # Future trends in MIS with interactive cards
```

---

## Routes

| Path              | Page Component   | Description                              |
|-------------------|------------------|------------------------------------------|
| `/`               | Home             | Landing page with hero, products, promos |
| `/products`       | Products         | Product grid with prices + categories    |
| `/aiot-solutions` | AiotSolutions    | AIoT industry solutions & partners       |
| `/community`      | Community        | Forums, featured posts, events calendar  |
| `/whats-new`      | WhatsNew         | News articles & press releases           |
| `/support`        | Support          | Search, FAQ accordion, service centers   |
| `/future-trends`  | FutureTrends     | 10 future MIS trends, timeline, global distribution |

---

## Key Features

### Dark Mode

- Toggle button in the header (sun/moon icon)
- Implemented via CSS custom properties on `body` / `body.dark`
- Variables: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--text-primary`, `--text-secondary`, `--header-blur-bg`, `--icon-filter`
- Logo and icons are inverted in dark mode using CSS `filter: invert(1)`

### Scroll Animations

- Custom `useScrollAnimation` hook wraps the Intersection Observer API
- Sections fade in with blur-to-clear + slide-up transition when scrolled into view
- One-time animation (unobserves after triggering)
- Applied to: LatestInnovation, AIoTSolutions, SmartSolutions, Promotions on the Home page

### Future Trends Page

- Hero section with animated image grid and badge
- Stats bar highlighting key metrics (10 trends, 2026+, AI Powered, 360° Integration)
- 10 interactive trend cards with expand/collapse on click, each featuring:
  - Lucide icon, image, title, description, and technology tags
- Animated 3D globe with global distribution info across 4 regions (Americas, Europe, Asia Pacific, MEA)
- Evolution roadmap timeline (2024–2027+)
- Uses `lucide-react` icons: BotMessageSquare, Hand, Cog, Radio, Puzzle, Target, Brain, Link, Globe, Landmark

### Heading Styles

- All page headings (h1, h2) across Products, AIoT Solutions, Community, What's New, and Support pages are styled with:
  - Color: gray
  - h1: 4.5rem
  - h2: 3.8rem

---

## Scripts

| Command           | Description                        |
|--------------------|------------------------------------|
| `npm run dev`      | Start Vite dev server (port 5173)  |
| `npm run build`    | Production build to `dist/`        |
| `npm run preview`  | Preview production build locally   |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Assets Summary

| Type   | Count | Used In                                |
|--------|-------|----------------------------------------|
| JPEG   | 38    | Product cards, banners, solutions      |
| PNG    | 10    | Logo, icons, category images           |
| WebP   | 2     | Reward & Insider program banners       |
| SVG    | 1     | Download icon                          |
| **Total** | **61** |                                    |

> Note: 30 banner images (`banner_*.jpeg/png`) are currently unused in the application.

---

## Git Info

- **Repository Branch:** danushika
- **Main Branch:** main
- **Initial Commit:** Vanilla HTML/CSS/JS upload
- **Major Milestone:** Full conversion to React + Vite with routing and dark mode
