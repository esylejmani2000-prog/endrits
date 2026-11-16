export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05050b]">
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-[#7e14ff]/25 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#47bfff]/20 blur-[120px] animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[#863bff]/20 blur-[120px] animate-blob [animation-delay:6s]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05050b]" />
    </div>
  )
}
