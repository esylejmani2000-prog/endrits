import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience"
          description="From chemistry olympiads in Pristina to product strategy in the Bay Area — a decade of building, scaling, and shipping."
        />

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-gold via-cream/15 to-transparent sm:left-6" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.org}-${job.period}`} delay={Math.min(i * 60, 360)}>
                <div className="relative pl-12 sm:pl-20">
                  <div
                    className={`absolute left-0 top-0.5 flex h-10 w-10 items-center justify-center rounded-full border sm:h-12 sm:w-12 ${
                      job.highlight
                        ? 'border-gold bg-gradient-to-br from-gold to-gold-soft text-ink shadow-lg shadow-gold/30'
                        : 'border-cream/15 bg-ink-deep text-cream/50'
                    }`}
                  >
                    <Briefcase size={16} />
                  </div>

                  <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur transition-colors hover:border-cream/20">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-cream">
                        {job.org}
                      </h3>
                      <span className="rounded-full border border-cream/10 bg-cream/5 px-3 py-1 text-xs text-cream/60">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gold">
                      {job.role}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-cream/40">
                      <MapPin size={12} />
                      {job.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-cream/60"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-soft" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
