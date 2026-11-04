import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

export default function AmbientVideo({
  src,
  poster,
  label = 'video',
  meta,
  variant = 'card',
  priority = false,
  controls = true,
  className = '',
  videoClassName = '',
  controlsClassName = '',
  children,
}) {
  const videoRef = useRef(null)
  const progressRef = useRef(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    // Safari and some Chrome builds ignore the JSX `muted` attribute when
    // autoplaying, so set the property directly before playback starts.
    video.muted = true
    video.defaultMuted = true

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onTimeUpdate = () => {
      if (video.duration && progressRef.current) {
        // Update the bar directly so playback doesn't re-render the view.
        progressRef.current.style.transform = `scaleX(${video.currentTime / video.duration})`
      }
    }

    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    // Only the background variant renders a progress bar, so avoid causing
    // four re-renders per second for every playing card video.
    if (variant === 'background') {
      video.addEventListener('timeupdate', onTimeUpdate)
    }

    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [variant])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduced) return undefined

    // On phones, autoplaying every card in view means several videos decode at
    // once, which makes scrolling stutter. Only the full-bleed background video
    // autoplays there; card videos wait for a tap on the play control.
    const isPhone = window.matchMedia('(max-width: 767px)').matches
    const canAutoplay = !isPhone || variant === 'background'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (canAutoplay && !userPaused.current) video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [reduced, variant])

  const toggle = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
    } else {
      userPaused.current = true
      video.pause()
    }
  }

  const action = playing ? 'Pause' : 'Play'

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload={priority ? 'auto' : 'metadata'}
        aria-hidden="true"
        tabIndex={-1}
        className={videoClassName}
      >
        <track kind="captions" />
      </video>

      {children}

      {variant === 'background' ? (
        controls ? (
          <button
            type="button"
            onClick={toggle}
            aria-label={`${action} ${label}`}
            className={`group flex items-center gap-3 rounded-full border border-ink/20 bg-ground/45 px-4 py-2.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/75 backdrop-blur-md transition-colors hover:border-ink/40 hover:text-ink ${controlsClassName}`}
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-ink/10">
              {playing ? (
                <Pause className="h-2.5 w-2.5 fill-current" />
              ) : (
                <Play className="h-2.5 w-2.5 fill-current" />
              )}
            </span>
            <span>{label}</span>
            {meta ? (
              <span className="text-ink/35" aria-hidden="true">
                {meta}
              </span>
            ) : null}
          </button>
        ) : null
      ) : (
        <button
          type="button"
          onClick={toggle}
          aria-label={`${action} ${label}`}
          className={`grid h-9 w-9 place-items-center rounded-full border border-ink/25 bg-ground/40 text-ink/80 opacity-80 backdrop-blur-md transition-all hover:border-ink/50 hover:bg-ground/60 hover:text-ink focus-visible:opacity-100 ${controlsClassName || 'absolute right-3 top-3'}`}
        >
          {playing ? (
            <Pause className="h-3 w-3 fill-current" />
          ) : (
            <Play className="h-3 w-3 fill-current" />
          )}
        </button>
      )}

      {variant === 'background' ? (
        <div className="absolute inset-x-0 bottom-0 h-px bg-ink/10" aria-hidden="true">
          <div
            ref={progressRef}
            className="h-full origin-left bg-teal/70 transition-transform duration-200 ease-linear"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      ) : null}
    </div>
  )
}
