import { DiagramFrame, Step, ArrowMarker } from './primitives.jsx'

export default function LegalDiagram() {
  return (
    <DiagramFrame fig="fig.02 — Legal call flow" title="Inbound call → MerusCase, end-to-end">
      <svg viewBox="0 0 420 360" className="w-full h-auto">
        <defs>
          <ArrowMarker id="ar2" />
        </defs>

        <line x1="60" y1="20" x2="60" y2="340" stroke="#D3CFC4" strokeDasharray="2 4" />
        {[40, 100, 160, 220, 280, 332].map((y, i) => (
          <g key={i}>
            <circle cx="60" cy={y} r="4" fill="#FF3434" />
            <text x="48" y={y + 4} textAnchor="end" className="dlabel" fill="#6B7270">
              {String(i + 1).padStart(2, '0')}
            </text>
          </g>
        ))}

        <Step y={20}  title="Inbound call received"      sub="Centerfy.ai captures caller ID" />
        <Step y={80}  title="Case record lookup"          sub="MerusCase API · sub-second" />
        <Step y={140} title="Intelligent routing"         sub="Case-type aware" />
        <Step y={200} title="Screen pop with context"     sub="Name · case # · attorney · status" />
        <Step y={260} title="AI transcription & summary"  sub="Real-time" />
        <Step y={312} title="Auto-log to MerusCase"       sub="Transcript + summary + outcome" />
      </svg>
    </DiagramFrame>
  )
}
