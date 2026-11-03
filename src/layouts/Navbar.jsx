import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import LogoMark from '../components/LogoMark'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Instagram', href: '#contact' },
  { label: 'Vimeo', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const overlayRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled && !open

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus({ preventScroll: true })
      }
    }

    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    media.addEventListener('change', onChange)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      media.removeEventListener('change', onChange)
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const timer = window.setTimeout(() => {
      overlayRef.current?.focus({ preventScroll: true })
    }, 300)
    return () => window.clearTimeout(timer)
  }, [open])

  const close = () => {
    setOpen(false)
    toggleRef.current?.focus({ preventScroll: true })
  }

  return (
    <>
      <header className="sticky top-0 z-50">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 border-b bg-primary/90 backdrop-blur-xl transition-[translate,opacity,border-color] duration-500 ease-out ${solid
            ? 'translate-y-0 border-ink/10 opacity-100'
            : '-translate-y-full border-transparent opacity-0'
            }`}
        />

        <div className="relative flex h-20 items-center justify-between gap-6 px-6 sm:px-8 lg:h-24 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Twelve Frame Studio home"
          >
            <LogoMark className="h-8 w-8 shrink-0" />
            <span className="flex flex-col">
              <span className="font-mono text-[12px] uppercase leading-tight tracking-[0.18em] text-ink">
                Twelve Frame Studio
              </span>
              <span className="mt-1 font-mono text-[12px] uppercase tracking-[0.22em] text-ink/35">
                Film &amp; motion
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-ink/55 transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[15px] text-ink transition-colors hover:text-teal"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => (open ? close() : setOpen(true))}
            className={`-mr-2 grid h-9 w-9 place-items-center transition-colors duration-300 lg:hidden ${open ? 'text-teal' : 'text-ink hover:text-teal'
              }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" className="relative block h-2 w-[18px]">
              <span
                className={`absolute left-0 top-0 h-px w-full origin-center bg-current transition-transform duration-300 ease-out ${open ? 'translate-y-[3.5px] rotate-45' : ''
                  }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full origin-center bg-current transition-transform duration-300 ease-out ${open ? '-translate-y-[3.5px] -rotate-45' : ''
                  }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={overlayRef}
        tabIndex={-1}
        inert={!open}
        aria-hidden={!open}
        aria-label="Mobile menu"
        className={`fixed inset-0 z-40 overflow-y-auto bg-primary outline-none transition-[opacity,visibility] duration-500 ease-out lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute -right-16 top-[16%] h-64 w-64 rounded-full bg-teal/10 blur-[100px]" />
          <span className="absolute -left-16 bottom-[12%] h-64 w-64 rounded-full bg-orange/5 blur-[110px]" />
          <span className="text-stroke absolute -bottom-10 -right-6 select-none font-display text-[46vw] font-medium leading-none opacity-30">
            12
          </span>
        </div>

        <div className="relative flex min-h-full flex-col px-6 pb-8 pt-28 sm:px-8">
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.3em] text-ink/35 transition-all duration-500 ease-out ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            style={{ transitionDelay: open ? '80ms' : '0ms' }}
          >
            Menu — Index
          </p>

          <nav className="flex flex-1 flex-col justify-center py-8" aria-label="Mobile">
            <ul className="border-y border-ink/10">
              {links.map((link, index) => (
                <li key={link.href} className="border-b border-ink/10 last:border-b-0">
                  <a
                    href={link.href}
                    onClick={close}
                    className={`group flex items-baseline gap-4 py-4 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                    style={{ transitionDelay: open ? `${140 + index * 90}ms` : '0ms' }}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-[clamp(2.6rem,11.5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-ink transition-colors duration-300 group-hover:text-teal">
                      {link.label}
                    </span>
                    <ArrowUpRight className="ml-auto h-6 w-6 self-center text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            style={{ transitionDelay: open ? '440ms' : '0ms' }}
          >
            <a
              href="#contact"
              onClick={close}
              className="group flex items-center justify-between border border-ink/15 px-5 py-4 transition-colors duration-300 hover:border-teal/60"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink">
                Start a project
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-teal text-ground transition-transform duration-300 group-hover:-rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-ink/10 pt-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/35">
                London · Working worldwide
              </p>
              <div className="flex items-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={close}
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45 transition-colors hover:text-teal"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
