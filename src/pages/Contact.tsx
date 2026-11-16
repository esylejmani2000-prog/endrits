import { contact } from '../../content/site'
import { ContactActions } from '../components/ContactBlock'

export function Contact() {
  return (
    <div className="container">
      <section className="page-head page-tall" aria-labelledby="contact-title">
        <div className="contact-block" style={{ paddingBlock: 0 }}>
          <p className="eyebrow">Contact</p>
          <h1 id="contact-title" className="title">
            {contact.heading}
          </h1>
          <p className="lede">{contact.text}</p>
          <ContactActions />
        </div>
      </section>
    </div>
  )
}
