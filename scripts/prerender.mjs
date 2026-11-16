// Turns the client build (dist/) and the server build (dist-ssr/) into static pages,
// then writes 404.html, sitemap.xml and robots.txt and checks every internal link.

import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const DIST = 'dist'
const SITE = 'https://endrits.com'

const { render, routes } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)

// Preload the two Latin font files so headings don't visibly swap fonts on first paint.
const fonts = (await fs.readdir(path.join(DIST, 'assets'))).filter((f) =>
  /^(newsreader|instrument-sans)-latin-wght-normal-.+\.woff2$/.test(f),
)
const preloads = fonts
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join('\n    ')
const template = (await fs.readFile(path.join(DIST, 'index.html'), 'utf8')).replace(
  '<!--app-head-->',
  `<!--app-head-->\n    ${preloads}`,
)

function page(result) {
  return template.replace('<!--app-head-->', result.head).replace('<!--app-html-->', result.html)
}

const written = new Map()

for (const route of routes) {
  const result = render(route.path)
  if (result.status !== 200) throw new Error(`${route.path} rendered with status ${result.status}`)
  const file = path.join(DIST, route.path, 'index.html')
  await fs.mkdir(path.dirname(file), { recursive: true })
  const html = page(result)
  await fs.writeFile(file, html)
  written.set(route.path, html)
}

const notFound = render('/this-page-does-not-exist/')
await fs.writeFile(path.join(DIST, '404.html'), page(notFound))
written.set('/404.html', page(notFound))

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .filter((r) => !r.noindex)
  .map((r) => `  <url><loc>${SITE}${r.path}</loc><lastmod>${today}</lastmod></url>`)
await fs.writeFile(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
await fs.writeFile(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)

// Link check: every internal href/src must resolve to a built file, and every #fragment to an id.
const ids = new Map([...written].map(([p, html]) => [p, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]))
const problems = []

for (const [from, html] of written) {
  const refs = [
    ...html.matchAll(/\s(?:href|src)="([^"]+)"/g),
    ...html.matchAll(/\s(?:srcset|imagesrcset)="([^"]+)"/g),
  ].flatMap((m) => (/srcset/.test(m[0]) ? m[1].split(',').map((s) => s.trim().split(/\s+/)[0]) : [m[1]]))
  // Absolute URLs on this site (canonical, og:image) must also exist in the build.
  for (const m of html.matchAll(/\s(?:href|content)="https:\/\/endrits\.com(\/[^"]*)"/g)) refs.push(m[1])
  for (const ref of refs) {
    if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue
    const [target, fragment] = ref.split('#')
    const targetPath = target === '' ? from : target
    if (!targetPath.startsWith('/')) {
      problems.push(`${from}: relative link "${ref}"`)
      continue
    }
    if (targetPath.endsWith('/')) {
      if (!written.has(targetPath)) problems.push(`${from}: broken link "${ref}"`)
    } else {
      try {
        await fs.access(path.join(DIST, targetPath))
      } catch {
        problems.push(`${from}: missing file "${ref}"`)
      }
    }
    if (fragment && ids.has(targetPath) && !ids.get(targetPath).has(fragment)) {
      problems.push(`${from}: no element with id "${fragment}" on ${targetPath}`)
    }
  }
}

await fs.rm('dist-ssr', { recursive: true, force: true })

if (problems.length) {
  console.error(`Link check failed:\n  ${problems.join('\n  ')}`)
  process.exit(1)
}

console.log(`prerender: ${routes.length} pages + 404, sitemap and robots written; all internal links resolve`)
