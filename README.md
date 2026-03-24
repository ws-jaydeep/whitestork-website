# WhiteStork Website

Marketing website for WhiteStork Software Solutions built with Next.js, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Base UI
- Framer Motion
- GSAP (with ScrollTrigger, SplitText)
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
components/
  animations/        React Bits components (SplitText, SpotlightCard, BlurText, etc.)
  layout/            Header and Footer
  sections/          Page-specific section components
  shared/            Reusable components (Container, AnimatedBackground, SectionReveal, etc.)
  ui/                Base UI components (MotionButton, Tabs, Select, etc.)
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
- `404` Not Found (animated)

## Theming

The site supports:

- light mode
- dark mode
- alternate brand themes: `ocean` (default), `forest`, `sunset`, `rose`, `violet`, `slate`

Themes are defined in `constants/themes.ts` and token values live in `app/globals.css`.

### Token-Based CSS

All styles must use CSS tokens — never hardcode colors. Available tokens:

**Brand**
- `--brand-strong` — primary text / headings
- `--brand-base` — primary accent color
- `--brand-soft` — lighter accent
- `--brand-muted` — secondary text
- `--brand-border` — default border
- `--brand-border-strong` — emphasized border
- `--brand-surface` — translucent surface
- `--brand-surface-strong` — solid surface
- `--brand-shadow` — default shadow
- `--brand-shadow-strong` — elevated shadow

**Layout**
- `--background` — page background (transparent, rendered by `AnimatedBackground`)
- `--card` — card / panel background
- `--foreground` — body text

**Component tokens**
- `--header-surface`, `--footer-surface`, `--footer-border`
- `--social-surface`, `--social-border`, `--social-color`
- `--social-hover-surface`, `--social-hover-border`, `--social-hover-color`, `--social-hover-shadow`
- `--cta-gradient-start`, `--cta-gradient-end`, `--cta-gradient-hover-start`, `--cta-gradient-hover-end`, `--cta-shadow`
- `--page-header-surface`, `--page-header-border`, `--page-header-glow`
- `--hero-chip-surface`, `--hero-chip-border`, `--hero-chip-shadow`

**Radius & spacing**
- `--theme-shell-radius` — header/footer pill radius
- `--theme-panel-radius` — card/panel radius
- `--theme-card-radius` — inner card radius
- `--theme-control-radius` — button/input radius
- `--theme-blur` — backdrop blur amount
- `--theme-heading-spacing` — letter spacing for headings

> Never use hardcoded hex values or `rgba()` with raw numbers. Use `color-mix(in srgb, var(--token) X%, transparent)` for opacity variants.

## Animated Background

A global `AnimatedBackground` component is mounted in `app/layout.tsx` as a `fixed` layer behind all content. It renders:

- A base page color layer (light/dark aware)
- A subtle dot grid with radial vignette
- Three drifting glow orbs
- 16 floating particles

All colors use CSS tokens so it adapts to every theme automatically. The `<main>` and `<footer>` use `relative z-10` to render above it.

## Reusable Animation Components (React Bits)

Located in `components/animations/`:

| Component | Description |
|---|---|
| `BlurText` | Word/char blur-in animation |
| `SplitText` | GSAP-powered char/word/line split animation |
| `SpotlightCard` | Mouse-following spotlight glow card |
| `TextType` | Typewriter effect |
| `CountUp` | Animated number counter |
| `ScrollVelocity` | Scroll-speed marquee |

## Key Components

- `AnimatedBackground` — global fixed animated background (`components/shared/animated-background.tsx`)
- `CommonSectionTitle` — shared section heading with highlight support
- `Container` — layout width wrapper (`default`, `wide`, `full`)
- `SectionReveal` — scroll-triggered fade/slide reveal wrapper
- `MotionButton` — animated CTA button with expanding circle effect
- `UiSelect` — Base UI powered mobile select menu (`components/ui/select.tsx`)
- `ScrollToTopButton` — fixed scroll-to-top with hover fill animation

## Services Page

On mobile (`< lg`), the vertical tab sidebar is replaced with a Base UI powered select menu via `UiSelect`. On desktop, the original vertical tab list is shown.

The swipe / wheel based service switching logic is only applied on desktop-sized screens so interactive mobile controls can open normally.

## 404 Page

Animated not-found page using:
- `SplitText` for char-by-char heading animation
- `SpotlightCard` for the content card with mouse spotlight
- Framer Motion for floating 404 number, gradient divider, and staggered reveals

## Content

Most page copy and structured content live in:

- `constants/about-content.ts`
- `constants/services-content.ts`
- `constants/home-content.ts`
- `constants/header-footer-content.ts`
- `constants/themes.ts`

## Quality Checks

Before shipping changes:

```bash
npm run lint
```

Ensure:
- No hardcoded colors — use CSS tokens only
- All new sections use `var(--background)`, `var(--card)`, `var(--brand-*)` tokens
- `AnimatedBackground` shows through — avoid `bg-[var(--background)]` on section wrappers

## Deployment

```bash
npm run build
npm run start
```
