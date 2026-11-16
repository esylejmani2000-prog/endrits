import { ArrowRight } from 'lucide-react'

export function NotFound() {
  return (
    <div className="container">
      <section className="page-head page-tall" aria-labelledby="nf-title">
        <p className="eyebrow">404</p>
        <h1 id="nf-title" className="title">
          This page doesn’t exist.
        </h1>
        <p className="lede">The link may be old, or the address may have a typo.</p>
        <div className="actions" style={{ marginTop: 'var(--space-6)' }}>
          <a className="btn btn-primary" href="/">
            Go to the homepage
          </a>
          <a className="btn btn-secondary" href="/work/">
            See my work <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  )
}
