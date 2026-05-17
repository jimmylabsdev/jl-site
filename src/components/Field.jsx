import { useState } from 'react'

/**
 * Floating-label form field with optional required indicator and per-field error.
 *
 * Props:
 *   label     — visible field label
 *   value     — controlled value
 *   onChange  — (newValue: string) => void
 *   onBlur    — optional () => void, fired when the field loses focus (use for blur validation)
 *   type      — input type (default 'text'). Ignored when textarea is true.
 *   textarea  — render a <textarea> instead of <input>
 *   required  — if true, shows a small red asterisk next to the label
 *   error     — string; when non-empty, shows below the field and turns the border red
 */
export default function Field({
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  textarea,
  required,
  error,
}) {
  const [focus, setFocus] = useState(false)
  const filled = value && value.length > 0
  const hasError = Boolean(error)

  const labelClasses = `absolute left-0 pointer-events-none transition-all duration-200 font-mono text-[11px] tracking-[0.1em] uppercase ${
    focus || filled ? 'top-0 text-muted' : 'top-7 text-ink/50'
  }`

  const borderClass = hasError
    ? 'border-accent focus:border-accent'
    : 'border-line focus:border-ink'

  const handleBlur = () => {
    setFocus(false)
    if (onBlur) onBlur()
  }

  return (
    <label className="block relative">
      <span className={labelClasses}>
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          rows="3"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={handleBlur}
          className={`w-full bg-transparent border-b pt-6 pb-2 outline-none text-[14.5px] resize-none transition-colors ${borderClass}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={handleBlur}
          className={`w-full bg-transparent border-b pt-6 pb-2 outline-none text-[14.5px] transition-colors ${borderClass}`}
        />
      )}
      {hasError && (
        <p className="mt-1.5 text-[11.5px] text-accent font-medium" role="alert">
          {error}
        </p>
      )}
    </label>
  )
}