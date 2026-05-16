import { Box, ArrowMarker } from './primitives.jsx'

export default function BigArchDiagram() {
  return (
    <div className="relative bg-paper2 border hairline rounded-md p-6 md:p-8 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted">
          fig.04 — Reference architecture
        </div>
        <div className="font-mono text-[10.5px] text-muted">jl-arch</div>
      </div>

      <svg viewBox="0 0 640 460" className="w-full h-auto">
        <defs>
          <ArrowMarker id="ar4" />
          <pattern id="bgrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="#0F1614" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="640" height="460" fill="url(#bgrid)" />

        {/* Layer bands — lighter, white-bg friendly */}
        {[
          ['L1 · Channels',      20,  '#FFFFFF'],
          ['L2 · AI · Decision', 120, '#F1EFEA'],
          ['L3 · Orchestration', 230, '#FFFFFF'],
          ['L4 · Record',        340, '#F1EFEA'],
        ].map(([label, y, fill], i) => (
          <g key={i}>
            <rect x="20" y={y} width="600" height="90" fill={fill} stroke="#E5E2DA" />
            <text x="36" y={y + 22} className="dlabel" fill="#6B7270">{label}</text>
          </g>
        ))}

        <Box x={80}  y={50}  w={120} h={42} label="Email / Outlook" />
        <Box x={240} y={50}  w={120} h={42} label="Inbound calls" />
        <Box x={400} y={50}  w={120} h={42} label="Web / Forms" />

        <Box x={80}  y={150} w={120} h={42} label="Intake Agent"  filled />
        <Box x={240} y={150} w={120} h={42} label="Routing Agent" filled />
        <Box x={400} y={150} w={120} h={42} label="Closure Agent" filled />

        <Box x={150} y={260} w={140} h={42} label="Power Automate" />
        <Box x={330} y={260} w={140} h={42} label="Make / Zapier" />

        <Box x={80}  y={370} w={120} h={42} label="MS Lists" />
        <Box x={240} y={370} w={120} h={42} label="MerusCase" />
        <Box x={400} y={370} w={120} h={42} label="CRM" />

        <g fill="none" stroke="#0F1614" strokeWidth="1.2" markerEnd="url(#ar4)">
          <path className="draw-path" style={{ '--len': '120' }} d="M140 92 V150" />
          <path className="draw-path" style={{ '--len': '120' }} d="M300 92 V150" />
          <path className="draw-path" style={{ '--len': '120' }} d="M460 92 V150" />

          <path className="draw-path" style={{ '--len': '180' }} d="M140 192 C 140 230, 220 230, 220 260" />
          <path className="draw-path" style={{ '--len': '180' }} d="M300 192 V260" />
          <path className="draw-path" style={{ '--len': '180' }} d="M460 192 C 460 230, 400 230, 400 260" />

          <path className="draw-path" style={{ '--len': '180' }} d="M220 302 C 220 340, 140 340, 140 370" />
          <path className="draw-path" style={{ '--len': '180' }} d="M300 302 V370" />
          <path className="draw-path" style={{ '--len': '180' }} d="M400 302 C 400 340, 460 340, 460 370" />
        </g>
      </svg>
    </div>
  )
}
