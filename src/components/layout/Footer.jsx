import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'
import Logo from '../ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="mb-6 text-gray-300">
              Ezra Consultancy delivers cutting-edge financial advisory and fund arrangement solutions tailored to help businesses thrive in today's dynamic market.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full border-gray-600 text-gray-300 hover:bg-secondary hover:border-secondary hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full border-gray-600 text-gray-300 hover:bg-secondary hover:border-secondary hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border rounded-full border-gray-600 text-gray-300 hover:bg-secondary hover:border-secondary hover:text-white">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-secondary">Financial Advisory</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-secondary">Fund Arrangement</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-secondary">Merger & Acquisition</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-secondary">Strategy Consulting</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-secondary">Market Entry Advisory</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 transition-colors hover:text-secondary">About Us</Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-300 transition-colors hover:text-secondary">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 transition-colors hover:text-secondary">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 transition-colors hover:text-secondary">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 transition-colors hover:text-secondary">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <FiMapPin className="mr-3 text-secondary" size={20} />
                <span className="text-gray-300">
                   K-33, First Floor, Jangpura Extension, South Delhi, New Delhi - 110014
                </span>
              </li>
              <li className="flex">
                <FiPhone className="mr-3 text-secondary" size={20} />
                <a href="tel:+919758950611" className="text-gray-300 hover:text-secondary transition-colors">
                  +91 9758950611
                </a>
              </li>
              <li className="flex">
                <FiMail className="mr-3 text-secondary" size={20} />
                <a href="mailto:ankit@ezraconsultancy.in" className="text-gray-300 hover:text-secondary transition-colors">
                  ankit@ezraconsultancy.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-700">
          <div className="flex flex-col justify-between md:flex-row">
            <p className="text-gray-400">
              &copy; {currentYear} Ezra Consultancy. All rights reserved.
            </p>
            <div className="mt-4 space-x-6 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer