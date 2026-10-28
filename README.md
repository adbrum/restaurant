# restaurant

A restaurant website built with Next.js 13 (App Router) and Tailwind CSS. It presents the restaurant, its owners and an intro video, and a full food and drinks menu organised by category.

## Features

- Home page with banner, intro video, exclusive items, categories and owners sections
- Menu pages for appetizers, grilled dishes, specialties, dishes of the day, desserts, digestives, drinks and wines (green, red, rosé and white)
- Shared header and footer components
- Styling with Tailwind CSS and PostCSS

## Tech stack

Next.js 13.4, React 18, Tailwind CSS 3, jQuery, ESLint.

## Getting started

Requirements: Node.js 16.8 or later and npm or yarn.

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The page updates as you edit files under `app/`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

| Path | Purpose |
|---|---|
| `app/page.js`, `app/layout.js` | Home page and root layout |
| `app/components/` | Page sections (`Banner`, `Header`, `Footer`, `Owners`, `IntroVideo` and others) and one folder per menu category |
| `app/styles/`, `app/globals.css` | Styles |
| `public/` | Static assets |
