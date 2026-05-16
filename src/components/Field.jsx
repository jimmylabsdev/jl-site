import { useState } from 'react'

export default function Field({ label, value, onChange, type = 'text', textarea }) {
  const [focus, setFocus] = useState(false)
  const filled = value && value.length > 0

  const labelClasses = `absolute left-0 pointer-events-none transition-all duration-200 font-mono text-[11px] tracking-[0.1em] uppercase ${
    focus || filled ? 'top-0 text-muted' : 'top-7 text-ink/50'
  }`

  return (
    <label className="block relative">
      <span className={labelClasses}>{label}</span>
      {textarea ? (
        <textarea
          rows="3"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full bg-transparent border-b hairline pt-6 pb-2 outline-none text-[14.5px] resize-none focus:border-ink"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full bg-transparent border-b hairline pt-6 pb-2 outline-none text-[14.5px] focus:border-ink"
        />
      )}
    </label>
  )
}
