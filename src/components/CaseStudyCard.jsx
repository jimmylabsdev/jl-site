export default function CaseStudyCard({
  kicker,
  title,
  client,
  problem,
  architecture,
  outcomes,
  stack,
  diagram,
  reverse,
}) {
  return (
    <article className="reveal">
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className={`col-span-12 lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm">{kicker}</span>
          </div>
          <h3 className="font-display text-[30px] md:text-[40px] leading-[1.05] tracking-tighter2 font-light mb-3">
            {title}
          </h3>
          <p className="font-mono text-[11.5px] tracking-[0.1em] text-muted mb-6">{client}</p>

          <p className="text-[15.5px] leading-[1.6] text-ink/80 max-w-[640px] mb-8">
            <span className="font-display it text-accent mr-2">Problem.</span>
            {problem}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-8">
            {architecture.map(([k, v], i) => (
              <div key={i} className="border-t hairline pt-3">
                <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted">{k}</div>
                <div className="text-[14px] leading-snug mt-1.5 text-ink/90">{v}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {outcomes.map(([n, l], i) => (
              <div key={i} className="bg-paper border hairline rounded-sm p-4">
                <div className="font-display text-[28px] leading-none tracking-tighter2 text-accent">{n}</div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.08em] text-muted leading-tight">
                  {l}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {stack.map((s) => (
              <span key={s} className="text-[11.5px] font-mono px-2.5 py-1 border hairline rounded-full bg-paper">
                {s}
              </span>
            ))}
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 text-[13.5px] font-medium link-u">
            Request full case study
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </div>

        <div className={`col-span-12 lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>{diagram}</div>
      </div>
    </article>
  )
}
