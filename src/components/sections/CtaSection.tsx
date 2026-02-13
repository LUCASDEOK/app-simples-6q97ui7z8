import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { AnimatedContainer } from '@/components/ui/animated-container'

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
})

export const CtaSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast.success('Thank you for joining SimpliFlow!', {
      description: 'Check your email for more details.',
    })
    form.reset()
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <AnimatedContainer>
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Boost Your Productivity?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Join thousands of satisfied users today and experience the
            SimpliFlow difference.
          </p>
        </AnimatedContainer>
        <AnimatedContainer delay={200} className="mt-8 max-w-lg mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="py-6 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-md py-6 text-base font-semibold"
              >
                Get Started for Free
              </Button>
            </form>
          </Form>
        </AnimatedContainer>
      </div>
    </section>
  )
}
