import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from '@/components/Logo'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -70% 0px' },
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'h-20 bg-white/80 shadow-md backdrop-blur-sm'
          : 'h-24 bg-transparent',
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavLinkClick(e, item.href)}
              className={cn(
                'text-base font-medium text-foreground transition-colors hover:text-primary relative',
                'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300',
                activeSection === item.href.substring(1) &&
                  'text-primary after:w-full',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full px-8 py-6 text-base font-semibold"
          >
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, '#contact')}
            >
              Get Started
            </a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-white p-6">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <Logo />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-6 text-lg font-semibold">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavLinkClick(e, item.href)}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full rounded-full py-6 text-lg font-semibold"
                  >
                    <a
                      href="#contact"
                      onClick={(e) => handleNavLinkClick(e, '#contact')}
                    >
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
