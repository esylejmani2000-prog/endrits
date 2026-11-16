import { GraduationCap } from 'lucide-react'
import { education } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Foundation" title="Education" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {education.map((school, i) => (
            <Reveal key={school.school} delay={i * 100}>
              <div className="h-full rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur transition-colors hover:border-cream/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/25 text-gold">
                  <GraduationCap size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {school.school}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{school.degree}</p>
                <p className="mt-2 text-xs text-cream/40">{school.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
