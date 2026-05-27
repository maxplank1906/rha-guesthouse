# RHA Guest House Islamabad — Boutique Hospitality Website

A premium, fast, mobile-first responsive web application designed for **RHA Guest House**, situated in G-13, Islamabad near the Srinagar Highway. This website conveys boutique elegance, premium visual rhythm, and seamless transaction capability through direct client-to-whatsapp reservation routing.

The stack runs entirely on a modern React 19 SPA framework compiled by Vite 6, styled with Tailwind CSS v4, and runs fully front-end optimized for the Vercel Free Plan without requiring database or server overhead.

---

## 🏗️ Technical Stack

- **Framework:** React 19 (Functional Components with Hooks)
- **Build Tooling:** Vite 6 / TypeScript (Strict Type Safety)
- **Styling Engine:** Tailwind CSS v4 (Using modern `@import "tailwindcss";` theme structure)
- **Iconography:** Lucide React
- **Hosting Environment:** Optimized for Vercel (Free Tier) & Static Site Delivery

---

## ✨ Features Overview

1. **Interactive Booking Engine Widget:**
   - Lets prospective clients select check-in date, check-out date, bed or room type, and total guest count.
   - Compiles inputs instantly into a professional, human-formatted booking inquiry template.
   - Opens the inquiry inside WhatsApp automatically with no database dependencies, guaranteeing 100% reliable conversion.

2. **Luxury Visual Architecture & Theme:**
   - Built on an off-white and deep charcoal canvas (`#FAFAF7` and `#16150F`) accented by exquisite warm boutique gold indicators (`#C49B4B` / `#A8813A`).
   - Clean "Space Grotesk" type headings contrasted with legible, wide tracking "Inter" body copy and technical "JetBrains Mono" layouts.

3. **High Fidelity Scroll States:**
   - Smoothly transitions from fully transparent top-of-page navigation into a subtle, frosted ivory ivory backdrop (`rgba(250, 250, 247, 0.92)`) with subtle blur and light border borders to enhance text legibility and contrast.

4. **Address Copying & Directions Hub:**
   - Copy-to-clipboard functionality displaying responsive visual cues.
   - Deep-linked driving coordinates integrated directly into Google Maps with correct cross-origin attributes.

5. **FAQ Interactive Accordions:**
   - Optimized state management supporting simple expansion of common hospitality questions regarding standby generators, amenities, security, and transport.

---

## 📁 Project Folder Structure

```text
├── public/                 # Static assets, branding logos, favicons
├── src/
│   ├── assets/             # Vector graphic patterns and styling tools
│   ├── components/         # Modular client components
│   │   ├── BookingWidget.tsx # Interactive form processing engine
│   │   ├── Footer.tsx      # Multi-column semantic footer and links
│   │   ├── Logo.tsx        # High-definition scalable vector logo system
│   │   └── Navbar.tsx      # Scroll-detecting responsive floating navigation bar
│   ├── pages/              # Clean container page views
│   │   ├── About.tsx       # Brand history, amenities, backup power systems
│   │   ├── Contact.tsx     # Direction hubs, copy tools, detailed book forms
│   │   ├── Gallery.tsx     # Masonry-style guest house gallery layout
│   │   ├── Home.tsx        # Editorial layout introduction and hero panels
│   │   └── Rooms.tsx       # Suite inventory catalog and individual WhatsApp book triggers
│   ├── App.tsx             # Master viewport router and scroll container controller
│   ├── config.ts           # Centralised guest house location & WhatsApp variables
│   ├── index.css           # Global typography fonts and Tailwind CSS v4 setup
│   └── main.tsx            # Application entry point mounting React
├── .env.example            # Sample server variables configuration matching system rules
├── .gitignore              # Secure rules omitting platform secrets & build runtimes
├── index.html              # Core DOM frame mounting the single-page application
├── metadata.json           # Studio metadata, name, description, capabilities
├── package.json            # Automated scripts and production dependency definitions
├── tsconfig.json           # Type resolution config for TS compilation
├── vercel.json             # Vercel-specific routing rewrites for stable client redirects
└── vite.config.ts          # Build plugin chains and transpilation controls
```

---

## ⚙️ Local Development Setup

To begin developing on this boutique hospitality product locally:

### 1. Prerequisite Installations

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18+ recommended).

### 2. Dependency Resolution

Install the pre-configured project packages:

```bash
npm install
```

### 3. Initiate Dev Server

Boot the local development server mapping on host `0.0.0.0` and port `3000`:

