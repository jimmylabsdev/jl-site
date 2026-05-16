import SectionHeader from '../components/SectionHeader.jsx'

const cards = [
  ['Who we work with', 'Founders, operations leaders, RevOps teams, business systems leaders, and enterprise buyers.'],
  ['How we engage',    'Scoped advisory, architecture, and full build engagements. Typical pilots ship in 6–10 weeks.'],
  ["What we don't do", "Generic chatbots. Marketing-only automations. AI-flavored demoware that doesn't survive contact with operations."],
  ['Our posture',      'Model-agnostic, platform-pragmatic, audit-aware. We document everything we ship.'],
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              num="07"
              eyebrow="About"
              title={<>Operational AI <span className="it">specialists</span>.</>}
              intro={null}
            />

            <p className="mt-8 text-[16px] leading-[1.65] text-ink/80 max-w-[480px]">
              Jimmy Labs is a boutique consultancy focused on the operational layer of AI — where models meet
              workflows, systems, and the messy reality of running a business.
            </p>
            <p className="mt-4 text-[16px] leading-[1.65] text-ink/80 max-w-[480px]">
              We work with founders, operations leaders, and enterprise teams to design AI-powered systems that
              integrate into existing tooling, hold up under audit, and measurably move operational metrics.
            </p>
            <p className="mt-4 text-[16px] leading-[1.65] text-ink/80 max-w-[480px]">
              Led by a founder with 20+ years in software delivery and engineering leadership, our practice is
              grounded in real implementations — not slides.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {cards.map(([k, v], i) => (
                <div key={k} className="reveal border-t hairline pt-5" style={{ '--d': `${i * 80}ms` }}>
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-2">
                    {`0${i + 1}`}
                  </div>
                  <h4 className="font-display text-[20px] tracking-tighter2 font-medium mb-2">{k}</h4>
                  <p className="text-[14.5px] leading-[1.6] text-ink/75">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
