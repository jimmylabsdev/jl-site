import SectionHeader from '../components/SectionHeader.jsx'

const tech = [
  { name: 'OpenAI APIs',       cat: 'AI · LLMs' },
  { name: 'Lindy.ai',          cat: 'AI Agents' },
  { name: 'Centerfy.ai',       cat: 'Voice AI' },
  { name: 'Power Automate',    cat: 'Orchestration' },
  { name: 'Make.com',          cat: 'Orchestration' },
  { name: 'Zapier',            cat: 'Orchestration' },
  { name: 'Node.js',           cat: 'Custom middleware' },
  { name: 'Firebase',          cat: 'App layer' },
  { name: 'Twilio',            cat: 'Telephony / SMS' },
  { name: 'MerusCase',         cat: 'Legal CMS' },
  { name: 'MS Lists',          cat: 'Record-keeping' },
  { name: 'CRM Integrations',  cat: 'Business systems' },
]

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 md:py-32 bg-paper2/50 border-y hairline">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeader
          num="06"
          eyebrow="Technology"
          title={<>Tools that <span className="it">serve the system</span>.</>}
          intro="We're model-agnostic and platform-pragmatic. Technology choices follow the operational requirement — not the other way around."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l hairline">
          {tech.map((t, i) => (
            <div
              key={t.name}
              className="border-r border-b hairline p-6 reveal group hover:bg-paper transition-colors"
              style={{ '--d': `${i * 40}ms` }}
            >
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted mb-3">{t.cat}</div>
              <div className="font-display text-[20px] tracking-tighter2 font-medium">{t.name}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[640px] text-[14px] text-ink/65 reveal">
          <span className="font-display it">A note on tooling.</span> Every stack we deliver is chosen for
          maintainability and the client's existing operations. Excel as a ledger isn't a downgrade — it's an
          enterprise-grade choice when the alternative is unnecessary custom infrastructure.
        </p>
      </div>
    </section>
  )
}
