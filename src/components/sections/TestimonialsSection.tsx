import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { AnimatedContainer } from '@/components/ui/animated-container'

const testimonials = [
  {
    quote:
      "SimpliFlow has transformed the way I manage my projects. It's so intuitive and has boosted my productivity tenfold!",
    name: 'Sarah J.',
    title: 'Product Manager',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=1',
  },
  {
    quote:
      "Finally, a productivity app that isn't bloated with unnecessary features. SimpliFlow is clean, fast, and a joy to use.",
    name: 'Michael B.',
    title: 'Freelance Developer',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=2',
  },
  {
    quote:
      'Our team collaboration has never been smoother. The shared task lists and progress tracking are game-changers.',
    name: 'Emily R.',
    title: 'Startup Founder',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=3',
  },
]

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from people who love using SimpliFlow.
          </p>
        </AnimatedContainer>
        <AnimatedContainer delay={200} className="mt-16">
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center text-center p-6 aspect-square justify-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mb-4 border-2 border-primary"
                        />
                        <p className="text-muted-foreground italic">
                          "{testimonial.quote}"
                        </p>
                        <p className="mt-4 font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </AnimatedContainer>
      </div>
    </section>
  )
}
