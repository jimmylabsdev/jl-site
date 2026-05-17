import Logo from '../components/Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-paper border-t hairline">
      <div className="max-w-page mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="mb-5">
              <Logo height={56} />
            </div>
            <p className="font-display it text-[15px] text-ink/70 max-w-[360px]">
              Building smarter systems for the way business works.
            </p>
          </div>
          <div className="font-mono text-[11px] tracking-[0.12em] text-muted text-left md:text-right">
            <div>© {new Date().getFullYear()} Jimmy Labs · All rights reserved</div>
            {/* <div className="mt-1">Bangalore · jimmy-labs.com</div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
