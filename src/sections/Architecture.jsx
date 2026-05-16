import SectionHeader from '../components/SectionHeader.jsx'
import BigArchDiagram from '../components/diagrams/BigArchDiagram.jsx'

const layers = [
  ['Intelligence',     'AI agents handle classification, extraction, routing, summarization, and closure detection — with clear guardrails and escalation paths.'],
  ['Orchestration',    'Workflow platforms (Power Automate, Make, Zapier, custom middleware) provide deterministic execution, retries, and structured handoffs.'],
  ['Integration',      'Two-way APIs and webhooks connect telephony, case management, CRM, finance, and ticketing systems — bridges between tools never designed to talk.'],
  ['System of record', 'A clear, auditable record — Microsoft Lists, MerusCase, or your existing source of truth. Buffers (e.g. Excel ledgers) exist to keep pipelines debuggable.'],
]

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeader
          num="05"
          eyebrow="Architecture"
          title={<>How we <span className="it">think in systems</span>.</>}
          intro="Our work is built on a layered architecture that separates intelligence, orchestration, and record-keeping. This is what makes AI deployments maintainable, auditable, and ready for enterprise environments."
        />

        <div className="mt-14 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <BigArchDiagram />
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-7">
            {layers.map(([k, v], i) => (
              <div key={k} className="border-t hairline pt-5 reveal" style={{ '--d': `${i * 80}ms` }}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">L{i + 1}</span>
                  <h4 className="font-display text-[20px] tracking-tighter2 font-medium">{k}</h4>
                </div>
                <p className="text-[14.5px] leading-[1.6] text-ink/75">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