```bash
npm run dev
```

Your screen will update. Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 4. Code Quality & Format Linters

To run clean TypeScript type validations:

```bash
npm run lint
```

### 5. Compile Static Production Build

Verify compilation output matching standard build parameters:

```bash
npm run build
```

This compiles optimized client-side CSS, minified script bundles, and structures static folders in `dist/`.

---

## 🌐 WhatsApp Booking Engine Architecture

The interactive reservation system leverages client-to-client deep linking without exposing intermediate, costly database servers:

- **Validation:** Forces name validation immediately, avoiding incomplete records.
- **Formatting:** Programmatically converts raw user inputs (e.g. `2026-05-28`) into attractive, formatted calendar notation (e.g. `Thu, May 28, 2026`).
- **Data Payload:** Packages inputs inside an encoded URL payload directed at safe WhatsApp endpoint triggers (`wa.me`) using `encodeURIComponent`.
- **Isolation:** Executes in a separate sandboxed window wrapper via safe client directives:

```typescript
window.open(waUrl, '_blank', 'noopener,noreferrer');
```

---

## ⚡ Performance Features & Best Practices

- **Priority Resource Hints:** The above-the-fold luxury splash image in the Home hero is configured with `fetchPriority="high"` and a prioritized `<img>` layout to maximize Largest Contentful Paint (LCP) performance.
- **No Layout Shifts:** Explicit design layouts with set aspect-ratio parameters prevent Cumulative Layout Shift (CLS).
- **Lightweight Dependencies:** Replaces massive, layout-heavy animation wrappers with optimized static transitions and modern custom CSS.
- **Hardware-Accelerated Transitions:** Uses the browser's compositor layer for smooth header color fades, hover scaling, and accordions to avoid standard page repaints.

---

## 🔍 Search Engine Optimization (SEO) & Semantics

- **Structured Layouts:** Built with semantic `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements.
- **Heading Hierarchies:** Clean linear cascades of `<h1>` down to `<h4>` to improve layout mapping for search engines.
- **Metadata Configuration:** Contains updated descriptions and local pointers (Islamabad, G-13, Srinagar Highway) inside `index.html` and `metadata.json`.
- **Image Accessibility:** Every illustration, room card, and hero features custom explanatory `alt` strings.
- **Local Business Markup (Schema):** Uses structured pointers inline to assist local hospitality search crawlers directory placement.

---

## ♿ Accessibility Compliance (a11y)

- **Touch Target Padding:** Interactive controls (buttons, navigation elements, selects) maintain safe physical contact targets of at least 44x44px.
- **Keyboard Navigation:** Every text field, dropdown selection, button, and navigation header includes proper input focus indicators.
- **Contrast Ratios:** Pure deep text colors are contrasted against off-white background layers to exceed strict WCAG AA standards.
- **ARIA Assertions:** Interactive elements include clear label descriptions (`aria-label`, `aria-expanded`, `aria-hidden="true"`, and `aria-controls`) to accommodate assistive screen readers.

---

## 🛫 Deployment Configurations

This repository is fully compatible with direct integration flows. Follow these guides to deploy securely:

### 🐙 Safe GitHub Publishing Guide

To push the project from Google AI Studio to a personal GitHub workspace without exposing secrets:

1. **Verify Files Presence:** Make sure `.gitignore` contains the appropriate rules to skip system files and `.env` outputs.
2. **Initialize Local Git Repository (If not yet initialized):**
   ```bash
   git init
   git checkout -b main
   ```
3. **Commit Clean Workspace:**
   ```bash
   git add .
   git commit -m "chore: initial release of RHA Guesthouse boutique site"
   ```
4. **Connect Remote Target:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   ```
5. **Publish Code:**
   ```bash
   git push -u origin main
   ```

### 🔺 Vercel Deployment Tutorial (Free Tier)

Since the website architecture is completely static and front-end optimized, the Vercel Free Plan is the perfect matches for hosting:

1. Sign in to your [Vercel Console](https://vercel.com/) and click **Add New** > **Project**.
2. Connect your GitHub account and select your **RHA Guest House** repository from the import list.
3. Keep default build and distribution parameters. Vercel automatically detects the Vite config setup and configures:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.
5. Once complete, deep linking and sub-page refreshes will run flawlessly using the configuration guidelines integrated in `vercel.json`!

---

## 🛡️ License

Proprietary License — All Rights Reserved for **RHA Guest House (Islamabad)**. Developed with professional-grade craftsmanship.
