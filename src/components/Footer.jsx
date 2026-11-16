import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
        <span>
          &copy; {new Date().getFullYear()} {profile.name}. Built with
          intent.
        </span>
        <span className="flex items-center gap-1">
          Designed &amp; engineered by {profile.name.split(' ')[0]}
        </span>
      </div>
    </footer>
  )
}
