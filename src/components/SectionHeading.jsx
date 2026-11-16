import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-cream/60">{description}</p>
      )}
    </Reveal>
  )
}
