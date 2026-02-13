import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

interface AnimatedContainerProps {
  children: React.ReactNode
  className?: string
  animationClass?: string
  delay?: number
  duration?: number
  triggerOnce?: boolean
  threshold?: number
}

export const AnimatedContainer = ({
  children,
  className,
  animationClass = 'animate-fade-in-up',
  delay = 0,
  duration = 600,
  triggerOnce = true,
  threshold = 0.1,
}: AnimatedContainerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [setRef, isVisible] = useScrollObserver({ threshold, triggerOnce })

  return (
    <div
      ref={(node) => {
        ref.current = node
        setRef(node)
      }}
      className={cn(
        'opacity-0',
        className,
        isVisible && [animationClass, 'opacity-100'],
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
