import { Expand } from 'lucide-react'
import { largest, objectPosition, srcset } from '../media'
import type { ResolvedMedia } from '../types'

interface PictureProps {
  img: ResolvedMedia
  sizes: string
  /** Above-the-fold images load immediately with high priority. */
  priority?: boolean
  cover?: boolean
}

export function Picture({ img, sizes, priority = false, cover = false }: PictureProps) {
  const fallback = largest(img)
  return (
    <picture>
      <source type="image/avif" srcSet={srcset(img, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcset(img, 'webp')} sizes={sizes} />
      <img
        src={fallback.webp}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        style={cover ? { objectPosition: objectPosition(img) } : undefined}
      />
    </picture>
  )
}

interface FigureProps {
  img: ResolvedMedia
  sizes: string
  group: string
  priority?: boolean
  showCaption?: boolean
}

/** A figure that opens in the photo viewer; without JavaScript the link opens the full image. */
export function ViewerFigure({ img, sizes, group, priority, showCaption = true }: FigureProps) {
  const full = largest(img)
  const screenshot = img.kind === 'screenshot'
  return (
    <figure className="figure">
      <a
        className={`frame${screenshot ? ' frame-screenshot' : ''}`}
        href={full.webp}
        data-viewer={group}
        data-caption={img.caption ?? ''}
        data-avif={srcset(img, 'avif')}
        data-webp={srcset(img, 'webp')}
        data-alt={img.alt}
        data-width={img.width}
        data-height={img.height}
        aria-label={`Open larger image: ${img.alt}`}
      >
        <Picture img={img} sizes={sizes} priority={priority} />
        <span className="zoom-hint glass-dark" aria-hidden="true">
          <Expand /> View
        </span>
      </a>
      {showCaption && img.caption ? <figcaption>{img.caption}</figcaption> : null}
    </figure>
  )
}
