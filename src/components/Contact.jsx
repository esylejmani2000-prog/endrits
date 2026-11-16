import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#863bff]/15 via-white/[0.03] to-[#47bfff]/15 p-10 text-center backdrop-blur sm:p-16">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7e14ff]/30 blur-[100px]" />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a679ff]">
                Get in touch
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s build with AI together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Whether it&apos;s product strategy, AI systems, or scaling an
                operation from zero to one — I&apos;m always up for a
                conversation.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#05050b] transition-transform hover:scale-105"
                >
                  <Mail size={16} />
                  {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Connect on LinkedIn
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
