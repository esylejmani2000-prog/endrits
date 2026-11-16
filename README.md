# Endrit Sylejmani — Personal Website

A single-page portfolio for Endrit Sylejmani (Product Manager, AI Systems
Architect, builder), built with React 19, Vite, and Tailwind CSS v4.
Deployed at [endrits.com](https://endrits.com).

## Sections

- **Hero** — rotating role titles and a quick intro
- **About** — product philosophy and four core pillars of impact
- **Experience** — a timeline covering Horizon Leadership Academy, Minerva
  Project, SoftBank/Masason Foundation, Google CSRMP, and more
- **Honors & Awards** — including the Presidential Medal from Kosovo and
  Science Olympiad medals
- **Skills** — top skills, technical toolkit, certifications, and languages
- **Education** — Minerva University and prior schooling
- **Contact** — email and LinkedIn

All content lives in `src/data.js`, so updates don't require touching any
component markup.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploying to endrits.com

`public/CNAME` is set to `endrits.com` for GitHub Pages custom-domain
deploys. Point the domain's DNS at your hosting provider (GitHub Pages,
Vercel, Netlify, etc.) and build with `npm run build` — the output in
`dist/` is static and can be hosted anywhere.
