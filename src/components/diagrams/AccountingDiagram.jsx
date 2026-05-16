import { DiagramFrame, Box, ArrowMarker } from './primitives.jsx'

export default function AccountingDiagram() {
  return (
    <DiagramFrame fig="fig.03 — Accounting pipeline" title="Email → Excel → Power Automate → Lists">
      <svg viewBox="0 0 420 360" className="w-full h-auto">
        <defs>
          <ArrowMarker id="ar3" />
        </defs>

        <g className="dlabel" fill="#6B7270">
          <text x="10" y="30">AI</text>
          <text x="10" y="135">Buffer</text>
          <text x="10" y="225">Orchestration</text>
          <text x="10" y="315">Record</text>
        </g>
        <g stroke="#D3CFC4" strokeDasharray="2 4">
          <line x1="40" y1="60"  x2="420" y2="60"  />
          <line x1="40" y1="160" x2="420" y2="160" />
          <line x1="40" y1="250" x2="420" y2="250" />
        </g>

        <Box x={60}  y={20}  w={140} h={36} label="AI Intake Agent"     filled />
        <Box x={220} y={20}  w={140} h={36} label="AI Closure Agent"    filled />
        <Box x={120} y={115} w={180} h={36} label="Excel intake ledger" />
        <Box x={120} y={210} w={180} h={36} label="Power Automate" />
        <Box x={60}  y={300} w={140} h={36} label="Microsoft Lists" />
        <Box x={220} y={300} w={140} h={36} label="Reporting" />

        <g fill="none" stroke="#0F1614" strokeWidth="1.2" markerEnd="url(#ar3)">
          <path className="draw-path" style={{ '--len': '90' }} d="M130 56 V115" />
          <path className="draw-path" style={{ '--len': '90' }} d="M290 56 V115" />
          <path className="draw-path" style={{ '--len': '80' }} d="M220 151 V210" />
          <path className="draw-path" style={{ '--len': '80' }} d="M130 246 V300" />
          <path className="draw-path" style={{ '--len': '80' }} d="M290 246 V300" />
        </g>

        <text x="310" y="135" className="dlabel" fill="#FF3434">debuggable</text>
        <text x="310" y="225" className="dlabel" fill="#FF3434">auditable</text>
      </svg>
    </DiagramFrame>
  )
}
