import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ServiceCard = ({ title, description, icon, link = '/services' }) => {
  return (
    <div className="service-card group" data-aos="fade-up">
      <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-lg bg-primary">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <Link 
        to={link} 
        className="flex items-center text-secondary group-hover:underline"
      >
        Learn More <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

export default ServiceCard