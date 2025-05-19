import { FiBarChart2, FiDollarSign, FiTarget, FiTrendingUp, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import CaseStudyCard from '../components/ui/CaseStudyCard'
import TeamCard from '../components/ui/TeamCard'
// import img1 from '../assets/team/ishu.jpg'
// import img2 from '../assets/team/ankit.png'
// import img3 from '../assets/team/sarabjotsingh.png'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen text-white bg-primary">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              data-aos="fade-up"
            >
              Strategic Financial Advisory & Fund Arrangement
            </h1>
            <p
              className="mb-8 text-xl text-gray-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Helping businesses navigate complex financial landscapes and secure the capital they need to grow and succeed.
            </p>
            <div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/contact" className="btn btn-accent">
                Request Consultation
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center" data-aos="fade-up">
              <div className="text-4xl font-bold text-primary">200+</div>
              <p className="mt-2 text-gray-600">Successful Projects</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-primary">$2B+</div>
              <p className="mt-2 text-gray-600">Funds Arranged</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="mt-2 text-gray-600">Financial Experts</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-primary">15+</div>
              <p className="mt-2 text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div data-aos="fade-right">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="About Ezra Consultancy"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
            <div data-aos="fade-left">
              <SectionHeading
                title="Who We Are"
                subtitle="A premier financial advisory firm dedicated to your success"
                center={false}
              />
              <p className="mb-6 text-gray-600">
                Founded in 2010, Ezra Consultancy has grown to become a trusted partner for businesses seeking financial guidance and fund arrangement solutions. Our team of experienced professionals brings together decades of expertise in finance, investment banking, and strategic consulting.
              </p>
              <p className="mb-8 text-gray-600">
                We believe that every business has unique financial needs and challenges. That's why we take a personalized approach to each client, developing tailored strategies that align with their specific goals and circumstances.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start">
                  <FiCheckCircle className="mt-1 mr-3 text-secondary" size={20} />
                  <p>Expert Financial Advisors</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="mt-1 mr-3 text-secondary" size={20} />
                  <p>Tailored Solutions</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="mt-1 mr-3 text-secondary" size={20} />
                  <p>Global Network</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="mt-1 mr-3 text-secondary" size={20} />
                  <p>Proven Track Record</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive financial solutions tailored to your business needs"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Financial Advisory"
              description="Strategic financial guidance to optimize your company's performance and achieve sustainable growth."
              icon={<FiBarChart2 size={24} />}
              link="/services#financial-advisory"
            />
            <ServiceCard
              title="Fund Arrangement"
              description="Access to a wide range of funding options including debt, equity, and alternative financing solutions."
              icon={<FiDollarSign size={24} />}
              link="/services#fund-arrangement"
            />
            <ServiceCard
              title="Merger & Acquisition"
              description="Expert guidance throughout the M&A process, from target identification to post-merger integration."
              icon={<FiUsers size={24} />}
              link="/services#mergers-acquisitions"
            />
            <ServiceCard
              title="Strategy Consulting"
              description="Develop robust business strategies to navigate market challenges and capitalize on opportunities."
              icon={<FiTarget size={24} />}
              link="/services#strategy-consulting"
            />
            <ServiceCard
              title="Financial Restructuring"
              description="Optimize your capital structure and improve financial health through strategic restructuring."
              icon={<FiTrendingUp size={24} />}
              link="/services#restructuring"
            />
            <ServiceCard
              title="Market Entry Advisory"
              description="Comprehensive guidance for businesses looking to expand into new markets and territories."
              icon={<FiBarChart2 size={24} />}
              link="/services#market-entry"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Case Studies"
            subtitle="Real results we've delivered for our clients"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CaseStudyCard
              title="$50M Growth Capital for Tech Startup"
              category="Fund Arrangement"
              description="Helped a fast-growing technology startup secure $50M in Series B funding to expand operations and accelerate product development."
              image="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/cases/tech-startup-funding"
            />
            <CaseStudyCard
              title="Strategic Merger in Healthcare Sector"
              category="M&A Advisory"
              description="Advised on the successful merger of two regional healthcare providers, creating a market leader with improved operational efficiency."
              image="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/cases/healthcare-merger"
            />
            <CaseStudyCard
              title="Financial Restructuring for Manufacturing Firm"
              category="Restructuring"
              description="Developed and implemented a comprehensive restructuring plan that reduced debt by 40% and improved cash flow for a mid-size manufacturer."
              image="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/cases/manufacturing-restructuring"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/cases" className="btn btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about working with us"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Ezra Consultancy was instrumental in helping us secure the funding we needed to scale our operations. Their expertise and network of connections made all the difference."
              author="Sarah Johnson"
              position="CEO"
              company="TechInnovate Solutions"
              image="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TestimonialCard
              quote="The strategic guidance we received from Ezra was exceptional. They took the time to understand our business and delivered solutions that were perfectly aligned with our goals."
              author="Michael Chen"
              position="CFO"
              company="Global Manufacturing Inc."
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TestimonialCard
              quote="Working with Ezra on our merger was a seamless experience. Their attention to detail and deep industry knowledge helped us navigate a complex transaction with confidence."
              author="James Wilson"
              position="President"
              company="Healthcare Partners"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts behind our success"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <TeamCard
              name="Ishu Pachouri"
              position="Managing Director"
              image="/teams/ishu.jpg"
              linkedin="https://linkedin.com"
              twitter="https://twitter.com"
            />
            <TeamCard
              name="Ankit Pachouri"
              position="Managing Director"
              image="/teams/ankit.png"
              linkedin="https://linkedin.com"
              twitter="https://twitter.com"
            />
            <TeamCard
              name="Sarabjot Singh"
              position="Founder & CEO"
              image="/teams/sarabjotsingh.png"
              linkedin="https://linkedin.com"
              twitter="https://twitter.com"
            />
            <TeamCard
              name="XYZ"
              position="Human Resource Manager"
              image="https://placehold.co/288x300"
              linkedin="#"
              twitter="#"
            />

          </div>
          <div className="flex justify-center mt-12">
            <Link to="/about#team" className="btn btn-primary">
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Financial Future?</h2>
            <p className="mb-8 text-xl text-gray-300">
              Schedule a consultation with our experts to discuss your business needs and how we can help you achieve your financial goals.
            </p>
            <Link to="/contact" className="btn btn-accent">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage