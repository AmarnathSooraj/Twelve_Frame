import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'

const services = [
  {
    number: '01',
    title: 'Campaign films',
    description: 'Launch films, from idea to final grade.',
    deliverables: 'Concept · Direction · Post',
    image: '/media/work-northwind.jpg',
  },
  {
    number: '02',
    title: 'Product films',
    description: 'Product stories and demos that hold attention.',
    deliverables: 'Script · Edit · Sound',
    image: '/media/work-lumen.jpg',
  },
  {
    number: '03',
    title: 'Social reels',
    description: 'Platform-native cutdowns and hooks.',
    deliverables: '9:16 · Captions · Variants',
    image: '/media/work-arcadia.jpg',
  },
  {
    number: '04',
    title: 'Always-on output',
    description: 'Monthly content and localisation.',
    deliverables: 'Retainer · Localisation · Delivery',
    image: '/media/work-halcyon.jpg',
  },
  {
    number: '05',
    title: 'Brand films',
    description: 'Cinematic stories that define your brand.',
    deliverables: 'Strategy · Shoot · Edit',
    image: '/media/work-solstice.jpg',
  },
]

export default function Services() {
  const trackRef = useRef(null)
  const intervalRef = useRef(null)
  const touchStartX = useRef(null)
  const indexRef = useRef(0)
  const visibleRef = useRef(false)
  const cardWidth = 360
  const gap = 32

  const items = [...services, ...services]
  const total = services.length

  const slideTo = (nextIndex, duration) => {
    indexRef.current = nextIndex
    if (!trackRef.current) return
    trackRef.current.style.transition = `transform ${duration}ms ease-in-out`
    trackRef.current.style.transform = `translateX(-${nextIndex * (cardWidth + gap)}px)`
  }

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const startInterval = () => {
    stopInterval()
    // Don't animate while the carousel is off-screen or the page is hidden.
    if (!visibleRef.current) return
    intervalRef.current = setInterval(() => {
      const nextIdx = indexRef.current + 1
      if (nextIdx > total) return
      slideTo(nextIdx, 3000)
      if (nextIdx === total) {
        setTimeout(() => {
          if (!trackRef.current) return
          trackRef.current.style.transition = 'none'
          trackRef.current.style.transform = 'translateX(0px)'
          indexRef.current = 0
        }, 3000)
      }
    }, 3000)
  }

  const next = () => {
    stopInterval()
    if (indexRef.current >= total) return
    const nextIdx = indexRef.current + 1
    slideTo(nextIdx, 800)
    if (nextIdx === total) {
      setTimeout(() => {
        if (!trackRef.current) return
        trackRef.current.style.transition = 'none'
        trackRef.current.style.transform = 'translateX(0px)'
        indexRef.current = 0
        startInterval()
      }, 800)
    } else {
      setTimeout(startInterval, 800)
    }
  }

  const prev = () => {
    stopInterval()
    if (indexRef.current === 0) {
      if (trackRef.current) {
        trackRef.current.style.transition = 'none'
        trackRef.current.style.transform = `translateX(-${total * (cardWidth + gap)}px)`
      }
      setTimeout(() => {
        if (!trackRef.current) return
        trackRef.current.style.transition = 'transform 800ms ease-in-out'
        trackRef.current.style.transform = `translateX(-${(total - 1) * (cardWidth + gap)}px)`
        indexRef.current = total - 1
        startInterval()
      }, 20)
      return
    }
    slideTo(indexRef.current - 1, 800)
    setTimeout(startInterval, 800)
  }

  const handleTouchStart = (event) => {
    stopInterval()
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(delta) < 40) {
      startInterval()
      return
    }

    if (delta < 0) {
      next()
    } else {
      prev()
    }
  }

  const handleTouchCancel = () => {
    touchStartX.current = null
    startInterval()
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    track.style.transition = 'transform 3000ms ease-in-out'
    track.style.transform = 'translateX(0px)'
    indexRef.current = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          startInterval()
        } else {
          stopInterval()
        }
      },
      { threshold: 0.15 },
    )

    if (track.parentElement) observer.observe(track.parentElement)

    const onVisibilityChange = () => {
      if (document.hidden) {
        stopInterval()
      } else if (visibleRef.current) {
        startInterval()
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      stopInterval()
    }
    // The carousel helpers only read/write refs, so this runs once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-4">
          <div>
            <Reveal>
              <SectionHeading
                index="02"
                eyebrow="Services"
                title="What we make."
                description="One studio for strategy, shoot, edit, and delivery."
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-4 my-6">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-teal"
                >
                  <span className="link-draw">Send a brief</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-8">
          <Reveal delay={120}>
            <div className="mb-6 hidden items-center justify-end gap-3 lg:flex">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous service"
                className="inline-flex h-11 w-11 items-center justify-center text-ink/70 transition-colors duration-300 hover:text-teal"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next service"
                className="inline-flex h-11 w-11 items-center justify-center text-ink/70 transition-colors duration-300 hover:text-teal"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </Reveal>
          <div
            className="relative touch-pan-y overflow-hidden"
            onMouseEnter={stopInterval}
            onMouseLeave={startInterval}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <div
              ref={trackRef}
              className="flex gap-8 will-change-transform"
              style={{ transform: 'translateX(0px)', transition: 'transform 3000ms ease-in-out' }}
            >
              {items.map((service, idx) => (
                <div key={`${service.number}-${idx}`} className="shrink-0">
                  <div className="group relative flex h-[420px] w-[360px] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-[#0b1820] shadow-[0_80px_140px_-100px_rgba(15,23,42,0.9)] transition-all duration-500 hover:-translate-y-2 hover:border-teal/40 sm:h-[460px]">
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                    </div>
                    <div className="relative flex items-center justify-between p-7 pb-0 sm:p-8 sm:pb-0">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                        {service.number}
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-teal group-hover:text-teal">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="relative mt-auto flex flex-col gap-4 p-7 sm:p-8">
                      <div>
                        <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-white/70">
                          {service.description}
                        </p>
                        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                          {service.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40 lg:hidden">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            Swipe to view services
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </p>
        </div>
      </div>
    </section>
  )
}
