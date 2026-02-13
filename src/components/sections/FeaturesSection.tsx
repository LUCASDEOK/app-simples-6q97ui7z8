import { CheckCircle, Clock, BarChart, Users, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AnimatedContainer } from '@/components/ui/animated-container'

const features = [
  {
    icon: CheckCircle,
    title: 'Intuitive Task Management',
    description:
      'Easily organize, prioritize, and track your tasks with a clean and simple interface.',
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description:
      'Plan your day effectively with our intelligent calendar integration and reminders.',
  },
  {
    icon: BarChart,
    title: 'Progress Tracking',
    description:
      'Visualize your productivity with insightful charts and reports to stay motivated.',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description:
      'Work together with your team, share tasks, and keep everyone in the loop.',
  },
  {
    icon: Zap,
    title: 'Focus Mode',
    description:
      'Eliminate distractions and concentrate on what matters most with our dedicated focus timer.',
  },
]

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Key Features That Make a Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to be more productive, all in one place.
          </p>
        </AnimatedContainer>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedContainer key={feature.title} delay={index * 150}>
              <Card className="h-full text-center hover:shadow-elevation hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="flex items-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
