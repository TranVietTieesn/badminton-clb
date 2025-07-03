'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { 
  FiPlay, FiUsers, FiHeart, FiStar, 
  FiMail, FiPhone, FiMapPin, FiClock, FiArrowRight,
  FiTarget, FiAward, FiCalendar
} from 'react-icons/fi'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const teamMembers = [
    {
      name: 'Mr. Thịnh',
      role: 'Club President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      bio: 'Founded the club in 2024 with a vision of creating an inclusive badminton community.'
    },
    {
      name: 'Mr. Rảnh',
      role: 'Head Coach',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      bio: 'Former professional player with 30+ years of competitive experience.'
    },
    {
      name: 'Mr. Hẹn',
      role: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      bio: 'Organizes our tournaments and social events that bring the community together.'
    }
  ]

  const highlights = [
    {
      icon: FiAward,
      title: 'Regional Champions 2024',
      description: 'Tự tạo ra giải đấu và tự vô địch',
      date: '10/2024'
    },
    {
      icon: FiUsers,
      title: '20+ Active Members',
      description: 'Growing community of passionate players',
      date: 'Ongoing'
    },
    {
      icon: FiAward,
      title: 'Youth Program Launch',
      description: 'Started coaching program for young players',
      date: 'January 2024'
    },
    {
      icon: FiCalendar,
      title: 'Monthly Tournaments',
      description: 'Regular competitive events for all skill levels',
      date: 'Every Month'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section id="home" className="relative min-h-screen flex items-center justify-center parallax-container">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-10 parallax-element"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-navy-400 to-coral-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-coral-300 to-navy-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-navy-500 to-coral-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-750 bg-gradient-to-r from-navy-600 to-coral-500 bg-clip-text text-transparent leading-tight">
              Play Beyond
              <br />
              <span className="font-450">Boundaries</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant badminton community where passion meets excellence. 
              Whether you&apos;re just starting or already a champion, we have your court ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 micro-bounce">
                <FiPlay className="w-5 h-5" />
                <span>Join Us Today</span>
              </button>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Learn More</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats Cards with Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                { icon: FiUsers, number: '20+', label: 'Active Members' },
                { icon: FiAward, number: '0+', label: 'Tournaments Won' },
                { icon: FiHeart, number: '10+', label: 'Months of Excellence' }
              ].map((stat, index) => (
                <div key={index} className={`glass-card text-center micro-hover transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  <stat.icon className="w-8 h-8 text-navy-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-650 text-navy-700 dark:text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-650 text-navy-700 dark:text-white mb-6">
              About Our Community
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-coral-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="glass-card">
                <FiTarget className="w-12 h-12 text-navy-500 mb-6" />
                <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To create an inclusive, supportive environment where badminton enthusiasts 
                  of all skill levels can grow, connect, and achieve their potential both 
                  on and off the court.
                </p>
              </div>

              <div className="glass-card">
                <FiHeart className="w-12 h-12 text-coral-500 mb-6" />
                <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">Our Values</h3>
                <ul className="text-lg text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>Inclusivity & Respect</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-coral-500 rounded-full mr-3"></span>Excellence & Growth</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>Community & Fun</li>
                </ul>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="glass-card p-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=600&h=400&fit=crop"
                  alt="Badminton players in action"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">
                    10 Months of Excellence
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    From humble beginnings with 8 founding members to a thriving 
                    community of 20+ passionate players, we&apos;ve built something special together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-gradient-to-br from-navy-50/50 to-coral-50/50 dark:from-gray-800/50 dark:to-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-650 text-navy-700 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The passionate individuals who make our community thrive
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-coral-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card text-center group micro-hover animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-premium">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-navy-500 to-coral-500 rounded-xl flex items-center justify-center">
                    <FiStar className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-550 text-navy-700 dark:text-white mb-2">{member.name}</h3>
                <p className="text-coral-500 font-450 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-up">
            <button className="btn-secondary text-lg px-8 py-4">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-650 text-navy-700 dark:text-white mb-6">
              Our Highlights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Celebrating our journey of achievements and memorable moments
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-coral-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-card group micro-hover animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-coral-500 rounded-2xl flex items-center justify-center group-hover:animate-glow">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-550 text-navy-700 dark:text-white">{highlight.title}</h3>
                      <span className="text-sm text-coral-500 font-450">{highlight.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-navy-50/50 to-coral-50/50 dark:from-gray-800/50 dark:to-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-650 text-navy-700 dark:text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to join our badminton family? We&apos;d love to hear from you!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-coral-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              {[
                { icon: FiMail, title: 'Email', info: 'info@badmintonclub.com' },
                { icon: FiPhone, title: 'Phone', info: '+1 (555) 123-4567' },
                { icon: FiMapPin, title: 'Location', info: '123 Sports Center Ave' },
                { icon: FiClock, title: 'Hours', info: 'Mon-Fri: 6PM-10PM' }
              ].map((contact, index) => (
                <div key={index} className="glass-card flex items-center space-x-4 micro-hover">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-coral-500 rounded-xl flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-550 text-navy-700 dark:text-white">{contact.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 glass-card animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200"
                />
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200 resize-none"
                ></textarea>
                <button type="submit" className="btn-primary w-full text-lg py-4 micro-bounce">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 