import { nav, site } from '../../content/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="footer-links" aria-label="Footer">
          {nav.slice(1).map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href={site.linkedin} rel="me noopener" target="_blank">
              LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
