import { AnimatedContainer } from '@/components/ui/animated-container'

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedContainer>
            <img
              src="https://img.usecurling.com/p/600/500?q=workspace%20desk%20minimalist"
              alt="Our Mission"
              className="rounded-lg shadow-elevation"
            />
          </AnimatedContainer>
          <AnimatedContainer delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At SimpliFlow, we believe that productivity tools should be
              simple, intuitive, and beautiful. Our mission is to empower
              individuals and teams to achieve their goals by providing a
              seamless and enjoyable experience.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We're dedicated to cutting through the clutter, helping you focus
              on what truly matters. We design tools that work for you, not the
              other way around.
            </p>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  )
}
