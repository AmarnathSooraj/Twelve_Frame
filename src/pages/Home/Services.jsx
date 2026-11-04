import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'

const services = [
  {
    number: '01',
    title: 'Campaign films',
    description: 'Launch films, from idea to final grade.',
    deliverables: 'Concept · Direction · Post',
  },
  {
    number: '02',
    title: 'Product films',
    description: 'Product stories and demos that hold attention.',
    deliverables: 'Script · Edit · Sound',
  },
  {
    number: '03',
    title: 'Social reels',
    description: 'Platform-native cutdowns and hooks.',
    deliverables: '9:16 · Captions · Variants',
  },
  {
    number: '04',
    title: 'Always-on output',
    description: 'Monthly content and localisation.',
    deliverables: 'Retainer · Localisation · Delivery',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionHeading
                index="02"
                eyebrow="Services"
                title="What we make."
                description="From concept to final cut, we handle every step of the production pipeline in-house — strategy, shoot, edit, motion, and delivery."
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 border-t border-ink/10 pt-5">
                <p className="max-w-xs text-base leading-relaxed text-ink/50">
                  Most start with a 20-minute call.
                </p>
                <a
                  href="#contact"
                  className="group mt-5 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-teal"
                >
                  <span className="link-draw">Send a brief</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-ink/15">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 70}>
                <div className="group grid gap-4 border-b border-ink/10 py-8 sm:grid-cols-[2.5rem_1fr_1.15fr] sm:gap-8 sm:py-10">
                  <span className="font-mono text-[12px] text-ink/30">
                    {service.number}
                  </span>

                  <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.04em] text-ink transition-colors duration-300 group-hover:text-teal sm:text-[1.7rem]">
                    {service.title}
                  </h3>

                  <div>
                    <p className="max-w-md text-base leading-relaxed text-ink/55">
                      {service.description}
                    </p>
                    <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/35">
                      {service.deliverables}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
