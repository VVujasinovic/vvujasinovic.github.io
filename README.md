# Vladimir Vujasinovic - Portfolio

A dark, sophisticated portfolio website inspired by AngelList's design system. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Design Features

- **Dark Theme**: Deep charcoal/teal background (#001212) with muted lavender accents
- **AngelList-Inspired UI**: Pill-style badges, glassmorphism navigation, and clean cards with subtle borders
- **Ultra-Tight Typography**: Large headings with `tracking-tighter` for a modern, high-end feel
- **Glassmorphism Navigation**: Sticky navbar with backdrop blur and border effects
- **White CTA Buttons**: High-contrast rounded buttons with black text and hover effects
- **Smooth Animations**: Silky transitions and hover effects powered by Framer Motion
- **Responsive Gallery**: CSS Grid layout that adapts to mobile, tablet, and desktop
- **Lightbox Functionality**: Full-screen project view with backdrop blur
- **Staggered Load Animations**: Gallery items fade in sequentially
- **Mobile-First Design**: Fully responsive from small screens to large displays

## Color Palette

- **Primary Background**: `#001212` (Deep Charcoal/Dark Teal)
- **Obsidian Variant**: `#050505` (Pure Obsidian for sections)
- **Heading Text**: `#CCCCFF` (Muted Lavender)
- **Secondary Text**: `#D1D5DB` (Soft Blue-Gray)
- **Body Text**: `rgba(255, 255, 255, 0.7)` (Low-opacity White)
- **Buttons**: `#FFFFFF` (Solid White) with `#000000` (Black text)
- **Borders/Accents**: `border-white/10` for subtle card borders

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling with custom dark theme
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Modern icon library

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Glassmorphism navigation with backdrop blur
│   ├── Hero.tsx          # Large tight-kerning typography with pill badges
│   ├── Works.tsx         # Dark gallery with border cards and lightbox
│   ├── About.tsx         # Bio and services with dark theme
│   └── Contact.tsx       # White button CTAs and social links
├── App.tsx               # Main app component
├── index.css             # Tailwind imports and dark theme base styles
└── main.tsx              # React entry point
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Static files will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Update Project Data

Edit the `projects` array in [src/components/Works.tsx](src/components/Works.tsx):

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    category: 'Design',
    image: 'path/to/image.jpg',
  },
  // Add more projects...
];
```

### Update Hero Text

Edit the placeholder text in [src/components/Hero.tsx](src/components/Hero.tsx):

- Replace `[Discipline 1]` and `[Discipline 2]` with your specialties
- Customize the pill badge text and CTA button labels

### Update About Section

Edit [src/components/About.tsx](src/components/About.tsx):

- Update the bio paragraphs
- Modify the `services` array with your offerings
- Replace `[Field/Industry]` and `[Location]` placeholders

### Update Contact Information

Edit [src/components/Contact.tsx](src/components/Contact.tsx):

- Update email address (appears in 3 places)
- Update social media links (LinkedIn, Instagram)
- Modify the contact message

### Customize Colors

The site uses a custom dark color palette defined in [tailwind.config.js](tailwind.config.js):

```js
colors: {
  primary: {
    bg: '#001212',      // Deep charcoal/dark teal
    obsidian: '#050505', // Pure obsidian
  },
  accent: {
    lavender: '#CCCCFF', // Muted lavender
    blue: '#D1D5DB',     // Soft blue-gray
  },
}
```

### UI Component Patterns

**Pill Badges**: Semi-transparent backgrounds with borders
```jsx
className="bg-white/5 border border-white/10 px-4 py-2 rounded-full"
```

**White Buttons**: High-contrast CTAs with black text
```jsx
className="bg-white text-black px-8 py-4 rounded-full hover:bg-white/90"
```

**Card Borders**: Subtle borders on project cards
```jsx
className="border border-white/10 hover:border-white/20"
```

**Glassmorphism**: Navigation with backdrop blur
```jsx
className="bg-primary-bg/80 backdrop-blur-md border-b border-white/10"
```

## Deployment

This site is optimized for static hosting. Deploy the `dist/` folder to:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Import the repository or use Vercel CLI
- **GitHub Pages**: Push `dist/` contents to `gh-pages` branch
- **Any static host**: Upload `dist/` folder contents

## Animation Details

- **Hero Section**: Fade in with upward motion, pill badge appears first
- **Gallery Items**: Staggered fade-in animation (100ms delay between items)
- **Image Hover**: Subtle zoom effect (1.05x scale) with border color transition
- **Lightbox**: Fade in with scale animation, backdrop blur background
- **Navigation**: Slides down from top, glassmorphism effect on scroll
- **CTA Buttons**: Scale up on hover with shadow expansion
- **Scroll Behavior**: Smooth scrolling enabled globally

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Backdrop blur effects work best in Safari and modern Chrome/Firefox

## Design Inspiration

This portfolio is inspired by AngelList's dark, sophisticated design system featuring:
- Deep dark backgrounds with subtle color accents
- Pill-style badges and buttons
- Glassmorphism effects
- Ultra-tight typography (tracking-tighter)
- High contrast white CTAs

## License

This portfolio template is open source. Feel free to use and customize for your own portfolio.
