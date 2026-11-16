import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data'
import Wordmark from './Wordmark'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#honors', label: 'Honors' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cream/10 bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-3 font-display text-xl text-cream"
        >
          <img
            src="/favicon.svg"
            alt=""
            className="h-9 w-9 rounded-[10px] ring-1 ring-gold/30"
          />
          <Wordmark className="hidden sm:inline" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            Say Hello
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream/10 bg-ink/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-cream/70 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="w-fit rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink"
            >
              Say Hello
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
