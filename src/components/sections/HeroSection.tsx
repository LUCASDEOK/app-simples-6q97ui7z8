import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedContainer } from '@/components/ui/animated-container'

export const HeroSection = () => {
  const handleScrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-animated-gradient"
    >
      <div className="container mx-auto px-4 text-center">
        <AnimatedContainer>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Unlock Your Potential with SimpliFlow
          </h1>
        </AnimatedContainer>
        <AnimatedContainer delay={200}>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Your all-in-one companion for effortless productivity and focus.
          </p>
        </AnimatedContainer>
        <AnimatedContainer
          delay={400}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold"
            onClick={() => handleScrollTo('#contact')}
          >
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-base font-semibold border-2"
            onClick={() => handleScrollTo('#features')}
          >
            Learn More
          </Button>
        </AnimatedContainer>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={() => handleScrollTo('#features')}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-foreground/50" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
