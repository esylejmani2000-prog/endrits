import { ArrowDown, ArrowRight } from 'lucide-react'
import { about } from '../../content/about'
import { home, site } from '../../content/site'
import { publishedProjects } from '../../content/work'
import { ContactBand } from '../components/ContactBlock'
import { Picture } from '../components/Picture'
import { ProjectCard } from '../components/ProjectCard'
import { getMedia } from '../media'

export function Home() {
  const portrait = getMedia('portrait')
  const candid = getMedia('candid')
  const featured = publishedProjects.slice(0, 3)

  return (
    <>
      <div className="container">
        <section className={`hero${portrait ? ' has-portrait' : ''}`} aria-labelledby="hero-heading">
          <div className="hero-text">
            <p className="eyebrow">{home.eyebrow}</p>
            <h1 id="hero-heading" className="display">
              {home.headline}
            </h1>
            <p className="lede">{home.intro}</p>
            <div className="actions">
              <a className="btn btn-primary" href={home.primaryAction.href}>
                {home.primaryAction.label} <ArrowDown aria-hidden="true" />
              </a>
              <a className="btn btn-secondary" href={home.secondaryAction.href}>
                {home.secondaryAction.label}
              </a>
            </div>
            {portrait ? (
              <ul className="now-inline">
                {home.now.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {portrait ? (
            <div className="portrait">
              <Picture img={portrait} sizes="(min-width: 60rem) 30rem, 100vw" priority cover />
            </div>
          ) : (
            <aside className="now" aria-labelledby="now-heading">
              <h2 id="now-heading">Now</h2>
              <dl>
                {home.now.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <div className="section-head">
            <h2 id="work-heading">{home.workHeading}</h2>
            <a className="arrow-link" href="/work/">
              All work <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <ul className="cards">
            {featured.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="about" aria-labelledby="about-heading">
          <div className="split split-reverse">
            <div className="prose">
              <h2 id="about-heading">{home.aboutHeading}</h2>
              {home.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                <a className="arrow-link" href={home.aboutLink.href}>
                  {home.aboutLink.label} <ArrowRight aria-hidden="true" />
                </a>
              </p>
            </div>
            {candid ? (
              <figure className="photo">
                <Picture img={candid} sizes="(min-width: 60rem) 30rem, 100vw" cover />
              </figure>
            ) : (
              <dl className="facts">
                <div>
                  <dt>Based</dt>
                  <dd>{site.location}</dd>
                </div>
                <div>
                  <dt>Studied</dt>
                  <dd>Computer science (AI) and business, Minerva University</dd>
                </div>
                <div>
                  <dt>Works in</dt>
                  <dd>Product, school finance and operations</dd>
                </div>
                <div>
                  <dt>Speaks</dt>
                  <dd>{about.languages.filter((l) => l.level !== 'Elementary').map((l) => l.name).join(', ')}</dd>
                </div>
              </dl>
            )}
          </div>
        </section>
      </div>
      <ContactBand />
    </>
  )
}
