import { FileText, Menu, X } from 'lucide-react'
import { nav, site } from '../../content/site'

function isCurrent(href: string, path: string) {
  if (href === '/') return path === '/'
  return path.startsWith(href)
}

export function Header({ path }: { path: string }) {
  const links = nav.map((item) => ({ ...item, current: isCurrent(item.href, path) }))
  return (
    <header className="site-header">
      <div className="nav-bar glass">
        <a className="wordmark" href="/" aria-label={`${site.name}, home`}>
          <span className="mark" aria-hidden="true" />
          <span>{site.name}</span>
        </a>
        <nav aria-label="Main">
          <ul className="nav-links">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} aria-current={item.current ? 'page' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {site.resume ? (
          <a className="nav-resume" href={site.resume}>
            <FileText aria-hidden="true" /> Résumé<span className="visually-hidden"> (PDF)</span>
          </a>
        ) : null}
        <button
          type="button"
          className="menu-button"
          aria-expanded="false"
          aria-controls="menu-panel"
          data-menu-button
        >
          <Menu className="icon-open" aria-hidden="true" />
          <X className="icon-close" aria-hidden="true" />
          <span>Menu</span>
        </button>
      </div>
      <nav id="menu-panel" className="menu-panel glass" aria-label="Main" hidden data-menu-panel>
        <ul>
          {links.map((item) => (
            <li key={item.href}>
              <a href={item.href} aria-current={item.current ? 'page' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
          {site.resume ? (
            <li>
              <a href={site.resume} className="menu-secondary">
                Résumé <span className="muted">PDF</span>
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  )
}
