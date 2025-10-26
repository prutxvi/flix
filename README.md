# Flix - Beyond the Route

A professional, modern landing page for Flix, the AI-powered smart navigation and driver safety platform built for India's roads.

## Features

- **Animated Hero Section** - Dynamic text animation with gradient effects
- **3D Dot Shader Background** - Interactive WebGL background with mouse trails
- **Stacked Display Cards** - Showcase key features with hover effects
- **Feature Grid** - Comprehensive feature presentation with icons
- **Tech Stack Carousel** - Infinite scrolling logo cloud
- **How It Works Timeline** - Animated vertical timeline with detailed steps
- **Call to Action** - Engaging CTA section with statistics
- **Fully Responsive** - Works seamlessly across all devices

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Three.js + React Three Fiber** for 3D effects
- **shadcn/ui** component library
- **Lucide React** for icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── animated-hero.tsx
│   │   ├── display-cards.tsx
│   │   ├── dot-shader-background.tsx
│   │   ├── infinite-slider.tsx
│   │   ├── logo-cloud.tsx
│   │   └── timeline.tsx
│   ├── FeaturesSection.tsx
│   ├── TechStackSection.tsx
│   ├── HowItWorksSection.tsx
│   └── CTASection.tsx
├── App.tsx                    # Main application
└── index.css                  # Global styles
```

## Key Sections

1. **Hero** - Animated headline with rotating descriptive words
2. **Features** - Stacked cards and feature grid showcasing Flix capabilities
3. **Tech Stack** - Infinite scrolling logos of technologies used
4. **How It Works** - Interactive timeline explaining the user journey
5. **CTA** - Final call-to-action with key statistics

## Design Principles

- **Dark Theme** - Professional black and cyan/blue color scheme
- **Smooth Animations** - Subtle, purposeful animations throughout
- **3D Elements** - Interactive shader background for depth
- **Clear Hierarchy** - Easy-to-scan information architecture
- **Mobile-First** - Fully responsive design

## Customization

Colors, spacing, and animations can be customized through Tailwind CSS classes and the theme configuration in `tailwind.config.js`.

---

Built with attention to detail and production-ready quality.
