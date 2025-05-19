import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/ui/ContactForm'

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white bg-primary">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl" data-aos="fade-up">Contact Us</h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              Get in touch with our team of financial experts to discuss how we can help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div data-aos="fade-right">
              <SectionHeading
                title="Get In Touch"
                subtitle="We're here to answer your questions and discuss how we can help your business"
                center={false}
              />

              <div className="mb-8 space-y-6">
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary-light">
                    <FiMapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-primary">Our Office</h3>
                    <p className="text-gray-600">
                      Jaypee Aman, Sector 151, Noida, <br /> Uttar Pradesh 201310
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary-light">
                    <FiPhone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-primary">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919758950611" className="transition-colors hover:text-secondary">
                        +91 9758950611
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary-light">
                    <FiMail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-primary">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:ishupachouri816@gmail.com" className="transition-colors hover:text-secondary">
                        ishupachouri816@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary-light">
                    <FiClock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-primary">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg">
                <h3 className="mb-4 text-lg font-semibold text-primary">Global Offices</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-primary">London</h4>
                    <p className="text-sm text-gray-600">
                      45 Financial Avenue<br />
                      London, EC2V 8AE<br />
                      United Kingdom
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Singapore</h4>
                    <p className="text-sm text-gray-600">
                      78 Marina Boulevard<br />
                      Singapore 018983<br />
                      Singapore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="p-8 bg-white rounded-lg shadow-medium">
                <h2 className="mb-6 text-2xl font-bold text-primary">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.220415660563!2d77.4635149752818!3d28.442771275768827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc30041f23059%3A0xa314e0ff60f7ee79!2sN19%20Sector%20151%20Noida!5e0!3m2!1sen!2sin!4v1747636234248!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
            center={true}
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up">
                <h3 className="mb-3 text-lg font-semibold text-primary">How long does the consulting process typically take?</h3>
                <p className="text-gray-600">
                  The timeline varies depending on the specific service and the complexity of your business needs. Initial consultations usually take 1-2 weeks, while comprehensive engagements may span several months. We'll provide a detailed timeline during our initial discussions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up">
                <h3 className="mb-3 text-lg font-semibold text-primary">Do you work with businesses of all sizes?</h3>
                <p className="text-gray-600">
                  Yes, we serve businesses ranging from startups to large corporations. Our approach is tailored to meet the specific needs and scale of your business, ensuring that our solutions are appropriate and effective regardless of your company's size.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up">
                <h3 className="mb-3 text-lg font-semibold text-primary">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  We have expertise across multiple industries, including technology, healthcare, manufacturing, retail, financial services, and hospitality. Our team includes specialists with deep industry knowledge who understand the unique challenges and opportunities in each sector.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-soft" data-aos="fade-up">
                <h3 className="mb-3 text-lg font-semibold text-primary">How do your fees work?</h3>
                <p className="text-gray-600">
                  Our fee structure varies depending on the service and scope of work. We offer fixed-fee arrangements, success-based fees, and traditional hourly billing. We'll discuss the most appropriate fee structure for your needs during our initial consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Business?</h2>
            <p className="mb-8 text-xl text-gray-300">
              Our team of experts is waiting to help you achieve your financial goals and take your business to the next level.
            </p>
            <a href="tel:+919758950611" className="btn btn-accent">
              Call Us Now: +91 9758950611
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage