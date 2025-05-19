import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Replace with your EmailJS credentials
    const SERVICE_ID = 'service_fw6moqt'
    const TEMPLATE_ID = 'template_p8vahyl'
    const PUBLIC_KEY = 'inh4dcUSuj3ndBnGX'

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitResult({
          success: true,
          message: 'Thank you for your message. We will contact you soon.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
        setIsSubmitting(false)
        setTimeout(() => setSubmitResult(null), 5000)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setSubmitResult({
          success: false,
          message: 'Something went wrong. Please try again later.',
        })
        setIsSubmitting(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            placeholder="+91 9758950611"
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            placeholder="Company Inc."
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          placeholder="Please provide details about your inquiry..."
        ></textarea>
      </div>

      {submitResult && (
        <div className={`p-4 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {submitResult.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 text-white transition duration-300 rounded-md bg-secondary hover:bg-secondary-dark disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
