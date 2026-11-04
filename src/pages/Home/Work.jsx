import { ArrowUpRight } from 'lucide-react'
import AmbientVideo from '../../components/AmbientVideo'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'

const projects = [
  {
    title: 'Northwind',
    category: 'Launch film',
    year: '2026',
    detail: 'One shoot. Every format, in a week.',
    src: '/media/work-northwind.mp4',
    poster: '/media/work-northwind.jpg',
    desktopRatio: 'md:aspect-[16/10]',
  },
  {
    title: 'Lumen',
    category: 'Brand campaign',
    year: '2025',
    detail: 'Portrait series for a fragrance house.',
    src: '/media/work-lumen.mp4',
    poster: '/media/work-lumen.jpg',
    desktopRatio: 'md:aspect-[4/5]',
  },
  {
    title: 'Halcyon',
    category: 'Studio film',
    year: '2026',
    detail: 'Two days with the crew, in and out of the studio.',
    src: '/media/work-halcyon.mp4',
    poster: '/media/work-halcyon.jpg',
    desktopRatio: 'md:aspect-square',
  },
  {
    title: 'Arcadia',
    category: 'Product film',
    year: '2025',
    detail: 'One idea, nine markets, one fortnight.',
    src: '/media/work-arcadia.mp4',
    poster: '/media/work-arcadia.jpg',
    desktopRatio: 'md:aspect-[16/9]',
  },
  {
    title: 'Solstice',
    category: 'Location film',
    year: '2024',
    detail: 'A location study shot across the high desert.',
    src: '/media/work-solstice.mp4',
    poster: '/media/work-solstice.jpg',
    desktopRatio: 'md:aspect-[3/4]',
  },
]

function ProjectCard({ project, index }) {
  return (
    <article className="group relative overflow-hidden transition-colors duration-500 hover:z-10">
      <AmbientVideo
        src={project.src}
        poster={project.poster}
        label={`${project.title} — ${project.category}`}
        className={`aspect-[16/10] ${project.desktopRatio} on-dark`}
        videoClassName="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
        controlsClassName="absolute right-4 top-4 z-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ground via-ground/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ground/45 to-transparent"
        />

        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-ink/15 bg-ground/45 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/75">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="rounded-full border border-ink/15 bg-ground/45 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/75">
              {project.year}
            </span>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                {project.category}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium leading-tight tracking-[-0.035em] text-ink transition-colors duration-300 group-hover:text-teal sm:text-2xl">
                {project.title}
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-ground/45 text-ink/80 transition-all duration-300 hover:border-teal hover:bg-teal hover:text-ground group-hover:border-teal group-hover:bg-teal group-hover:text-ground"
              aria-label={`View the ${project.title} project`}
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </AmbientVideo>
    </article>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      className="section-light scroll-mt-24 border-t border-ink/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Work"
            title="Recent works."
            description="Recent films, shot and cut end-to-end in-house."
            tone="light"
          />
        </Reveal>
      </div>

      <div className="mt-14 columns-1 gap-3 md:columns-2 lg:columns-3 lg:mt-20">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 80}
            className="mb-3 break-inside-avoid"
          >
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
