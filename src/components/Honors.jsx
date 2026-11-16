import { Award } from 'lucide-react'
import { honors } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Honors() {
  return (
    <section id="honors" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Recognition"
          title="Honors & Awards"
          description="Global competitions, presidential recognition, and academic distinction."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {honors.map((honor, i) => (
            <Reveal key={honor.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur transition-colors hover:border-gold-soft/50 hover:bg-cream/[0.06]">
                <Award
                  size={22}
                  className="text-gold-soft transition-transform group-hover:scale-110"
                />
                <h3 className="mt-4 font-display text-base font-semibold text-cream">
                  {honor.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {honor.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
