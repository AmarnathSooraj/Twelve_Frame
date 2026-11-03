import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  variant = 'up',
  threshold = 0.15,
  once = true,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold])

  const variants = {
    up: '',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
    clip: 'reveal-clip',
  }

  return (
    <Tag
      ref={ref}
      className={`reveal ${variants[variant] || ''} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
