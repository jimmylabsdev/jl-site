import { useState } from 'react'
import Logo from '../components/Logo.jsx'

const links = [
  ['Services', '#services'],
  ['Case Studies', '#case-studies'],
  ['Architecture', '#architecture'],
  ['Technology', '#technology'],
  ['About', '#about'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b hairline">
      <div className="max-w-page mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-4">
          <Logo height={48} />
          <span className="hidden md:inline text-[11px] font-mono tracking-[0.18em] uppercase text-muted pl-3 border-l hairline">
            Operational AI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[13.5px] text-ink/85 hover:text-ink link-u">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-[13px] px-4 py-2">
            Book consultation →
          </a>
        </div>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d={open ? 'M4 4 L18 18 M18 4 L4 18' : 'M3 6 H19 M3 11 H19 M3 16 H19'}
              stroke="#0F1614"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className={`md:hidden mobile-panel ${open ? 'open' : ''} bg-paper border-t hairline`}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-[15px]">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-center text-[13px] px-4 py-2.5 mt-2"
          >
            Book consultation
          </a>
        </div>
      </div>
    </header>
  )
}
