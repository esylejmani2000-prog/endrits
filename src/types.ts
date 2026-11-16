export type MediaId = string

export interface MediaEntry {
  /** Source file in content/media/, e.g. "portrait.jpg". */
  file: string
  /** Describes what the image shows. Required for every published image. */
  alt: string
  caption?: string
  /** Where the subject sits, 0–1 from the top-left. Drives object-position when cropped. */
  focal?: { x: number; y: number }
  /** Screenshots get a frame and are never cropped. */
  kind?: 'photo' | 'screenshot'
}

export interface ResolvedMedia extends MediaEntry {
  id: MediaId
  width: number
  height: number
  /** Generated variants, smallest first. */
  variants: { width: number; avif: string; webp: string }[]
}

export interface Link {
  label: string
  href: string
}

export interface CaseStudySection {
  heading: string
  /** Paragraphs. */
  body?: string[]
  /** Points rendered after the body. */
  points?: { title?: string; text: string }[]
  /** Render points as a numbered list. */
  numbered?: boolean
  /** A small two-column table, e.g. a worked example. */
  table?: { caption: string; rows: [string, string, ('total' | 'sub')?][] }
  /** A simple step-by-step flow diagram. */
  flow?: { caption: string; steps: { title: string; text: string }[] }
  /** Media shown after the text, opened in the viewer when clicked. */
  figures?: MediaId[]
}

export interface Project {
  slug: string
  /** Unpublished projects build no page and never appear in lists or the sitemap. */
  published: boolean
  title: string
  /** One sentence: what it is. */
  summary: string
  role: string
  status: string
  timeframe: string
  context?: string
  cover?: MediaId
  /** Short label shown on cards, e.g. "School finance · Product". */
  kicker: string
  sections: CaseStudySection[]
  /** Kept with unpublished drafts so the gap is explicit. */
  missing?: string[]
  seo: { title: string; description: string }
}

export interface TimelineEntry {
  period: string
  title: string
  org: string
  place?: string
  text?: string
}

export interface PageMeta {
  title: string
  description: string
  path: string
  ogImage?: string
  noindex?: boolean
}
