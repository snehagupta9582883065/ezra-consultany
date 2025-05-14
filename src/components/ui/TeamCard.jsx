import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const TeamCard = ({ name, position, image, linkedin, twitter }) => {
  return (
    <div className="team-card" data-aos="fade-up">
      <div className="overflow-hidden" style={{ height: '300px' }}>
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-semibold text-primary">{name}</h3>
        <p className="mb-4 text-gray-600">{position}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors duration-300 border rounded-full hover:border-secondary hover:text-secondary"
            >
              <FaLinkedinIn size={14} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors duration-300 border rounded-full hover:border-secondary hover:text-secondary"
            >
              <FaTwitter size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamCard