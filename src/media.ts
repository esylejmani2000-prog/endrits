import { media } from '../content/media'
import manifest from './generated/media-manifest.json'
import type { ResolvedMedia } from './types'

type Manifest = Record<string, Omit<ResolvedMedia, 'id' | keyof (typeof media)[string]>>

const generated = manifest as unknown as Manifest

/** Returns the image only if its source file exists and was processed. */
export function getMedia(id: string | undefined): ResolvedMedia | null {
  if (!id) return null
  const entry = media[id]
  const built = generated[id]
  if (!entry || !built) return null
  return { id, ...entry, ...built }
}

export function largest(img: ResolvedMedia) {
  return img.variants[img.variants.length - 1]
}

export function srcset(img: ResolvedMedia, format: 'avif' | 'webp') {
  return img.variants.map((v) => `${v[format]} ${v.width}w`).join(', ')
}

export function objectPosition(img: ResolvedMedia) {
  const f = img.focal ?? { x: 0.5, y: 0.5 }
  return `${Math.round(f.x * 100)}% ${Math.round(f.y * 100)}%`
}
