import { Cpu, Rocket, Sparkles, Wallet } from 'lucide-react'
import { pillars, profile } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ICONS = [Rocket, Wallet, Cpu, Sparkles]

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="The philosophy behind the work"
          description={profile.summary}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-[#863bff]/50 hover:bg-white/[0.06]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#863bff]/20 to-[#47bfff]/20 text-[#a679ff] transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
