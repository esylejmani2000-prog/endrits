import { publishedProjects } from '../../content/work'
import { ProjectCard } from '../components/ProjectCard'

export const workIntro =
  'Case studies from product, finance and school-operations work. Each one starts with what it is, my role and where it stands.'

export function Work() {
  return (
    <div className="container">
      <header className="page-head">
        <p className="eyebrow">Work</p>
        <h1 className="title">Selected work</h1>
        <p className="lede">{workIntro}</p>
      </header>
      <ul className="cards cards-wide" style={{ paddingBottom: 'var(--space-8)' }}>
        {publishedProjects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} headingLevel={2} />
          </li>
        ))}
      </ul>
    </div>
  )
}
