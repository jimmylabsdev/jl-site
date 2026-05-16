import { Node, ArrowMarker } from './primitives.jsx'

export default function HeroDiagram() {
  return (
    <div className="relative bg-paper2 border hairline rounded-md p-5 md:p-7 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted">
            fig.01 — Orchestration pipeline
          </span>
        </div>
        {/* <span className="font-mono text-[10.5px] text-muted">live</span> */}
      </div>

      <svg viewBox="0 0 480 360" className="w-full h-auto">
        <defs>
          <pattern id="hgrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="#0F1614" opacity="0.10" />
          </pattern>
          <ArrowMarker id="arrow" />
        </defs>
        <rect width="480" height="360" fill="url(#hgrid)" />

        {/* Lane separators */}
        <g stroke="#D3CFC4" strokeDasharray="2 4">
          <line x1="0" y1="80" x2="480" y2="80" />
          <line x1="0" y1="180" x2="480" y2="180" />
          <line x1="0" y1="280" x2="480" y2="280" />
        </g>
        <g className="dlabel" fill="#6B7270">
          <text x="10" y="32">Intake</text>
          <text x="10" y="132">AI · Decision</text>
          <text x="10" y="232">Orchestration</text>
          <text x="10" y="332">System of record</text>
        </g>

        <Node x={130} y={15}  w={120} h={36} label="Inbound channel"  delay="0ms" />
        <Node x={280} y={15}  w={120} h={36} label="Caller / payload" delay="120ms" />
        <Node x={130} y={115} w={120} h={36} label="AI Intake Agent"  delay="260ms" accent />
        <Node x={280} y={115} w={120} h={36} label="AI Routing Agent" delay="380ms" accent />
        <Node x={130} y={215} w={120} h={36} label="Power Automate"   delay="520ms" />
        <Node x={280} y={215} w={120} h={36} label="Centerfy / Lindy" delay="620ms" />
        <Node x={130} y={315} w={120} h={36} label="Microsoft Lists"  delay="760ms" />
        <Node x={280} y={315} w={120} h={36} label="MerusCase"        delay="860ms" />

        <g fill="none" stroke="#0F1614" strokeWidth="1.2" markerEnd="url(#arrow)">
          <path className="draw-path" style={{ '--len': '120' }} d="M190 53 V115" />
          <path className="draw-path" style={{ '--len': '120' }} d="M340 53 V115" />
          <path className="draw-path" style={{ '--len': '140' }} d="M190 153 V215" />
          <path className="draw-path" style={{ '--len': '140' }} d="M340 153 V215" />
          <path className="draw-path" style={{ '--len': '100' }} d="M190 253 V315" />
          <path className="draw-path" style={{ '--len': '100' }} d="M340 253 V315" />
          <path className="draw-path" style={{ '--len': '200' }} d="M250 136 H280" />
        </g>

        {/* Right-edge annotation bracket */}
        <g>
          <line x1="415" y1="40"  x2="415" y2="336" stroke="#FF3434" strokeWidth="1" />
          <line x1="411" y1="40"  x2="419" y2="40"  stroke="#FF3434" strokeWidth="1" />
          <line x1="411" y1="336" x2="419" y2="336" stroke="#FF3434" strokeWidth="1" />
          <text x="424" y="190" className="dlabel" fill="#FF3434" transform="rotate(90 424 190)">
            end-to-end
          </text>
        </g>
      </svg>

      <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-muted">
        <span>jl-arch</span>
        <span>v1.4</span>
      </div>
    </div>
  )
}
