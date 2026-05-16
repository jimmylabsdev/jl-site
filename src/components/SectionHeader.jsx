export default function SectionHeader({ num, eyebrow, title, intro }) {
  return (
    <div className="reveal">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">{num}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">{eyebrow}</span>
      </div>
      <h2 className="font-display text-[40px] md:text-[56px] leading-[1] tracking-tightest font-light max-w-[820px]">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 max-w-[640px]">{intro}</p>
      )}
    </div>
  )
}
