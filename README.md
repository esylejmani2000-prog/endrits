# endrits.com

Personal site and product portfolio of Endrit Sylejmani.

Pages are written in React + TypeScript and rendered to static HTML at build
time with Vite. Visitors get plain HTML and CSS plus about 3 KB of JavaScript
for the mobile menu and copy-email button; the photo viewer (another 3 KB)
loads only on pages that have images. GitHub Pages hosts the result.

| URL | Page |
| --- | --- |
| `/` | Home: intro, selected work, short about, contact |
| `/work/` | All published case studies |
| `/work/seedpay/` | SeedPay case study |
| `/work/school-operations/` | School operations case study |
| `/about/` | Bio, timeline, recognition, languages |
| `/contact/` | Email and LinkedIn |

## Run it

Requires Node 22.18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173, pages rendered the same way as the build
npm run check      # lint + typecheck + production build (+ internal link check)
npm run preview    # serve the production build from dist/
```

`npm run build` resizes images, builds the client assets, renders every page
to `dist/`, writes `404.html`, `sitemap.xml` and `robots.txt`, and fails if any
internal link, image or `#anchor` doesn't resolve.

## Edit content

Everything you'd normally change lives in `content/`. Layout code reads from it.

| File | What it holds |
| --- | --- |
| `content/site.ts` | Name, email, LinkedIn, homepage copy, nav, contact text, résumé link |
| `content/work/*.ts` | One file per case study. `published: false` hides a project everywhere |
| `content/work/index.ts` | Project order on the homepage and Work page |
| `content/about.ts` | Bio, timeline, recognition, languages, photo gallery list |
| `content/media.ts` | Every image: file, alt text, caption, focal point |
| `content/media/` | Source image files |

To add a case study: copy `content/work/school-operations.ts`, change the slug,
fill in the sections, and add it to `content/work/index.ts`. Sections can hold
paragraphs, a (numbered) list, a small table, a step flow, and figures.

## Photos

Add a source file to `content/media/`, then describe it in `content/media.ts`.
On `npm run dev` or `npm run build` each image is resized to 480–2400 px AVIF
and WebP, and **all metadata (EXIF, GPS location, XMP, IPTC) is stripped**; the
build fails if any survives, or if an image's alt text is empty or starts with
"TODO". Width and height are recorded so pages never shift while images load.

Images the layout is ready for:

| Id | File to add | Used | Crop |
| --- | --- | --- | --- |
| `portrait` | `content/media/portrait.jpg` | Home hero, right column | 4:5, cropped around `focal` (default: centre, 30% from top). Use ≥1200 px wide. |
| `candid` | `content/media/candid.jpg` | Home About section and About page | 3:2 landscape, cropped around `focal`. Use ≥1600 px wide. Replace the TODO alt text. |
| gallery | any ids you add | About page, "Places along the way" | 4:3 tiles, opens in the viewer. Appears once 3 or more ids are listed in `about.gallery`. |

Without `portrait` the hero shows a "Now" panel instead; without `candid` the
About section shows a short facts list. Nothing breaks if a photo is missing.

`focal: { x, y }` is where the subject sits, from 0 to 1 measured from the top
left. Faces near the top of a tall photo want `y` around 0.25–0.35.

## Social preview

`public/og.png` (1200×630) is rendered from `scripts/og-template.html`.
Regenerate it with any Chrome/Chromium after editing the template:

```bash
chrome --headless --screenshot=public/og.png --window-size=1200,630 scripts/og-template.html
```

## Deploy and preview

- **Production**: pushing to `main` runs `.github/workflows/deploy.yml` and
  publishes `dist/` to GitHub Pages at endrits.com (`public/CNAME`).
- **Preview a branch without touching endrits.com**: every push to another
  branch or pull request runs `.github/workflows/check.yml`, which uploads the
  built site as the `site-preview` artifact. Download it from the workflow run,
  unzip, and serve it locally (`npx serve site-preview`). Or check out the
  branch and run `npm run build && npm run preview`.

GitHub Pages has no server-side redirects. Old homepage anchors from the
previous single-page site (`/#experience`, `/#education`, `/#honors`,
`/#skills`) are forwarded to the About page in the browser; `/#about` and
`/#contact` still exist on the homepage.

## Design tokens

All colours, glass settings, shadows, type sizes, spacing and motion durations
are custom properties at the top of `src/styles/main.css`. Glass is used only
for the floating nav, the mobile menu and the photo viewer controls, with a
solid fallback when `backdrop-filter` or transparency is unavailable. Motion
switches off under `prefers-reduced-motion`.
