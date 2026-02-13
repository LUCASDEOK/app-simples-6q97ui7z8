import { Link } from 'react-router-dom'
import { Twitter, Linkedin } from 'lucide-react'
import { Logo } from '@/components/Logo'

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="inline-block mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground text-sm">
              Your Daily Productivity Companion.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 SimpliFlow. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
