import { BadgeCheck, Languages as LanguagesIcon } from 'lucide-react'
import { certifications, skills } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & Languages"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <h3 className="font-display text-lg font-semibold text-white">
                Top Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.top.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gradient-to-r from-[#863bff]/20 to-[#47bfff]/20 px-4 py-1.5 text-sm font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 font-display text-lg font-semibold text-white">
                Technical Toolkit
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.toolkit.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 flex items-center gap-2 font-display text-lg font-semibold text-white">
                <BadgeCheck size={18} className="text-[#a679ff]" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex gap-2 text-sm text-white/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#47bfff]" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                <LanguagesIcon size={18} className="text-[#a679ff]" />
                Languages
              </h3>
              <div className="mt-6 space-y-5">
                {skills.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-white">
                        {lang.name}
                      </span>
                      <span className="text-white/40">{lang.level}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#863bff] to-[#47bfff]"
                        style={{ width: `${lang.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
