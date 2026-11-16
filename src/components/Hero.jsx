import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'
import Wordmark from './Wordmark'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-medium text-cream/70 backdrop-blur">
          <MapPin size={14} className="text-gold-soft" />
          {profile.location}
        </div>

        <p className="mt-10 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-cream/50">
          <span className="h-px w-12 bg-gold/70" />
          Hi, I&apos;m
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] text-cream sm:text-7xl lg:text-8xl">
          <Wordmark />
        </h1>

        <div className="mt-6 h-10 overflow-hidden text-xl font-medium text-cream/80 sm:text-2xl">
          <div
            className="transition-transform duration-500 ease-out"
            style={{ transform: `translateY(-${roleIndex * 2.5}rem)` }}
          >
            {profile.roles.map((role) => (
              <div key={role} className="h-10 leading-10">
                {role}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/60">
          {profile.tagline} I build at the intersection of{' '}
          <span className="text-cream">Product Strategy</span> and{' '}
          <span className="text-cream">Artificial Intelligence</span> —
          turning complex customer pain points into scalable, high-impact
          systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-105"
          >
            <Mail size={16} />
            Get in touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/10"
          >
            View LinkedIn
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-cream/40 sm:flex"
      >
        Scroll
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
