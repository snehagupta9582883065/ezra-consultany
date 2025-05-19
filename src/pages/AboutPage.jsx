import { FiCheck, FiTarget, FiUsers, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'
import TeamCard from '../components/ui/TeamCard'
import img1 from '../assets/team/ishu.jpg'
import img2 from '../assets/team/ankit.png'
import img3 from '../assets/team/sarabjotsingh.png'

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white bg-primary">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl" data-aos="fade-up">About Ezra Consultancy</h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              A premier financial advisory firm with a proven track record of delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div data-aos="fade-right">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Our Story"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
            <div data-aos="fade-left">
              <SectionHeading
                title="Our Story"
                subtitle=""
                center={false}
              />
              <p className="mb-6 text-gray-600">
                Ezra Consultancy was founded in 2010 by a team of experienced financial professionals who shared a vision: to create a consultancy that truly puts clients first, delivering tailored financial solutions with integrity and excellence.
              </p>
              <p className="mb-6 text-gray-600">
                Over the past decade, we've grown from a small advisory firm to a leading name in financial consultancy, serving clients across various industries and geographies. Our growth has been driven by our unwavering commitment to our clients' success and our ability to adapt to changing market dynamics.
              </p>
              <p className="text-gray-600">
                Today, with offices in major financial hubs and a team of over 50 experts, we continue to uphold the values that defined us from day one: client focus, integrity, excellence, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg shadow-medium" data-aos="fade-up">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-primary">
                <FiTarget size={24} />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-primary">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted financial advisory partner for businesses seeking sustainable growth and financial excellence, recognized for our integrity, expertise, and client-centered approach.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-medium" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-primary">
                <FiTarget size={24} />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with strategic financial guidance and innovative funding solutions that enable them to navigate challenges, seize opportunities, and achieve their full potential in an ever-changing global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center transition-transform duration-300 border border-gray-200 rounded-lg hover:transform hover:scale-105" data-aos="fade-up">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-primary">
                <FiUsers size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Client Focus</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, developing deep understandings of their needs and delivering solutions that exceed expectations.
              </p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 border border-gray-200 rounded-lg hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-primary">
                <FiCheck size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our interactions, building relationships based on trust, transparency, and honesty.
              </p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 border border-gray-200 rounded-lg hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-primary">
                <FiTrendingUp size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, continuously improving our knowledge, processes, and services to deliver superior results.
              </p>
            </div>
            <div className="p-6 text-center transition-transform duration-300 border border-gray-200 rounded-lg hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-primary">
                <FiTrendingUp size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovative thinking and creative solutions, staying ahead of market trends to provide our clients with cutting-edge financial strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="team" className="section bg-gray-100">
        <div className="container">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts guiding our company to success"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <TeamCard
              name="Ishu Pachouri"
              position="Managing Director"
              image={img1}
              linkedin="https://linkedin.com"
              twitter="https://twitter.com"
            />
            <TeamCard
              name="Ankit Pachouri"
              position="Managing Director"
              image={img2}
              linkedin="https://linkedin.com"
              twitter="https://twitter.com"
            />
            <TeamCard
              name="Sarabjot Singh"
              position="Founder & CEO"
              image={img3}
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
              <TeamCard
              name="XYZ"
              position="Human Resource Manager"
              image="https://placehold.co/288x300"
              linkedin="#"
              twitter="#"
            />
              <TeamCard
              name="XYZ"
              position="Human Resource Manager"
              image="https://placehold.co/288x300"
              linkedin="#"
              twitter="#"
            />
              <TeamCard
              name="XYZ"
              position="Human Resource Manager"
              image="https://placehold.co/288x300"
              linkedin="#"
              twitter="#"
            />
              <TeamCard
              name="XYZ"
              position="Human Resource Manager"
              image="https://placehold.co/288x300"
              linkedin="#"
              twitter="#"
            />
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Global Presence"
            subtitle="Serving clients around the world from our strategic locations"
            center={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border border-gray-200 rounded-lg shadow-soft" data-aos="fade-up">
              <h3 className="mb-4 text-xl font-semibold text-primary">New York</h3>
              <p className="mb-2 text-gray-600">123 Finance Street</p>
              <p className="mb-2 text-gray-600">New York, NY 10001</p>
              <p className="text-gray-600">+91 9758950611</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-soft" data-aos="fade-up" data-aos-delay="100">
              <h3 className="mb-4 text-xl font-semibold text-primary">London</h3>
              <p className="mb-2 text-gray-600">45 Financial Avenue</p>
              <p className="mb-2 text-gray-600">London, EC2V 8AE</p>
              <p className="text-gray-600">+44 20 7123 4567</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-soft" data-aos="fade-up" data-aos-delay="200">
              <h3 className="mb-4 text-xl font-semibold text-primary">Singapore</h3>
              <p className="mb-2 text-gray-600">78 Marina Boulevard</p>
              <p className="mb-2 text-gray-600">Singapore 018983</p>
              <p className="text-gray-600">+65 6123 4567</p>
            </div>
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Work With Us?</h2>
            <p className="mb-8 text-xl text-gray-300">
              Join the hundreds of businesses that have transformed their financial future with Ezra Consultancy.
            </p>
            <a href="/contact" className="btn btn-accent">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage