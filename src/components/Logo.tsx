import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Waves } from 'lucide-react'

export const Logo = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Link
      to="/"
      onClick={handleLogoClick}
      className="flex items-center space-x-2 group"
    >
      <Waves className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-105" />
      <span className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
        SimpliFlow
      </span>
    </Link>
  )
}
