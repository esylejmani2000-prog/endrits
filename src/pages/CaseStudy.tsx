import { ArrowLeft, ArrowRight } from 'lucide-react'
import { publishedProjects } from '../../content/work'
import { Highlights } from '../components/Highlights'
import { ViewerFigure } from '../components/Picture'
import { getMedia } from '../media'
import type { CaseStudySection, Project } from '../types'

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function Section({ section, group }: { section: CaseStudySection; group: string }) {
  const id = slugify(section.heading)
  const List = section.numbered ? 'ol' : 'ul'
  const figures = (section.figures ?? []).map(getMedia).filter((m) => m !== null)
  return (
    <section className="cs-section" aria-labelledby={id}>
      <h2 id={id}>{section.heading}</h2>
      <div className="cs-content">
        {section.body?.length ? (
          <div className="prose">
            {section.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ) : null}

        {section.points?.length ? (
          <List className="points">
            {section.points.map((point) => (
              <li key={point.text}>
                {point.title ? <strong>{point.title} </strong> : null}
                {point.text}
              </li>
            ))}
          </List>
        ) : null}

        {section.table ? (
          <div className="worked" role="region" aria-label="Worked example table" tabIndex={0}>
            <table>
              <caption>{section.table.caption}</caption>
              <tbody>
                {section.table.rows.map(([label, value, kind]) => (
                  <tr key={label} className={kind ? `row-${kind}` : undefined}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {section.flow ? (
          <figure className="flow">
            <ol>
              {section.flow.steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
            <figcaption>{section.flow.caption}</figcaption>
          </figure>
        ) : null}

        {figures.length ? (
          <div className="figures">
            {figures.map((img) => (
              <ViewerFigure key={img.id} img={img} group={group} sizes="(min-width: 64rem) 26rem, (min-width: 52rem) 45vw, 100vw" />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function CaseStudy({ project }: { project: Project }) {
  const cover = getMedia(project.cover)
  const index = publishedProjects.findIndex((p) => p.slug === project.slug)
  const next = publishedProjects.length > 1 ? publishedProjects[(index + 1) % publishedProjects.length] : null

  return (
    <article className="container">
      <header className="page-head cs-head">
        <div>
          <a className="back-link" href="/work/">
            <ArrowLeft aria-hidden="true" /> All work
          </a>
        </div>
        <p className="eyebrow">{project.kicker}</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <Highlights items={project.highlights} />
        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className="status-dot" aria-hidden="true" />
              {project.status}
            </dd>
          </div>
          <div>
            <dt>Timeframe</dt>
            <dd>{project.timeframe}</dd>
          </div>
          {project.context ? (
            <div>
              <dt>Context</dt>
              <dd>{project.context}</dd>
            </div>
          ) : null}
        </dl>
        {cover ? (
          <div className="cs-cover">
            <ViewerFigure img={cover} group="case-study" sizes="(min-width: 76rem) 76rem, 100vw" priority />
          </div>
        ) : null}
      </header>

      <div className="cs-sections">
        {project.sections.map((section) => (
          <Section key={section.heading} section={section} group="case-study" />
        ))}
      </div>

      <nav className="cs-next" aria-label="More work">
        {next ? (
          <a className="arrow-link" href={`/work/${next.slug}/`}>
            Next: {next.title} <ArrowRight aria-hidden="true" />
          </a>
        ) : null}
        <a className="arrow-link" href="/work/">
          <ArrowLeft aria-hidden="true" /> Back to all work
        </a>
      </nav>
    </article>
  )
}
