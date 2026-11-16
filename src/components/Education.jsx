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
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#863bff]/20 to-[#47bfff]/20 text-[#a679ff]">
                  <GraduationCap size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {school.school}
                </h3>
                <p className="mt-1 text-sm text-white/60">{school.degree}</p>
                <p className="mt-2 text-xs text-white/40">{school.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
