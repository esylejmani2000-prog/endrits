import { ArrowRight } from 'lucide-react'
import { getMedia } from '../media'
import type { Project } from '../types'
import { Highlights } from './Highlights'
import { Picture } from './Picture'

export function ProjectCover({ project }: { project: Project }) {
  const cover = getMedia(project.cover)
  if (cover) {
    return <Picture img={cover} sizes="(min-width: 60rem) 44rem, (min-width: 52rem) 50vw, 100vw" cover />
  }
  const flow = project.sections.find((s) => s.flow)?.flow
  return (
    <div className="cover-text" aria-hidden="true">
      {flow ? (
        <ol>
          {flow.steps.map((step) => (
            <li key={step.title}>{step.title}</li>
          ))}
        </ol>
      ) : (
        <span />
      )}
      <p>{project.kicker.split(' · ')[0]}</p>
    </div>
  )
}

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const href = `/work/${project.slug}/`
  return (
    <article className="card">
      <div className="card-media">
        <ProjectCover project={project} />
      </div>
      <div className="card-body">
        <p className="eyebrow">{project.kicker}</p>
        <Heading>
          <a className="card-link" href={href}>
            {project.title}
          </a>
        </Heading>
        <p>{project.summary}</p>
        <Highlights items={project.highlights} />
        <dl className="card-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role.split('.')[0]}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status.split('.')[0]}</dd>
          </div>
        </dl>
        <span className="card-cta" aria-hidden="true">
          Read case study <ArrowRight />
        </span>
      </div>
    </article>
  )
}
