# Beleqet Jobs — Next.js Frontend

Production-ready Next.js 14 (App Router) scaffold for the Beleqet Jobs platform, built from the
design system in `Beleqet_Design_Process_Pro.pdf` (colors, typography, layout) and the live
beleqet.com/vacancy reference.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — design tokens (colors, type scale) wired up in `tailwind.config.ts` and
  `app/globals.css`, matching the PDF's color system (`brandGreen #00653B`, etc.)
- **lucide-react** for icons

## Project structure

```
app/
  layout.tsx          Root layout, header/footer shell, metadata
  page.tsx             Homepage (Hero, stats, categories, featured jobs, why-choose, CTA)
  jobs/page.tsx         Job listing with search + category/type filters
  jobs/[id]/page.tsx     Job detail page (statically generated per job)
  about/, pricing/, contact/, cv-maker/, post-job/   Supporting pages
components/            Reusable UI: Header, Footer, Hero, JobCard, CategoryGrid, etc.
lib/mockData.ts         Mock jobs, categories, and stats — swap for real API calls
```

## Connecting real data

All job/category/stat data currently lives in `lib/mockData.ts`. To wire this to your backend:

1. Replace the static arrays with `fetch()` calls (e.g. in Server Components, fetch directly in
   `app/page.tsx` / `app/jobs/page.tsx`).
2. `app/jobs/[id]/page.tsx` uses `generateStaticParams()` for static generation — switch to
   `fetch` + `dynamic = "force-dynamic"` (or ISR via `revalidate`) once jobs come from a live API.
3. The search/filter logic in `components/JobsListing.tsx` is client-side over the mock array —
   move filtering server-side (query params → API call) once you have a real endpoint.

## Fonts

The layout currently uses a system font stack (`Segoe UI` / system-ui) because this sandbox
couldn't reach Google Fonts at build time. To use **Inter** as designed, in `app/layout.tsx`:

```tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400","500","600","700","800"] });
// add inter.variable to the <html> className
```

## Design tokens (from the design process PDF)

| Token | Hex |
|---|---|
| Brand Green | `#00653B` |
| Dark Green | `#015230` |
| Primary | `#041603` |
| Success | `#22C55E` |
| Cyan Accent | `#38BDF8` |
| Orange Accent | `#F97316` |
| Red Accent | `#EF4444` |
| Purple Accent | `#7C3AED` |
| Page BG | `#F5F7FA` |
| Border | `#E2E8F0` |
| Text (ink) | `#1E293B` |

## Build

```bash
npm run build
npm start
```

Build verified clean (22 static/SSG pages generated) at time of handoff.
