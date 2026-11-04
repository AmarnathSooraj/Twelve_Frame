import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'

export default function CTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="Contact"
              title="Tell us what you need to see."
              description="A brief, idea, or deadline is all we need. Share your goals and timeline — we'll reply within a day with next steps."
            />
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-12">
          <Reveal delay={120}>
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink/35">
              Email
            </p>
            <a
              href="mailto:hello@twelveframe.studio"
              className="group mt-3 inline-flex max-w-full items-center gap-3 font-display text-[clamp(0.95rem,2.2vw,1.35rem)] font-medium tracking-[-0.035em] text-ink transition-colors hover:text-teal"
            >
              <span className="link-draw break-all">
                hello@twelveframe.studio
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/bijeshnarayanan/30min?month=2026-11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-teal px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ground transition-colors duration-300 hover:bg-ink"
              >
                Book a call
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 border border-ink/20 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-teal hover:text-teal"
              >
                See the work
              </a>
            </div>

            <div className="mt-10 border-t border-ink/10 pt-5">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink/35">
                Studio
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink/55">
                London, UK
                <br />
                Working worldwide
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
