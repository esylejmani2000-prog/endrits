import type { ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { site } from '../content/site'
import { publishedProjects } from '../content/work'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { getMedia, largest, srcset } from './media'
import { About } from './pages/About'
import { CaseStudy } from './pages/CaseStudy'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Work, workIntro } from './pages/Work'
import type { PageMeta } from './types'

interface Route {
  meta: PageMeta
  view: () => ReactNode
  /** Image to preload because it renders above the fold. */
  preload?: string
}

const routeList: Route[] = [
  {
    meta: { path: '/', title: `${site.name} — Product builder`, description: site.defaultDescription },
    view: () => <Home />,
    preload: 'portrait',
  },
  {
    meta: { path: '/work/', title: `Work — ${site.name}`, description: workIntro },
    view: () => <Work />,
  },
  ...publishedProjects.map<Route>((project) => ({
    meta: {
      path: `/work/${project.slug}/`,
      title: `${project.seo.title} — ${site.name}`,
      description: project.seo.description,
      ogImage: getMedia(project.cover) ? largest(getMedia(project.cover)!).webp : undefined,
    },
    view: () => <CaseStudy project={project} />,
  })),
  {
    meta: {
      path: '/about/',
      title: `About — ${site.name}`,
      description: 'Background, timeline and recognition for Endrit Sylejmani, a product builder working across software, finance and school operations.',
    },
    view: () => <About />,
    preload: 'candid',
  },
  {
    meta: { path: '/contact/', title: `Contact — ${site.name}`, description: `How to reach ${site.name}: email and LinkedIn.` },
    view: () => <Contact />,
  },
]

const notFound: Route = {
  meta: { path: '/404.html', title: `Page not found — ${site.name}`, description: 'This page doesn’t exist.', noindex: true },
  view: () => <NotFound />,
}

export const routes = routeList.map((r) => r.meta)

function escape(text: string) {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderHead(route: Route) {
  const { meta } = route
  const canonical = site.url + meta.path
  const ogImage = site.url + (meta.ogImage ?? site.ogImage)
  const tags = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}">`,
    `<meta name="theme-color" content="#f6f3ee">`,
  ]
  if (meta.noindex) {
    tags.push('<meta name="robots" content="noindex">')
  } else {
    tags.push(
      `<link rel="canonical" href="${canonical}">`,
      `<meta property="og:type" content="${meta.path.startsWith('/work/') && meta.path !== '/work/' ? 'article' : 'website'}">`,
      `<meta property="og:site_name" content="${escape(site.name)}">`,
      `<meta property="og:locale" content="${site.locale}">`,
      `<meta property="og:title" content="${escape(meta.title)}">`,
      `<meta property="og:description" content="${escape(meta.description)}">`,
      `<meta property="og:url" content="${canonical}">`,
      `<meta property="og:image" content="${ogImage}">`,
      `<meta name="twitter:card" content="summary_large_image">`,
    )
  }
  const hero = route.preload ? getMedia(route.preload) : null
  if (hero) {
    tags.push(
      `<link rel="preload" as="image" type="image/avif" imagesrcset="${srcset(hero, 'avif')}" imagesizes="(min-width: 60rem) 30rem, 100vw" fetchpriority="high">`,
    )
  }
  if (meta.path === '/') {
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      url: site.url,
      email: `mailto:${site.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
      sameAs: [site.linkedin],
    }
    tags.push(`<script type="application/ld+json">${JSON.stringify(person)}</script>`)
  }
  return tags.join('\n    ')
}

function renderBody(route: Route) {
  return renderToStaticMarkup(
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header path={route.meta.path} />
      <main id="main" tabIndex={-1}>
        {route.view()}
      </main>
      <Footer />
    </>,
  )
}

export type RenderResult =
  | { status: 200 | 404; head: string; html: string }
  | { status: 301; location: string }

export function render(url: string): RenderResult {
  const path = new URL(url, site.url).pathname
  const route = routeList.find((r) => r.meta.path === path)
  if (route) return { status: 200, head: renderHead(route), html: renderBody(route) }
  // Mirror GitHub Pages: /work → /work/
  if (!path.endsWith('/') && routeList.some((r) => r.meta.path === `${path}/`)) {
    return { status: 301, location: `${path}/` }
  }
  return { status: 404, head: renderHead(notFound), html: renderBody(notFound) }
}
