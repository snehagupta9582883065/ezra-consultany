const TestimonialCard = ({ quote, author, position, company, image }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-medium" data-aos="fade-up">
      <div className="relative mb-6">
        <div className="text-5xl font-serif text-secondary opacity-20">"</div>
        <p className="relative z-10 text-gray-700">{quote}</p>
      </div>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="object-cover w-12 h-12 mr-4 rounded-full" 
        />
        <div>
          <h4 className="font-medium text-primary">{author}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard