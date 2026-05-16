import SectionHeader from '../components/SectionHeader.jsx'

const services = [
  {
    n: '01',
    title: 'Operational AI Systems',
    body: 'End-to-end AI systems engineered to run inside live business operations — intake, classification, routing, resolution, and reporting, with full auditability.',
  },
  {
    n: '02',
    title: 'AI Workflow Architecture',
    body: 'Layered architectures that separate intelligence, orchestration, and storage — designed for scale, debuggability, and long-term maintenance, not demoware.',
  },
  {
    n: '03',
    title: 'AI Systems Integration',
    body: 'Two-way integrations between case management, CRMs, telephony, finance, and ticketing systems. We connect tools that were never designed to talk.',
  },
  {
    n: '04',
    title: 'Workflow Orchestration',
    body: 'Production-grade orchestration on Power Automate, Make, and Zapier — with deterministic routing, retries, and structured handoffs to AI agents.',
  },
  {
    n: '05',
    title: 'AI-Assisted Operations',
    body: 'Embedded AI inside everyday workflows — triage, summarization, post-call notes, classification — reducing handle time and after-call work to near zero.',
  },
  {
    n: '06',
    title: 'RevOps & Business Systems',
    body: 'Lead-to-cash automation across CRM, billing, and reporting. Cleaner pipelines, faster cycle times, and metrics leadership can actually trust.',
  },
  {
    n: '07',
    title: 'Executive Operations Automation',
    body: 'Calendar, inbox, briefing, and reporting automation for founders and operators — built around how the executive actually works, not generic templates.',
  },
  {
    n: '08',
    title: 'AI Agent Integrations',
    body: 'Production AI agents (Lindy, custom LLM agents) plugged into telephony, email, and case systems — with clear guardrails, logging, and escalation paths.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeader
          num="03"
          eyebrow="Services"
          title={<>What we <span className="it">design &amp; deliver</span>.</>}
          intro="Eight focused practice areas. Each one is grounded in real implementations, not generic AI consulting."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l hairline">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="svc-card relative border-r border-b hairline p-7 md:p-8 min-h-[260px] reveal"
              style={{ '--d': `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted">{s.n}</span>
                <svg className="svc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12 L12 4 M6 4 H12 V10" stroke="#0F1614" strokeWidth="1.4" />
                </svg>
              </div>
              <h3 className="font-display text-[22px] leading-tight tracking-tighter2 font-medium mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.55] text-ink/75">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
