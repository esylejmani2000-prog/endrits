export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute -top-48 -left-40 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[140px] animate-blob" />
      <div className="absolute top-1/3 -right-48 h-[30rem] w-[30rem] rounded-full bg-[#1e3a5f]/60 blur-[140px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-gold/[0.07] blur-[140px] animate-blob [animation-delay:8s]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #f3eee4 1px, transparent 1px), linear-gradient(to bottom, #f3eee4 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  )
}
