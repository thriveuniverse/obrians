# L'Antre - Website

A modern, welcoming website for LÁntre bar in Narbonne, France.

## Features
- **Next.js 15+** with App Router for fast performance.
- **Tailwind CSS 4** for premium, responsive styling.
- **Bilingual Support**: Easily switch between French and English.
- **Dynamic Content**: Managed via JSON files for easy editing.
- **Premium Design**: Playfair Display headings and Inter body text.

## How to Edit Content

### 1. Editing Text
All text content is located in the `src/locales/` directory:
- `en.json`: English text
- `fr.json`: French text

To update the "About" section or "History", simply edit the corresponding text in these files. Use `\n\n` for new paragraphs.

### 2. Updating the Menu
The menu items are defined in `src/app/restaurant/page.tsx` under the `menuSections` constant. You can easily add, remove, or change prices there.

### 3. Images
- **Logo**: Replace `public/logo.jpg` with a new file (keep the same name or update the reference in components).
- **Hero/Gallery Images**: Currently using Unsplash placeholders. Replace the URLs in the page files (`src/app/page.tsx`, etc.) with your own image paths in the `public/` folder.

## Deployment
This site is optimized for static hosting on **Netlify**.
1. Connect your GitHub repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next` (or let Netlify auto-detect Next.js)

## Maintenance
Since this is a static site with no backend, there are no databases or servers to maintain. It's built to last!

---
