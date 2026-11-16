// Photo viewer built on <dialog>: the browser handles focus containment, Escape and
// the inert page behind it. Opening adds a history entry so Back closes the viewer.

const icon = (path: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`

const ICONS = {
  close: icon('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
  prev: icon('<path d="m15 18-6-6 6-6"/>'),
  next: icon('<path d="m9 18 6-6-6-6"/>'),
}

export function initViewer() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-viewer]'))
  if (!links.length) return

  const dialog = document.createElement('dialog')
  dialog.className = 'viewer'
  dialog.setAttribute('aria-label', 'Image viewer')
  dialog.innerHTML = `
    <div class="viewer-bar">
      <p class="viewer-count glass-dark" aria-live="polite"></p>
      <button type="button" class="viewer-btn glass-dark" data-close aria-label="Close viewer">${ICONS.close}</button>
    </div>
    <div class="viewer-stage"><picture>
      <source type="image/avif" sizes="100vw">
      <source type="image/webp" sizes="100vw">
      <img alt="">
    </picture></div>
    <div class="viewer-foot">
      <button type="button" class="viewer-btn glass-dark" data-prev aria-label="Previous image">${ICONS.prev}</button>
      <p class="viewer-caption"></p>
      <button type="button" class="viewer-btn glass-dark" data-next aria-label="Next image">${ICONS.next}</button>
    </div>`
  document.body.append(dialog)

  const [avif, webp] = Array.from(dialog.querySelectorAll('source'))
  const img = dialog.querySelector('img')!
  const count = dialog.querySelector<HTMLElement>('.viewer-count')!
  const caption = dialog.querySelector<HTMLElement>('.viewer-caption')!
  const stage = dialog.querySelector<HTMLElement>('.viewer-stage')!
  const prev = dialog.querySelector<HTMLButtonElement>('[data-prev]')!
  const next = dialog.querySelector<HTMLButtonElement>('[data-next]')!
  const close = dialog.querySelector<HTMLButtonElement>('[data-close]')!

  let items: HTMLAnchorElement[] = []
  let index = 0
  let opener: HTMLAnchorElement | null = null
  let pushedState = false

  function show(i: number) {
    index = Math.max(0, Math.min(items.length - 1, i))
    const link = items[index]
    avif.srcset = link.dataset.avif ?? ''
    webp.srcset = link.dataset.webp ?? ''
    img.src = link.href
    img.alt = link.dataset.alt ?? ''
    img.width = Number(link.dataset.width)
    img.height = Number(link.dataset.height)
    // srcset with sizes="100vw" would otherwise scale small screenshots up to the window width.
    img.style.width = `${link.dataset.width}px`
    caption.textContent = link.dataset.caption ?? ''
    const many = items.length > 1
    count.hidden = !many
    count.textContent = many ? `${index + 1} of ${items.length}` : ''
    prev.hidden = next.hidden = !many
    prev.disabled = index === 0
    next.disabled = index === items.length - 1
    // Restart the entrance animation for each image.
    img.style.animation = 'none'
    void img.offsetWidth
    img.style.animation = ''
  }

  function open(link: HTMLAnchorElement) {
    opener = link
    items = links.filter((l) => l.dataset.viewer === link.dataset.viewer)
    show(items.indexOf(link))
    dialog.showModal()
    close.focus()
    history.pushState({ viewer: true }, '')
    pushedState = true
  }

  function requestClose() {
    if (dialog.open) dialog.close()
  }

  for (const link of links) {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
      event.preventDefault()
      open(link)
    })
  }

  dialog.addEventListener('close', () => {
    if (pushedState) {
      pushedState = false
      history.back()
    }
    opener?.focus()
  })

  window.addEventListener('popstate', () => {
    if (dialog.open) {
      pushedState = false
      dialog.close()
    }
  })

  close.addEventListener('click', requestClose)
  prev.addEventListener('click', () => show(index - 1))
  next.addEventListener('click', () => show(index + 1))

  stage.addEventListener('click', (event) => {
    if (event.target === stage) requestClose()
  })

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1)
    if (event.key === 'ArrowRight') show(index + 1)
  })

  let startX: number | null = null
  stage.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') startX = event.clientX
  })
  stage.addEventListener('pointerup', (event) => {
    if (startX === null) return
    const dx = event.clientX - startX
    startX = null
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1))
  })
}
