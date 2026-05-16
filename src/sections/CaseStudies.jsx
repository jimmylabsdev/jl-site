import SectionHeader from '../components/SectionHeader.jsx'
import CaseStudyCard from '../components/CaseStudyCard.jsx'
import LegalDiagram from '../components/diagrams/LegalDiagram.jsx'
import AccountingDiagram from '../components/diagrams/AccountingDiagram.jsx'

const studies = [
  {
    kicker: 'Legal · Case Management',
    title: 'AI-Powered Legal Intake & Case Management Automation',
    client: 'Confidential legal firm · 400+ inbound calls/day',
    problem:
      'Phone systems and case management ran in silos. Agents searched MerusCase manually on every call, repeat callers had to re-explain their case, and after-call work piled into multi-day backlogs.',
    architecture: [
      ['Telephony & AI', 'Centerfy.ai inbound call center + AI transcription & summary'],
      ['Integration',    'MerusCase REST API + Centerfy webhooks + custom middleware'],
      ['Routing',        'Case-type aware routing (personal injury, family, criminal defense)'],
      ['System of record','MerusCase — auto-logged transcript, summary, outcome'],
    ],
    outcomes: [
      ['40%', 'Reduction in call handling time'],
      ['3×',  'Faster case data retrieval'],
      ['60%', 'Drop in manual data entry'],
      ['98%', 'Call routing accuracy'],
    ],
    stack: ['Centerfy.ai', 'MerusCase API', 'Custom middleware', 'AI transcription', 'Webhooks'],
    DiagramComponent: LegalDiagram,
  },
  {
    kicker: 'Accounting · Operations',
    title: 'AI-Powered Accounting Ticket Automation System',
    client: 'Accounting operations · High-volume email intake',
    problem:
      'Accounting teams handled billing, tax, and reconciliation requests over unstructured email. Manual ticket creation slowed response, misclassification delayed resolution, and there was no centralized audit trail.',
    architecture: [
      ['AI Layer',        'AI Intake Agent (classify + extract) · AI Closure Agent (resolution detection)'],
      ['Integration',     'Microsoft Power Automate — enterprise-grade orchestration'],
      ['Data buffer',     'Microsoft Excel intake ledger — auditable, debuggable'],
      ['System of record','Microsoft Lists — tracking, filtering, reporting'],
    ],
    outcomes: [
      ['Auto',       'Ticket ID generation (ACC-YYYY-XXXX)'],
      ['↓↓',         'Manual intake effort'],
      ['Real-time',  'Status & closure detection'],
      ['Audit-ready','Centralized ticket database'],
    ],
    stack: ['Lindy.ai', 'Power Automate', 'MS Lists', 'MS Excel', 'Outlook/Gmail'],
    DiagramComponent: AccountingDiagram,
    reverse: true,
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 bg-paper2/40 border-y hairline">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <SectionHeader
          num="04"
          eyebrow="Case Studies"
          title={<>Operational systems, <span className="it">shipped</span>.</>}
          intro="Two recent enterprise builds — one in legal, one in accounting. Both replaced manual workflows with auditable, AI-orchestrated systems."
        />

        <div className="mt-14 space-y-16">
          {studies.map((s, i) => {
            const { DiagramComponent, ...rest } = s
            return <CaseStudyCard key={i} {...rest} diagram={<DiagramComponent />} />
          })}
        </div>
      </div>
    </section>
  )
}
