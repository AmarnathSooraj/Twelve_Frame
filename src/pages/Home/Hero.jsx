import { ArrowUpRight } from 'lucide-react'
import AmbientVideo from '../../components/AmbientVideo'

export default function Hero() {
  return (
    <section id="top" className="relative">
      <AmbientVideo
        src="/media/showreel.mp4"
        poster="/media/showreel.jpg"
        label="Showreel"
        variant="background"
        priority
        controls={false}
        className="-mt-20 flex min-h-[100svh] flex-col lg:-mt-24"
        videoClassName="absolute inset-0 h-full w-full object-cover"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ground/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ground/65 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ground via-ground/45 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ground/80 via-ground/15 to-transparent"
        />

        <div className="relative flex flex-1 flex-col justify-end gap-10 px-6 pb-10 pt-28 sm:gap-14 sm:px-10 sm:pb-12 sm:pt-32 lg:gap-16 lg:px-14 lg:pb-16 lg:pt-36">

          <div className="max-w-5xl">
            <h1
              className="font-display text-[clamp(2.6rem,7.6vw,7rem)] font-medium leading-[0.96] tracking-[-0.05em] text-ink"
              aria-label="Film craft at the speed of the feed."
            >
              <span className="block overflow-hidden pb-[0.05em]">
                <span className="hero-line" style={{ animationDelay: '100ms' }}>
                  Film craft
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.05em]">
                <span className="hero-line" style={{ animationDelay: '220ms' }}>
                  at the speed
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.05em]">
                <span
                  className="hero-line text-teal"
                  style={{ animationDelay: '340ms' }}
                >
                  of the feed.
                </span>
              </span>
            </h1>

            <div className="mt-9 flex flex-col gap-8 sm:mt-11 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="hero-fade max-w-md" style={{ animationDelay: '520ms' }}>
                <p className="text-pretty text-base leading-relaxed text-ink/65 sm:text-[17px]">
                  Independent studio for ads, product films and social reels.
                  Film craft, shipped fast.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-teal px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ground transition-colors duration-300 hover:bg-ink"
                  >
                    Start a project
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="#work"
                    className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/70 transition-colors duration-300 hover:text-ink"
                  >
                    See the work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AmbientVideo>
    </section>
  )
}
