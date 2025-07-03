'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-navy-500 to-coral-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">BC</span>
                </div>
                <span className="text-xl font-650 text-navy-700 dark:text-white">
                  Bernice Club
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
                Building a vibrant badminton community where passion meets excellence. 
                Join us and discover the joy of playing beyond boundaries.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <FiMail className="w-5 h-5 text-navy-500" />
                  <span>hienpc10@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <FiPhone className="w-5 h-5 text-navy-500" />
                  <span>+84 339 567 ***</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <FiMapPin className="w-5 h-5 text-navy-500" />
                  <span>O Dien, Ha Noi</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-550 text-navy-700 dark:text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-white transition-colors duration-200 micro-hover"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h3 className="text-lg font-550 text-navy-700 dark:text-white">Connect With Us</h3>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gradient-to-br from-navy-500 to-coral-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 micro-hover"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Stay updated with our latest news and events
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-navy-500 to-coral-500 text-white text-sm rounded-lg hover:scale-105 transition-transform duration-200 micro-bounce">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="glass rounded-2xl px-6 py-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <span>© {currentYear} Bernice Club. Made by VTea</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 