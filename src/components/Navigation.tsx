'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  // Safely get theme context
  let theme = 'light'
  let toggleTheme = () => {}
  
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch (error) {
    // Theme context not available yet, use defaults
    console.log('Theme context not available, using defaults')
  }

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/#home', label: 'Trang chủ', isSection: true },
    { href: '/#about', label: 'Giới thiệu', isSection: true },
    { href: '/#team', label: 'Đội ngũ', isSection: true },
    { href: '/album', label: 'Album', isSection: false },
    { href: '/matches', label: 'Trận đấu', isSection: false },
    { href: '/#highlights', label: 'Điểm nổi bật', isSection: true },
    { href: '/#contact', label: 'Liên hệ', isSection: true },
  ]

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    setIsMobileMenuOpen(false)
    
    if (item.isSection) {
      // Handle homepage sections
      e.preventDefault()
      const sectionId = item.href.split('#')[1]
      
      if (pathname === '/') {
        // Already on homepage, just scroll to section
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Navigate to homepage first, then scroll to section
        router.push('/')
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
    // For non-section links (like /album), let the default Link behavior handle it
  }

  // Don't render theme-dependent elements until mounted
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl px-6 py-3 transition-all duration-300 shadow-glass">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 micro-hover">
                <div className="w-8 h-8 bg-gradient-to-br from-navy-500 to-coral-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BC</span>
                </div>
                <span className="font-650 text-lg text-navy-700">
                  Bernice Club
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-xl text-sm font-450 text-gray-600 hover:text-navy-600 hover:bg-white/50 transition-all duration-200 micro-hover focus-ring"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-3">
                {/* CTA Button */}
                <button className="hidden sm:block btn-primary micro-bounce">
                  Tham gia CLB
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-2xl px-6 py-3 transition-all duration-300 ${
          isScrolled ? 'shadow-premium' : 'shadow-glass'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 micro-hover">
              <div className="w-8 h-8 bg-gradient-to-br from-navy-500 to-coral-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BC</span>
              </div>
              <span className="font-650 text-lg text-navy-700 dark:text-white">
                Bernice Club
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="px-4 py-2 rounded-xl text-sm font-450 text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 micro-hover focus-ring"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 micro-hover focus-ring"
                aria-label="Chuyển đổi chế độ tối"
              >
                {theme === 'light' ? (
                  <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              {/* CTA Button */}
              <button className="hidden sm:block btn-primary micro-bounce">
                Tham gia CLB
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 micro-hover focus-ring"
                aria-label="Chuyển đổi menu di động"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <FiMenu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 dark:border-gray-700/20 animate-fade-in">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className="px-4 py-3 rounded-xl text-sm font-450 text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus-ring"
                  >
                    {item.label}
                  </Link>
                ))}

                <button className="btn-primary w-full mt-4">
                  Tham gia CLB
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 