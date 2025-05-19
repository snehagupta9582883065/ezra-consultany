import { Link } from 'react-router-dom'

const Logo = ({ variant = 'dark' }) => {
  const textColor = variant === 'dark' ? 'text-[#c9a96e]' : 'text-white'
  const accentColor = 'text-secondary'

  return (
    <Link to="/" className="flex items-center">
      <span className={`text-2xl font-bold ${textColor}`}>
        Ezra
        <span className={accentColor}>.</span>
      </span>
    </Link>
  )
}

export default Logo