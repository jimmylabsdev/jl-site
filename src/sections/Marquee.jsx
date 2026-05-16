const items = [
  'Operational AI',
  'Workflow Architecture',
  'AI Systems Integration',
  'AI Workflow Orchestration',
  'AI Agents',
  'Business Process Automation',
  'RevOps Automation',
  'Enterprise Workflow Automation',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <section className="border-y hairline bg-paper2/60 overflow-hidden">
      <div className="py-5 flex marquee-track whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-[22px] tracking-tighter2 it text-ink/90">{t}</span>
            <svg width="14" height="14" viewBox="0 0 14 14">
              <circle cx="7" cy="7" r="2" fill="#FF3434" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}
