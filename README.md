# Payload CMS Landing Page MVP

A modern landing page built with **Angular 21** frontend backed by **Payload CMS 3** for content management.

## Architecture

```
payload-lp-mvp/
├── backend/          # Payload CMS 3 (Next.js App Router)
│   ├── src/
│   │   ├── app/      # Next.js app routes (admin + API)
│   │   └── collections/  # Pages, Media, Users
│   └── payload.config.ts
└── frontend/         # Angular 21 Standalone App
    └── src/
        ├── app/
        │   ├── pages/landing/  # Landing page component
        │   └── services/       # Payload API service
        └── environments/
```

## Getting Started

### Prerequisites

- Node.js >= 22
- MongoDB (running locally or via Atlas)
- npm

### 1. Start the Backend (Payload CMS)

```bash
cd backend
npm install
npm run dev
```

The admin panel will be available at **http://localhost:3000/admin**

### 2. Start the Frontend (Angular)

```bash
cd frontend
npm install
npm start
```

The landing page will be available at **http://localhost:4200**

### 3. Create Your First Page

1. Go to http://localhost:3000/admin
2. Create an admin account
3. Create a new Page with slug `home`
4. Add sections (Hero, Features, CTA) and publish

## Content Model

### Pages Collection
- **Title** — Page title
- **Slug** — URL-friendly identifier (e.g., "home", "about")
- **Meta Description** — SEO description
- **Sections** — Flexible blocks:
  - **Hero** — Headline, subheadline, CTA, background image
  - **Features** — Section title + feature cards with icons
  - **CTA** — Call-to-action with configurable background
  - **Rich Text** — Formatted content

### Media Collection
- Image uploads with automatic thumbnail and hero size generation

## API Endpoints

The Payload REST API is available at:

- `GET /api/pages` — List all pages
- `GET /api/pages?where[slug][equals]=home` — Get page by slug
- `GET /api/media` — List media assets

## Tech Stack

- **Frontend**: Angular 21, TypeScript, SCSS, RxJS
- **Backend**: Payload CMS 3, Next.js 15, MongoDB
- **Editor**: Lexical Rich Text
