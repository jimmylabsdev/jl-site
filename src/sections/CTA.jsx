import { useState } from 'react'
import Field from '../components/Field.jsx'

const WEBHOOK_URL = 'https://hook.eu2.make.com/sisk921fek6zxttapc860iqdqaya4br5'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim()) return setError('Please enter your name.')
    if (!form.email.trim()) return setError('Please enter your email.')
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError('Please enter a valid email address.')

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
      setError("Something went wrong. Please try again, or email consult@jimmy-labs.com directly.")
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
              <ContactRow label="LinkedIn" value="/company/jimmylabs"      href="#" />
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
                <div className="space-y-4">
                  <Field label="Name"       value={form.name}    onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Work email" value={form.email}   onChange={(v) => setForm({ ...form, email: v })} type="email" />
                  <Field label="Company"    value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <Field
                    label="What are you trying to operationalize?"
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                    textarea
                  />

                  {error && (
                    <p className="text-[12.5px] text-accent mt-2 leading-snug" role="alert">
                      {error}
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
                    By submitting, you agree to be contacted about your enquiry. We treat all submissions as
                    confidential.
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
