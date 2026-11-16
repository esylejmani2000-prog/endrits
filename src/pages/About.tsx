import { ArrowRight } from 'lucide-react'
import { about } from '../../content/about'
import { Picture, ViewerFigure } from '../components/Picture'
import { getMedia } from '../media'

export function About() {
  const candid = getMedia('candid')
  const gallery = about.gallery.map(getMedia).filter((m) => m !== null)

  return (
    <div className="container">
      <header className="page-head">
        <div className={candid ? 'split split-reverse' : undefined}>
          <div className="prose" style={{ gap: 'var(--space-5)' }}>
            <p className="eyebrow">About</p>
            <h1 className="title">Endrit Sylejmani</h1>
            <p className="lede">{about.intro}</p>
            {about.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {candid ? (
            <figure className="photo">
              <Picture img={candid} sizes="(min-width: 60rem) 30rem, 100vw" priority cover />
            </figure>
          ) : null}
        </div>
      </header>

      <section className="section" aria-labelledby="timeline">
        <div className="section-head">
          <h2 id="timeline">Timeline</h2>
        </div>
        <ol className="timeline">
          {about.timeline.map((entry) => (
            <li key={`${entry.period}-${entry.title}`}>
              <p className="period">{entry.period}</p>
              <div>
                <h3>{entry.title}</h3>
                <p className="org">
                  {entry.org}
                  {entry.place ? <span className="muted"> · {entry.place}</span> : null}
                </p>
                {entry.text ? <p className="note">{entry.text}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {gallery.length >= 3 ? (
        <section className="section" aria-labelledby="places">
          <div className="section-head">
            <h2 id="places">{about.galleryHeading}</h2>
          </div>
          <ul className="gallery">
            {gallery.map((img) => (
              <li key={img.id}>
                <ViewerFigure img={img} group="gallery" sizes="(min-width: 60rem) 24rem, (min-width: 32rem) 50vw, 100vw" />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="section" aria-labelledby="recognition">
        <div className="section-head">
          <h2 id="recognition">Recognition</h2>
        </div>
        <ul className="recognition">
          {about.recognition.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="languages">
        <div className="section-head">
          <h2 id="languages">Languages</h2>
        </div>
        <ul className="inline-list">
          {about.languages.map((lang) => (
            <li key={lang.name}>
              {lang.name} <span>· {lang.level}</span>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 'var(--space-7)' }}>
          <a className="arrow-link" href="/contact/">
            Get in touch <ArrowRight aria-hidden="true" />
          </a>
        </p>
      </section>
    </div>
  )
}
