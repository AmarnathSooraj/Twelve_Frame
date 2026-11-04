import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'

const faqs = [
  {
    question: 'How fast can you turn a film around?',
    answer:
      'Most films take 7—10 working days. Campaigns run 3—4 weeks.',
  },
  {
    question: 'How is AI used in the work?',
    answer:
      'Quietly — versioning, clean-up and pre-vis. People finish every frame.',
  },
  {
    question: 'What do you need from us to start?',
    answer:
      'A rough brief, brand assets and one decision-maker.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="section-light scroll-mt-24 border-t border-ink/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionHeading
                index="03"
                eyebrow="FAQ"
                title="Questions, answered."
                description="Common questions about timelines, process, and how we work. Still curious about something specific? Get in touch."
                tone="light"
              />
            </Reveal>

            <Reveal delay={120}>
              <a
                href="mailto:hello@twelveframe.studio"
                className="group mt-8 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-teal"
              >
                <span className="link-draw">Talk to a human</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Reveal className="border-t border-ink/15">
            {faqs.map((faq, index) => {
              const open = openIndex === index

              return (
                <div key={faq.question} className="border-b border-ink/10">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6"
                  >
                    <span
                      className={`max-w-2xl text-base leading-snug transition-colors duration-300 sm:text-[18px] ${open ? 'text-ink' : 'text-ink/70 group-hover:text-ink/85'
                        }`}
                    >
                      {faq.question}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={`mt-1 h-4 w-4 shrink-0 transition-all duration-300 ${open
                        ? 'rotate-45 text-teal'
                        : 'text-ink/60 group-hover:text-ink'
                        }`}
                    />
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    aria-hidden={!open}
                    className={`grid transition-all duration-300 ease-out ${open
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-10 text-base leading-relaxed text-ink/70">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
