/**
 * Architectural diagram primitives.
 *
 * Every <text> element passes `fill` explicitly so AI/inverted nodes
 * always render their label correctly regardless of CSS specificity.
 *
 * Color tokens used inside SVG:
 *   #FFFFFF  — paper / box fill
 *   #0F1614  — ink / outlines / default text
 *   #6B7270  — muted (dlabel fill)
 *   #FF3434  — brand red accent annotations
 */

export function Node({ x, y, w, h, label, accent, delay = '0ms' }) {
  const fill = accent ? '#0F1614' : '#FFFFFF'
  const textFill = accent ? '#FFFFFF' : '#0F1614'
  return (
    <g className="pop" style={{ animationDelay: delay }}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="3"
        fill={fill}
        stroke="#0F1614"
        strokeWidth="1"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        className="dtitle"
        fill={textFill}
      >
        {label}
      </text>
    </g>
  )
}

export function Box({ x, y, w, h, label, filled }) {
  const fill = filled ? '#0F1614' : '#FFFFFF'
  const textFill = filled ? '#FFFFFF' : '#0F1614'
  return (
    <g className="pop">
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="3"
        fill={fill}
        stroke="#0F1614"
        strokeWidth="1"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        className="dtitle"
        fill={textFill}
      >
        {label}
      </text>
    </g>
  )
}

export function Step({ y, title, sub }) {
  return (
    <g>
      <rect
        x="78"
        y={y - 2}
        width="320"
        height="44"
        rx="3"
        fill="#FFFFFF"
        stroke="#0F1614"
        strokeWidth="1"
      />
      <text x="90" y={y + 15} className="dtitle" fill="#0F1614">
        {title}
      </text>
      <text x="90" y={y + 32} className="dlabel" fill="#6B7270">
        {sub}
      </text>
    </g>
  )
}

export function DiagramFrame({ title, fig, children }) {
  return (
    <div className="relative bg-paper2 border hairline rounded-md p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted">{fig}</div>
        <div className="font-mono text-[10.5px] text-muted">jl-arch</div>
      </div>
      <div className="font-display text-[15px] tracking-tighter2 mb-4">{title}</div>
      {children}
    </div>
  )
}

/** Reusable SVG arrow marker definition. Drop inside <defs>. */
export function ArrowMarker({ id = 'arrow' }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0F1614" />
    </marker>
  )
}
