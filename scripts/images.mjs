// Builds responsive images for every entry in content/media.ts whose source file exists.
// Output: public/media/<id>-<width>.{avif,webp} and src/generated/media-manifest.json.
// Metadata (EXIF, including GPS location, XMP, IPTC) is stripped from every output.

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { media } from '../content/media.ts'

const SRC = 'content/media'
const OUT = 'public/media'
const MANIFEST = 'src/generated/media-manifest.json'
const WIDTHS = [480, 800, 1200, 1600, 2400]

const exists = (p) => fs.access(p).then(() => true, () => false)

async function isFresh(output, sourceStat) {
  try {
    return (await fs.stat(output)).mtimeMs >= sourceStat.mtimeMs
  } catch {
    return false
  }
}

await fs.mkdir(OUT, { recursive: true })
await fs.mkdir(path.dirname(MANIFEST), { recursive: true })

const manifest = {}
const keep = new Set()
const skipped = []

for (const [id, entry] of Object.entries(media)) {
  const source = path.join(SRC, entry.file)
  if (!(await exists(source))) {
    skipped.push(`${id} (${source})`)
    continue
  }
  if (!entry.alt?.trim() || /^todo\b/i.test(entry.alt.trim())) {
    throw new Error(`content/media.ts: "${id}" needs real alt text before it can be published.`)
  }

  const sourceStat = await fs.stat(source)
  const meta = await sharp(source).metadata()
  const rotated = (meta.orientation ?? 1) >= 5
  const width = rotated ? meta.height : meta.width
  const height = rotated ? meta.width : meta.height

  const widths = [...new Set([...WIDTHS.filter((w) => w < width), Math.min(width, WIDTHS.at(-1))])]
  const variants = []
  for (const w of widths) {
    const base = `${id}-${w}`
    const avif = path.join(OUT, `${base}.avif`)
    const webp = path.join(OUT, `${base}.webp`)
    keep.add(avif).add(webp)
    if (!(await isFresh(avif, sourceStat)) || !(await isFresh(webp, sourceStat))) {
      const pipeline = sharp(source).rotate().resize({ width: w, withoutEnlargement: true })
      await pipeline.clone().avif({ quality: 58, effort: 5 }).toFile(avif)
      await pipeline.clone().webp({ quality: 80 }).toFile(webp)
      for (const file of [avif, webp]) {
        const out = await sharp(file).metadata()
        if (out.exif || out.xmp || out.iptc) throw new Error(`Metadata was not stripped from ${file}`)
      }
    }
    variants.push({ width: w, avif: `/media/${base}.avif`, webp: `/media/${base}.webp` })
  }
  const last = variants.at(-1)
  manifest[id] = { width: last.width, height: Math.round((height / width) * last.width), variants }
}

for (const file of await fs.readdir(OUT)) {
  const full = path.join(OUT, file)
  if (!keep.has(full)) await fs.rm(full)
}

await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')

console.log(`images: ${Object.keys(manifest).length} processed` + (skipped.length ? `, ${skipped.length} not added yet: ${skipped.join(', ')}` : ''))
