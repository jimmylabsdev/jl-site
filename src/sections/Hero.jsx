import HeroDiagram from '../components/diagrams/HeroDiagram.jsx'

function CornerMarks() {
  const Mark = ({ className }) => (
    <svg className={`absolute ${className}`} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M9 1 V17 M1 9 H17" stroke="#0F1614" strokeWidth="0.8" opacity="0.5" />
    </svg>
  )
  return (
    <>
      <Mark className="top-24 left-6 md:left-10" />
      <Mark className="top-24 right-6 md:right-10" />
    </>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-60" aria-hidden="true" />
      <CornerMarks />

      <div className="relative max-w-page mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <div className="reveal stagger" style={{ '--d': '0ms' }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="relative inline-flex">
                  <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  <span className="relative w-2 h-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
                  Boutique operational AI consultancy
                </span>
              </div>
            </div>

            <h1
              className="reveal font-display text-[44px] sm:text-[58px] lg:text-[78px] leading-[0.97] tracking-tightest font-light"
              style={{ '--d': '80ms' }}
            >
              Operational AI<br />
              <span className="it font-normal">&amp;</span> workflow<br />
              automation <span className="text-accent">systems</span>.
            </h1>

            <p className="reveal mt-8 max-w-[520px] text-[16.5px] leading-[1.6] text-ink/75" style={{ '--d': '180ms' }}>
              Jimmy Labs helps modern businesses modernize operations through AI workflow architecture,
              operational AI systems, workflow orchestration, and enterprise automation — built to run inside
              real business environments.
            </p>

            <div className="reveal mt-10 flex flex-wrap items-center gap-3" style={{ '--d': '260ms' }}>
              <a
                href="#contact"
                className="btn-primary text-[13.5px] px-5 py-3 inline-flex items-center gap-2"
              >
                Book consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
              <a
                href="#case-studies"
                className="btn-ghost text-[13.5px] px-5 py-3 inline-flex items-center gap-2"
              >
                View case studies
              </a>
            </div>

            <div className="reveal mt-14 grid grid-cols-3 gap-6 max-w-[560px]" style={{ '--d': '360ms' }}>
              {[
                ['20+ yrs', 'engineering & delivery leadership'],
                ['40%',     'avg. handle-time reduction · Legal'],
                ['60%',     'manual data entry eliminated · Accounting'],
              ].map(([k, v], i) => (
                <div key={i} className="border-t hairline pt-4">
                  <div className="font-display text-[26px] leading-none tracking-tighter2">{k}</div>
                  <div className="mt-2 text-[11.5px] leading-snug text-muted font-mono uppercase tracking-[0.08em]">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 reveal" style={{ '--d': '320ms' }}>
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
