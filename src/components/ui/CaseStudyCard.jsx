import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const CaseStudyCard = ({ title, category, description, image, link = '/cases' }) => {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-soft hover:shadow-medium" data-aos="fade-up">
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 px-3 py-1 m-4 text-xs font-medium text-white rounded bg-secondary">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
        <p className="mb-4 text-gray-600 line-clamp-3">{description}</p>
        <Link 
          to={link} 
          className="flex items-center font-medium text-secondary hover:underline"
        >
          Read Case Study <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default CaseStudyCard