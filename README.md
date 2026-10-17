# Talaat Ramadan — Portfolio

Editorial-style personal portfolio for **Talaat Ramadan**, .NET Backend Developer
(Cairo · remote). Built with Next.js (App Router), Tailwind CSS v4 and TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Content** — all CV data (summary, skills, experience, projects, contact links)
  lives in `src/data/cv.ts`.
- **Photo** — replace `public/portrait.svg` with your own photo
  (e.g. `public/portrait.jpg`) and update the `src` in `src/components/portrait.tsx`.
- **CV download** — replace `public/CV.pdf` with the latest PDF.
- **Theme** — colors are CSS variables in `src/app/globals.css`
  (`.dark` / light). Toggle button persists the choice in `localStorage`.

## Scripts

| Command         | Effect               |
| --------------- | -------------------- |
| `npm run dev`   | Development server   |
| `npm run build` | Production build     |
| `npm run lint`  | ESLint               |
