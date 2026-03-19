# WhiteStork Website

Marketing website for WhiteStork Software Solutions built with Next.js, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/                 App Router pages and global styles
components/          Shared UI and section components
constants/           Site content, themes, and page data
lib/                 Utilities
public/              Images, videos, icons, and static assets
```

## Main Pages

- `/` Home
- `/services`
- `/portfolio`
- `/about-us`
- `/contact-us`
- `/privacy-policy`
- `/terms-and-conditions`

## Theming

The site supports:

- light mode
- dark mode
- alternate brand themes from `constants/themes.ts`

Theme tokens are defined in [app/globals.css](/home/whitestork-123/Desktop/whitestork-website/app/globals.css). When building new sections, prefer existing CSS variables such as:

- `--background`
- `--card`
- `--brand-surface`
- `--brand-surface-strong`
- `--brand-border`
- `--brand-strong`
- `--brand-base`
- `--brand-muted`

Avoid hard-coded light-only colors when styling reusable sections.

## Content

Most page copy and structured content live in:

- [constants/site-content.ts](/home/whitestork-123/Desktop/whitestork-website/constants/site-content.ts)
- [constants/about-content.ts](/home/whitestork-123/Desktop/whitestork-website/constants/about-content.ts)
- [constants/themes.ts](/home/whitestork-123/Desktop/whitestork-website/constants/themes.ts)

## UI Notes

- Shared section headings use `CommonSectionTitle`
- Shared layout width uses `Container`
- About page includes employee cards, celebration gallery, and work-vibe video carousel
- Portfolio page includes responsive project cards and mobile-friendly CTA layouts

## Quality Checks

Before shipping changes:

```bash
npm run lint
```

## Deployment

Build the production app with:

```bash
npm run build
```

Then run:

```bash
npm run start
```
