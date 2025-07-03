'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['info@badmintonclub.com', 'events@badmintonclub.com'],
      color: 'bg-cute-mint'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
      color: 'bg-cute-pink'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['123 Sports Center Ave', 'Badminton City, BC 12345'],
      color: 'bg-soft-yellow'
    },
    {
      icon: FaClock,
      title: 'Club Hours',
      details: ['Mon-Fri: 6 PM - 10 PM', 'Sat-Sun: 9 AM - 6 PM'],
      color: 'bg-gradient-to-r from-cute-mint to-cute-pink'
    }
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'bg-blue-500', label: 'Facebook' },
    { icon: FaInstagram, href: '#', color: 'bg-pink-500', label: 'Instagram' },
    { icon: FaTwitter, href: '#', color: 'bg-blue-400', label: 'Twitter' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-mint-100 via-white to-cute-pink/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-cute-mint rounded-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-cute-pink rounded-3xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-soft-yellow rounded-2xl opacity-25 animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-mint-600 max-w-4xl mx-auto leading-relaxed">
            Ready to join our badminton family? Have questions or want to learn more? 
            We&apos;d love to hear from you! 💚
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-effect rounded-3xl p-8 cute-shadow">
                <h2 className="text-3xl font-bold text-gradient mb-8">
                  Send Us a Message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-cute-mint/20 border border-cute-mint rounded-2xl">
                    <p className="text-mint-700 font-semibold">
                      ✅ Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-mint-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-cute-mint/20 focus:border-cute-mint focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-mint-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-cute-mint/20 focus:border-cute-mint focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-mint-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-cute-mint/20 focus:border-cute-mint focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-mint-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-cute-mint/20 focus:border-cute-mint focus:outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="events">Event Information</option>
                        <option value="coaching">Coaching Services</option>
                        <option value="volunteering">Volunteering</option>
                        <option value="general">General Question</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-mint-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-cute-mint/20 focus:border-cute-mint focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cute-mint to-cute-pink text-white font-semibold rounded-2xl cute-shadow cute-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-effect rounded-3xl p-8 cute-shadow">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="text-white text-lg" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-mint-700 mb-1">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-mint-600 text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-effect rounded-3xl p-8 cute-shadow">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Follow Us
                </h3>
                <p className="text-mint-600 mb-6">
                  Stay connected and see our latest updates, events, and photos!
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-12 h-12 ${social.color} rounded-2xl flex items-center justify-center text-white cute-hover`}
                      >
                        <IconComponent className="text-lg" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-3xl p-8 cute-shadow">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Quick Actions
                </h3>
                
                <div className="space-y-4">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cute-mint to-mint-500 text-white font-semibold rounded-2xl cute-shadow cute-hover">
                    Join Our Club
                  </button>
                  <button className="w-full px-6 py-3 bg-white border-2 border-cute-mint text-mint-700 font-semibold rounded-2xl cute-hover">
                    Schedule a Visit
                  </button>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cute-pink to-pink-500 text-white font-semibold rounded-2xl cute-shadow cute-hover">
                    Try a Free Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-mint-50 to-cute-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-mint-600">
              Quick answers to common questions about joining and participating
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need to be experienced to join?",
                answer: "Not at all! We welcome players of all skill levels, from complete beginners to advanced players. We have programs tailored for everyone."
              },
              {
                question: "What should I bring to my first session?",
                answer: "Just bring comfortable athletic wear and we'll provide everything else! We have spare rackets and shuttlecocks for new members to try."
              },
              {
                question: "How much does membership cost?",
                answer: "Our membership is $50/month which includes unlimited court access, all events, and coaching sessions. We also offer student discounts!"
              },
              {
                question: "When are your regular playing times?",
                answer: "We have sessions Monday-Friday 6-10 PM and weekends 9 AM-6 PM. Check our schedule for specific programs and tournaments."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-effect rounded-3xl p-6 cute-shadow">
                <h3 className="text-lg font-semibold text-mint-700 mb-3">{faq.question}</h3>
                <p className="text-mint-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 