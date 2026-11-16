import type { Project } from '../types'

export function Highlights({ items }: { items: Project['highlights'] }) {
  if (!items?.length) return null
  return (
    <ul className="highlights">
      {items.map((item) => (
        <li key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  )
}
