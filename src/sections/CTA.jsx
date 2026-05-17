import { useState } from 'react'
import Field from '../components/Field.jsx'

const WEBHOOK_URL = 'https://hook.eu2.make.com/sisk921fek6zxttapc860iqdqaya4br5'

const EMAIL_RE = /^\S+@\S+\.\S+$/

/**
 * Validates a single field value. Returns an error string, or '' if valid.
 */
function validateField(name, value) {
  const v = value.trim()
  switch (name) {
    case 'name':
      if (!v) return 'Please enter your name.'
      return ''
    case 'email':
      if (!v) return 'Please enter your email.'
      if (!EMAIL_RE.test(v)) return 'Please enter a valid email address.'
      return ''
    case 'company':
      if (!v) return 'Please enter your company.'
      return ''
    default:
      return ''
  }
}

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', company: '' })

  // Update a field value, and clear that field's error if it had one.
  const updateField = (key) => (value) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: '' }))
  }

  // Validate on blur — but only show an error if the user actually typed something
  // and then cleared it, OR if the field has invalid content. We don't want to
  // yell at someone for tabbing past an empty field they're about to come back to.
  const validateOnBlur = (key) => () => {
    const err = validateField(key, form[key])
    // Only set blur errors if the field has content (i.e. format issues like bad email).
    // Empty-field errors only fire on submit, which is less aggressive.
    if (form[key].trim() || errors[key]) {
      setErrors((e) => ({ ...e, [key]: err }))
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    // Validate all required fields
    const newErrors = {
      name:    validateField('name',    form.name),
      email:   validateField('email',   form.email),
      company: validateField('company', form.company),
    }
    setErrors(newErrors)

    // If any field has an error, stop here
    if (newErrors.name || newErrors.email || newErrors.company) return

    setSending(true)
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          submittedAt: new Date().toISOString(),
          source: 'jimmy-labs.com / contact form',
        }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setSubmitted(true)
    } catch (err) {
      setSubmitError("Something went wrong. Please try again, or email consult@jimmy-labs.com directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ink text-paper overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(244,241,234,0.35) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative max-w-page mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/55">
                08 — Get in touch
              </span>
            </div>
            <h2 className="font-display text-[44px] sm:text-[58px] lg:text-[78px] leading-[0.97] tracking-tightest font-light">
              Modernize<br />
              operational workflows<br />
              with <span className="it" style={{ color: '#FF8585' }}>AI</span>.
            </h2>
            <p className="mt-8 text-[16px] text-paper/75 max-w-[520px] leading-[1.6]">
              If you're an operations leader, founder, or enterprise buyer thinking about where AI should sit
              inside your business — we'd like to talk.
            </p>

            <div className="mt-12 space-y-5">
              <ContactRow label="Email"    value="consult@jimmy-labs.com"  href="mailto:consult@jimmy-labs.com" />
              <ContactRow label="Web"      value="jimmy-labs.com"          href="https://jimmy-labs.com" />
              <ContactRow label="LinkedIn" value="/company/jimmy-labs"     href="#" />
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-paper/50 w-20">
                  HQ
                </span>
                <span className="text-paper/80">Bangalore · Working Globally</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="bg-paper text-ink rounded-md p-7 md:p-9 border border-paper/20">
              <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted mb-5">
                Request a consultation
              </div>
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="font-display text-[28px] tracking-tighter2 mb-3">
                    Thanks — message received.
                  </div>
                  <p className="text-[14px] text-ink/70">We'll respond within one business day.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field
                    label="Name"
                    value={form.name}
                    onChange={updateField('name')}
                    onBlur={validateOnBlur('name')}
                    error={errors.name}
                    required
                  />
                  <Field
                    label="Work email"
                    value={form.email}
                    onChange={updateField('email')}
                    onBlur={validateOnBlur('email')}
                    type="email"
                    error={errors.email}
                    required
                  />
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={updateField('company')}
                    onBlur={validateOnBlur('company')}
                    error={errors.company}
                    required
                  />
                  <Field
                    label="What are you trying to operationalize?"
                    value={form.message}
                    onChange={updateField('message')}
                    textarea
                  />

                  {submitError && (
                    <p className="text-[12.5px] text-accent mt-2 leading-snug" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button
                    onClick={onSubmit}
                    disabled={sending}
                    className="btn-primary w-full text-[13.5px] px-5 py-3 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending…' : 'Send →'}
                  </button>
                  <p className="text-[11.5px] text-muted leading-snug mt-3">
                    Fields marked <span className="text-accent">*</span> are required. By submitting, you agree
                    to be contacted about your enquiry. We treat all submissions as confidential.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-paper/50 w-20">{label}</span>
      <a href={href} className="link-u text-paper">
        {value}
      </a>
    </div>
  )
}