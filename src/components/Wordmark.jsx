export default function Wordmark({ className = '' }) {
  return (
    <span aria-label="Endrit Sylejmani" role="img" className={className}>
      <span className="text-gold">€</span>ndrit{' '}
      <span className="text-gold">$</span>ylejmani
    </span>
  )
}
