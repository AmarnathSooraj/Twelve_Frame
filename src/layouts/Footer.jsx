import { ArrowUpRight } from 'lucide-react'
import LogoMark from '../components/LogoMark'

const columns = [
  {
    title: 'Studio',
    links: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { label: 'Instagram', href: '#contact' },
      { label: 'Vimeo', href: '#contact' },
      { label: 'LinkedIn', href: '#contact' },
      { label: 'Behance', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 px-6 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
      <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Twelve Frame Studio home"
          >
            {/* <LogoMark className="h-8 w-8" /> */}
            <span className="font-mono text-[12px] uppercase leading-tight tracking-[0.18em] text-ink">
              Twelve Frame Studio
            </span>
          </a>

          <p className="mt-2 max-w-xs text-lg leading-relaxed text-ink/45">
            An independent film studio for ads, product films and social reels.
          </p>

          <a
            href="mailto:hello@twelveframe.studio"
            className="group mt-4 inline-flex items-center gap-2 font-mono md:text-lg tracking-[0.02em] text-ink transition-colors hover:text-teal"
          >
            <span className="link-draw">hello@twelveframe.studio</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-ink/30">
                {column.title}
              </h3>
              <ul className="mt-2 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-base text-ink/55 transition-colors hover:text-ink"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-ink/30">
              Based in
            </h3>
            <p className="mt-2 text-base leading-relaxed text-ink/55">
              London
              <br />
              Working worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-16 select-none sm:mt-20" aria-hidden="true">
        <p className="whitespace-nowrap font-display text-[clamp(1.75rem,8.6vw,8.75rem)] font-medium uppercase leading-[0.8] tracking-[-0.06em] text-ink/[0.07] text-center md:text-left">
          Twelve <span className="text-stroke-teal opacity-70">Frame</span>
        </p>
      </div>

      <div className="relative mt-5 md:mt-10 flex flex-col gap-3 border-t border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/30  text-center md:text-left ">
          © {new Date().getFullYear()} Twelve Frame Studio. All rights reserved.
        </p>

        <div className="hidden md:flex flex-wrap items-center gap-6 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/30">
          <a
            href="#top"
            className="group flex items-center gap-2 text-ink/50 transition-colors hover:text-teal"
          >
            Back to top
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
