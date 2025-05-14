import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import CaseStudyCard from '../components/ui/CaseStudyCard'

const caseStudies = [
  {
    id: 1,
    title: "$50M Growth Capital for Tech Startup",
    category: "Fund Arrangement",
    description: "Helped a fast-growing technology startup secure $50M in Series B funding to expand operations and accelerate product development.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/tech-startup-funding"
  },
  {
    id: 2,
    title: "Strategic Merger in Healthcare Sector",
    category: "M&A Advisory",
    description: "Advised on the successful merger of two regional healthcare providers, creating a market leader with improved operational efficiency.",
    image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/healthcare-merger"
  },
  {
    id: 3,
    title: "Financial Restructuring for Manufacturing Firm",
    category: "Restructuring",
    description: "Developed and implemented a comprehensive restructuring plan that reduced debt by 40% and improved cash flow for a mid-size manufacturer.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/manufacturing-restructuring"
  },
  {
    id: 4,
    title: "Market Entry Strategy for E-commerce Platform",
    category: "Market Entry",
    description: "Developed a successful market entry strategy for an e-commerce platform expanding into Southeast Asian markets.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/ecommerce-market-entry"
  },
  {
    id: 5,
    title: "$200M Acquisition in Technology Sector",
    category: "M&A Advisory",
    description: "Advised a leading technology company on the acquisition of a complementary software provider, creating significant synergies and market advantages.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/tech-acquisition"
  },
  {
    id: 6,
    title: "Growth Strategy for Retail Chain",
    category: "Strategy Consulting",
    description: "Developed a five-year growth strategy for a national retail chain, resulting in 30% revenue increase and successful expansion into new markets.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/retail-growth-strategy"
  },
  {
    id: 7,
    title: "Debt Refinancing for Hospitality Group",
    category: "Fund Arrangement",
    description: "Structured and arranged a $150M debt refinancing package for a hospitality group, resulting in improved terms and significant interest savings.",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/hospitality-refinancing"
  },
  {
    id: 8,
    title: "Turnaround Strategy for Consumer Products Company",
    category: "Restructuring",
    description: "Designed and implemented a successful turnaround strategy for a struggling consumer products company, restoring profitability within 18 months.",
    image: "https://images.pexels.com/photos/7821489/pexels-photo-7821489.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/cases/consumer-products-turnaround"
  },
]

const CasesPage = () => {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', 'Fund Arrangement', 'M&A Advisory', 'Restructuring', 'Strategy Consulting', 'Market Entry']
  
  const filteredCases = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white bg-primary">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl" data-aos="fade-up">Case Studies</h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              Explore our success stories and learn how we've helped businesses overcome challenges and achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Client Success Stories" 
            subtitle="Real results we've delivered for businesses across various industries"
            center={true}
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2 md:space-y-0">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Case Study Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.id}
                title={caseStudy.title}
                category={caseStudy.category}
                description={caseStudy.description}
                image={caseStudy.image}
                link={caseStudy.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <SectionHeading 
            title="Our Approach" 
            subtitle="How we deliver exceptional results for our clients"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up">
              <div className="absolute flex items-center justify-center w-10 h-10 text-white rounded-full -top-5 bg-primary">
                1
              </div>
              <h3 className="mt-4 mb-4 text-xl font-semibold text-primary">Discover</h3>
              <p className="text-gray-600">
                We begin by conducting a thorough assessment of your business, identifying key challenges, opportunities, and objectives.
              </p>
            </div>
            <div className="relative p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute flex items-center justify-center w-10 h-10 text-white rounded-full -top-5 bg-primary">
                2
              </div>
              <h3 className="mt-4 mb-4 text-xl font-semibold text-primary">Strategize</h3>
              <p className="text-gray-600">
                Our experts develop a customized strategy tailored to your specific needs, combining industry best practices with innovative approaches.
              </p>
            </div>
            <div className="relative p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute flex items-center justify-center w-10 h-10 text-white rounded-full -top-5 bg-primary">
                3
              </div>
              <h3 className="mt-4 mb-4 text-xl font-semibold text-primary">Implement</h3>
              <p className="text-gray-600">
                We work alongside your team to implement the strategy, providing guidance and support throughout the process.
              </p>
            </div>
            <div className="relative p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute flex items-center justify-center w-10 h-10 text-white rounded-full -top-5 bg-primary">
                4
              </div>
              <h3 className="mt-4 mb-4 text-xl font-semibold text-primary">Optimize</h3>
              <p className="text-gray-600">
                We continuously monitor results, making adjustments as needed to ensure optimal outcomes and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 text-white bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl" data-aos="fade-up">Client Testimonial</h2>
            <div className="relative mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="text-6xl font-serif text-secondary opacity-20 absolute -top-6 left-0">"</div>
              <p className="relative z-10 text-xl italic text-gray-300">
                Ezra Consultancy was instrumental in helping us secure the funding we needed to scale our operations. Their expertise and network of connections made all the difference. The team took the time to understand our business model and crafted a funding approach that perfectly aligned with our growth strategy.
              </p>
              <div className="text-6xl font-serif text-secondary opacity-20 absolute bottom-0 right-0">"</div>
            </div>
            <div className="flex flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="200">
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Sarah Johnson" 
                className="w-16 h-16 mb-4 rounded-full"
              />
              <h4 className="text-xl font-semibold">Sarah Johnson</h4>
              <p className="text-gray-300">CEO, TechInnovate Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="p-12 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">Ready to Create Your Success Story?</h2>
                <p className="mb-8 text-gray-600">
                  Let's discuss how Ezra Consultancy can help your business overcome challenges and achieve its financial goals. Our team of experts is ready to develop a tailored solution for your specific needs.
                </p>
                <a href="/contact" className="btn btn-primary">
                  Contact Us Today
                </a>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Business Meeting" 
                  className="rounded-lg shadow-medium"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CasesPage