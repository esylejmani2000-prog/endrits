// Progressive enhancements. Every page works without this script.

function initMenu() {
  const button = document.querySelector<HTMLButtonElement>('[data-menu-button]')
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]')
  const header = button?.closest<HTMLElement>('.site-header')
  if (!button || !panel || !header) return

  const isOpen = () => button.getAttribute('aria-expanded') === 'true'
  const setOpen = (open: boolean, returnFocus = false) => {
    button.setAttribute('aria-expanded', String(open))
    panel.hidden = !open
    if (!open && returnFocus) button.focus()
  }

  button.addEventListener('click', () => setOpen(!isOpen()))

  panel.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) setOpen(false)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      event.preventDefault()
      setOpen(false, true)
    }
  })

  document.addEventListener('click', (event) => {
    if (isOpen() && !header.contains(event.target as Node)) setOpen(false)
  })

  header.addEventListener('focusout', (event) => {
    const next = event.relatedTarget as Node | null
    if (isOpen() && next && !header.contains(next)) setOpen(false)
  })

  window.matchMedia('(min-width: 48rem)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false)
  })

  // A page restored from the back/forward cache should never come back with the menu open.
  window.addEventListener('pageshow', () => setOpen(false))
}

function initCopy() {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy]')) {
    const status = button.parentElement?.parentElement?.querySelector<HTMLElement>('[data-copy-status]')
    button.addEventListener('click', async () => {
      const value = button.dataset.copy ?? ''
      try {
        await navigator.clipboard.writeText(value)
        if (status) status.textContent = 'Email address copied.'
      } catch {
        if (status) status.textContent = `Couldn’t copy automatically. The address is ${value}.`
      }
    })
  }
}

// The previous single-page site used these anchors on the homepage.
const legacyAnchors: Record<string, string> = {
  '#experience': '/about/#timeline',
  '#education': '/about/#timeline',
  '#honors': '/about/#recognition',
  '#skills': '/about/',
}

function redirectLegacyAnchor() {
  if (location.pathname !== '/') return
  const target = legacyAnchors[location.hash]
  if (target) location.replace(target)
}

redirectLegacyAnchor()
initMenu()
initCopy()

if (document.querySelector('a[data-viewer]')) {
  import('./viewer').then(({ initViewer }) => initViewer())
}
