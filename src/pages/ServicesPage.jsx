import { FiBarChart2, FiDollarSign, FiTarget, FiTrendingUp, FiUsers, FiCheck } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'
import { Link } from 'react-router-dom'

const ServiceSection = ({ id, title, description, features, image, reversed = false }) => {
  return (
    <section id={id} className="py-16 border-b border-gray-200 last:border-b-0">
      <div className="container">
        <div className={`grid items-center grid-cols-1 gap-12 lg:grid-cols-2 ${reversed ? 'lg:grid-flow-dense' : ''}`}>
          <div className={reversed ? 'lg:col-start-2' : ''} data-aos="fade-right">
            <h2 className="mb-6 text-3xl font-bold text-primary">{title}</h2>
            <p className="mb-8 text-gray-600">{description}</p>
            <ul className="mb-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FiCheck className="flex-shrink-0 mt-1.5 mr-3 text-secondary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className={reversed ? 'lg:col-start-1' : 'lg:col-start-2'} data-aos="fade-left">
            <img 
              src={image} 
              alt={title} 
              className="w-full rounded-lg shadow-medium"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white bg-primary">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl" data-aos="fade-up">Our Services</h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              Comprehensive financial solutions tailored to help your business thrive in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="How We Help Businesses Succeed" 
            subtitle="Ezra Consultancy offers a wide range of financial advisory and fund arrangement services designed to meet the specific needs of your business."
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-medium hover:transform hover:scale-105" data-aos="fade-up">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-lg bg-primary">
                <FiBarChart2 size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Financial Advisory</h3>
              <p className="mb-6 text-gray-600">
                Strategic financial guidance to optimize your company's performance and achieve sustainable growth.
              </p>
              <a href="#financial-advisory" className="text-secondary hover:underline">
                Learn More
              </a>
            </div>
            <div className="p-8 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-medium hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-lg bg-primary">
                <FiDollarSign size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Fund Arrangement</h3>
              <p className="mb-6 text-gray-600">
                Access to a wide range of funding options including debt, equity, and alternative financing solutions.
              </p>
              <a href="#fund-arrangement" className="text-secondary hover:underline">
                Learn More
              </a>
            </div>
            <div className="p-8 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-medium hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-lg bg-primary">
                <FiUsers size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Merger & Acquisition</h3>
              <p className="mb-6 text-gray-600">
                Expert guidance throughout the M&A process, from target identification to post-merger integration.
              </p>
              <a href="#mergers-acquisitions" className="text-secondary hover:underline">
                Learn More
              </a>
            </div>
            <div className="p-8 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-medium hover:transform hover:scale-105" data-aos="fade-up">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-lg bg-primary">
                <FiTarget size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Strategy Consulting</h3>
              <p className="mb-6 text-gray-600">
                Develop robust business strategies to navigate market challenges and capitalize on opportunities.
              </p>
              <a href="#strategy-consulting" className="text-secondary hover:underline">
                Learn More
              </a>
            </div>
            <div className="p-8 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-medium hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-lg bg-primary">
                <FiTrendingUp size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Financial Restructuring</h3>
              <p className="mb-6 text-gray-600">
                Optimize your capital structure and improve financial health through strategic restructuring.
              </p>
              <a href="#restructuring" className="text-secondary hover:underline">
                Learn More
              </a>
            </div>
            <div className="p-8 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-medium hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-lg bg-primary">
                <FiBarChart2 size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Market Entry Advisory</h3>
              <p className="mb-6 text-gray-600">
                Comprehensive guidance for businesses looking to expand into new markets and territories.
              </p>
              <a href="#market-entry" className="text-secondary hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <ServiceSection 
        id="financial-advisory"
        title="Financial Advisory"
        description="Our financial advisory services provide comprehensive guidance to help businesses optimize their financial performance, manage risks, and make informed strategic decisions. We work closely with your team to understand your unique challenges and develop tailored solutions that drive sustainable growth."
        features={[
          "Financial planning and analysis",
          "Cash flow optimization",
          "Risk management strategies",
          "Financial modeling and forecasting",
          "Capital allocation advice",
          "Financial performance improvement"
        ]}
        image="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <ServiceSection 
        id="fund-arrangement"
        title="Fund Arrangement"
        description="Our fund arrangement services connect businesses with the capital they need to fuel growth, fund acquisitions, or navigate challenging financial situations. With our extensive network of investors and financial institutions, we help identify and secure the most appropriate funding solutions for your specific requirements."
        features={[
          "Debt financing (senior, mezzanine, subordinated)",
          "Equity capital (private equity, venture capital)",
          "Alternative financing solutions",
          "Structured finance arrangements",
          "Project financing",
          "Working capital financing"
        ]}
        image="https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1600"
        reversed={true}
      />

      <ServiceSection 
        id="mergers-acquisitions"
        title="Mergers & Acquisitions"
        description="Our M&A advisory services guide businesses through every stage of the transaction process, from strategic planning and target identification to due diligence, negotiation, and post-merger integration. We help you maximize value and minimize risks in these complex transactions."
        features={[
          "M&A strategy development",
          "Target identification and screening",
          "Comprehensive due diligence",
          "Transaction structuring and valuation",
          "Negotiation support",
          "Post-merger integration planning"
        ]}
        image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <ServiceSection 
        id="strategy-consulting"
        title="Strategy Consulting"
        description="Our strategy consulting services help businesses develop clear, actionable plans to achieve their long-term objectives. We combine deep industry knowledge with rigorous analysis to identify opportunities for growth and competitive advantage in today's dynamic business environment."
        features={[
          "Market analysis and competitive positioning",
          "Growth strategy development",
          "Business model innovation",
          "Digital transformation strategy",
          "Market entry and expansion planning",
          "Organizational strategy and change management"
        ]}
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
        reversed={true}
      />

      <ServiceSection 
        id="restructuring"
        title="Financial Restructuring"
        description="Our financial restructuring services help businesses overcome financial challenges, improve operational performance, and position themselves for sustainable growth. We develop comprehensive restructuring plans that address both immediate liquidity needs and long-term financial health."
        features={[
          "Debt restructuring and refinancing",
          "Operational restructuring",
          "Cost reduction strategies",
          "Working capital optimization",
          "Business turnaround planning",
          "Stakeholder negotiation and management"
        ]}
        image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <ServiceSection 
        id="market-entry"
        title="Market Entry Advisory"
        description="Our market entry advisory services provide comprehensive guidance for businesses looking to expand into new geographical markets or industry segments. We help you navigate the complexities of international expansion with tailored strategies that minimize risks and maximize opportunities."
        features={[
          "Market opportunity assessment",
          "Regulatory and compliance guidance",
          "Local partnership identification",
          "Market entry strategy development",
          "Risk assessment and mitigation planning",
          "Localization and adaptation strategies"
        ]}
        image="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600"
        reversed={true}
      />

      {/* CTA Section */}
      <section className="relative py-20 text-white bg-primary">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Explore How We Can Help Your Business?</h2>
            <p className="mb-8 text-xl text-gray-300">
              Contact our team of experts to discuss your specific needs and discover how our services can drive your financial success.
            </p>
            <Link to="/contact" className="btn btn-accent">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage