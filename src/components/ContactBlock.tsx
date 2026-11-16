import { ArrowUpRight, Copy, FileText } from 'lucide-react'
import { contact, site } from '../../content/site'

export function ContactActions() {
  return (
    <>
      <a className="email-big" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <div className="actions">
        <button type="button" className="btn btn-primary needs-js" data-copy={site.email}>
          <Copy aria-hidden="true" /> Copy email address
        </button>
        <a className="btn btn-secondary" href={site.linkedin} rel="me noopener" target="_blank">
          LinkedIn <ArrowUpRight aria-hidden="true" />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        {site.resume ? (
          <a className="btn btn-secondary" href={site.resume}>
            <FileText aria-hidden="true" /> Résumé<span className="visually-hidden"> (PDF)</span>
          </a>
        ) : null}
      </div>
      <p className="copy-status" role="status" aria-live="polite" data-copy-status></p>
    </>
  )
}

/** Dark contact band used at the end of the homepage. */
export function ContactBand() {
  return (
    <section className="band on-dark" aria-labelledby="contact-heading" id="contact">
      <div className="container contact-block">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">{contact.heading}</h2>
        <p className="lede">{contact.text}</p>
        <ContactActions />
      </div>
    </section>
  )
}
