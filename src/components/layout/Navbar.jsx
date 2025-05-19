import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container-fluid flex items-center justify-between py-4 bg-[#0a2540] px-4 text-[#c9a96e]">
        <Link to="/" className="z-10">
          <Logo  />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          <NavLink to="/" className={({ isActive }) => 
            `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-white hover:text-secondary'}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-white hover:text-secondary'}`
          }>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => 
            `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-white hover:text-secondary'}`
          }>
            Services
          </NavLink>
          <NavLink to="/cases" className={({ isActive }) => 
            `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-white hover:text-secondary'}`
          }>
            Case Studies
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-white hover:text-secondary'}`
          }>
            Contact
          </NavLink>
        </div>

        <button className="hidden btn btn-accent md:block">
          Request Consultation
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="z-10 p-2 md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-xl font-medium ${isActive ? 'text-secondary' : 'text-gray-700'}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-xl font-medium ${isActive ? 'text-secondary' : 'text-gray-700'}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-xl font-medium ${isActive ? 'text-secondary' : 'text-gray-700'}`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/cases" 
              className={({ isActive }) => 
                `text-xl font-medium ${isActive ? 'text-secondary' : 'text-gray-700'}`
              }
              onClick={closeMenu}
            >
              Case Studies
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-xl font-medium ${isActive ? 'text-secondary' : 'text-gray-700'}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <button className="btn btn-accent mt-4" onClick={closeMenu}>
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar