export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'
  const light = tone === 'light'

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span
          className={`font-mono text-[12px] uppercase tracking-[0.2em] ${
            light ? 'text-ink/70' : 'text-ink/40'
          }`}
        >
          {index ? (
            <span
              className={`mr-3 ${light ? 'text-ink/60' : 'text-ink/25'}`}
            >
              {index}
            </span>
          ) : null}
          {eyebrow}
        </span>
      ) : null}

      <h2 className="mt-4 text-balance font-display text-[clamp(1.9rem,3.6vw,3.1rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-xl text-pretty text-base leading-relaxed sm:text-[17px] ${
            light ? 'text-ink/70' : 'text-ink/55'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
