import { useEffect, useState, useRef } from 'react'

interface UseScrollObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollObserver = (options?: UseScrollObserverOptions) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options?.triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!options?.triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? '0px',
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [options])

  const setRef = (node: HTMLElement | null) => {
    elementRef.current = node
  }

  return [setRef, isVisible] as const
}
