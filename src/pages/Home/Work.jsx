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
    span: 'md:col-span-7',
    ratio: 'aspect-[16/10]',
    offset: '',
  },
  {
    title: 'Lumen',
    category: 'Brand campaign',
    year: '2025',
    detail: 'Portrait series for a fragrance house.',
    src: '/media/work-lumen.mp4',
    poster: '/media/work-lumen.jpg',
    span: 'md:col-span-4 md:col-start-9',
    ratio: 'aspect-[4/5]',
    offset: 'md:mt-20',
  },
  {
    title: 'Halcyon',
    category: 'Studio film',
    year: '2026',
    detail: 'Two days with the crew, in and out of the studio.',
    src: '/media/work-halcyon.mp4',
    poster: '/media/work-halcyon.jpg',
    span: 'md:col-span-5 md:col-start-1',
    ratio: 'aspect-[4/5]',
    offset: '',
  },
  {
    title: 'Arcadia',
    category: 'Product film',
    year: '2025',
    detail: 'One idea, nine markets, one fortnight.',
    src: '/media/work-arcadia.mp4',
    poster: '/media/work-arcadia.jpg',
    span: 'md:col-span-7 md:col-start-6',
    ratio: 'aspect-[16/10]',
    offset: 'md:mt-16',
  },
  {
    title: 'Solstice',
    category: 'Location film',
    year: '2024',
    detail: 'A location study shot across the high desert.',
    src: '/media/work-solstice.mp4',
    poster: '/media/work-solstice.jpg',
    span: 'md:col-span-12 md:col-start-1',
    ratio: 'aspect-[21/9]',
    offset: '',
  },
]

function ProjectCard({ project, index }) {
  return (
    <article className="group">
      <AmbientVideo
        src={project.src}
        poster={project.poster}
        label={`${project.title} — ${project.category}`}
        className={`${project.ratio} on-dark rounded-sm ring-1 ring-inset ring-ink/10`}
        videoClassName="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        controlsClassName="absolute right-3 top-3 z-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ground/75 via-transparent to-ground/35"
        />

        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink/70">
            {String(index + 1).padStart(2, '0')} / {project.year}
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink/70">
            {project.category}
          </span>
        </div>
      </AmbientVideo>

      <div className="mt-5 flex items-start justify-between gap-6 border-t border-ink/10 pt-4">
        <div>
          <h3 className="font-display text-xl font-medium tracking-[-0.035em] text-ink transition-colors duration-300 group-hover:text-teal sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-sm text-base leading-relaxed text-ink/70">
            {project.detail}
          </p>
        </div>

        <a
          href="#contact"
          className="mt-1 inline-flex shrink-0 items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-teal"
          aria-label={`View the ${project.title} project`}
        >
          View
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      className="section-light scroll-mt-24 border-t border-ink/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Work"
            title="Recent work."
            description="Five recent films, shot and cut in-house."
            tone="light"
          />
        </Reveal>

        <Reveal delay={120}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-ink"
          >
            <span className="link-draw">Start a project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-x-5 gap-y-16 md:grid-cols-12 md:items-start md:gap-x-6 md:gap-y-20 lg:mt-20">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 80}
            className={`${project.span} ${project.offset}`}
          >
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
