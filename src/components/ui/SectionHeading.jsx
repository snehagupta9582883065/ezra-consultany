const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false, 
  light = false,
  className = ''
}) => {
  const alignment = center ? 'text-center' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-primary'
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-600'

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className={`section-title ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading