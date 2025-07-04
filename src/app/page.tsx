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
      role: 'Chủ tịch Câu lạc bộ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      bio: 'Thành lập câu lạc bộ vào năm 2024 với tầm nhìn tạo ra một cộng đồng cầu lông hòa nhập.'
    },
    {
      name: 'Mr. Rảnh',
      role: 'Huấn luyện viên trưởng',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      bio: 'Cựu vận động viên chuyên nghiệp với hơn 30 năm kinh nghiệm thi đấu.'
    },
    {
      name: 'Mr. Hẹn',
      role: 'Điều phối viên sự kiện',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      bio: 'Tổ chức các giải đấu và sự kiện xã hội kết nối cộng đồng với nhau.'
    }
  ]

  const highlights = [
    {
      icon: FiAward,
      title: 'Vô địch khu vực 2024',
      description: 'Tự tạo ra giải đấu và tự vô địch',
      date: '10/2024'
    },
    {
      icon: FiUsers,
      title: '20+ thành viên',
      description: 'Cộng đồng đang phát triển với những người chơi đam mê',
      date: 'Đang diễn ra'
    },
    {
      icon: FiAward,
      title: 'Phát triển vận động viên trẻ tuổi',
      description: 'Khởi đầu hành trình đào tạo thế hệ kế thừa của CLB.',
      date: 'Tháng 1 năm 2025'
    },
    {
      icon: FiCalendar,
      title: 'Giải đấu hàng tháng',
      description: 'Các sự kiện thi đấu thường xuyên cho mọi trình độ',
      date: 'Hàng tháng'
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
            Vượt giới hạn 
              <br />
              <span className="font-350">Kết nối đam mê</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Từ những bước đi đầu tiên đến từng pha cầu đỉnh cao - chúng tôi luôn đồng hành cùng bạn trên mọi chặng đường.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 micro-bounce">
                <FiPlay className="w-5 h-5" />
                <span>Tham gia ngay hôm nay</span>
              </button>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Tìm hiểu thêm</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats Cards with Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                { icon: FiUsers, number: '20+', label: 'Thành viên' },
                { icon: FiAward, number: '2+', label: 'Giải đấu' },
                { icon: FiHeart, number: '10+', label: 'Tháng Đầy Ấn Tượng'}
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
              Về Cộng Đồng Chúng Tôi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-coral-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="glass-card">
                <FiTarget className="w-12 h-12 text-navy-500 mb-6" />
                <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">Sứ mệnh của chúng tôi</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Tạo ra một môi trường hòa nhập, hỗ trợ nơi những người đam mê cầu lông 
                  ở mọi trình độ có thể phát triển, kết nối và đạt được tiềm năng của họ 
                  cả trong và ngoài sân đấu.
                </p>
              </div>

              <div className="glass-card">
                <FiHeart className="w-12 h-12 text-coral-500 mb-6" />
                <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">Giá trị của chúng tôi</h3>
                <ul className="text-lg text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>Hòa nhập & Tôn trọng</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-coral-500 rounded-full mr-3"></span>Xuất sắc & Phát triển</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-navy-500 rounded-full mr-3"></span>Cộng đồng & Vui vẻ</li>
                </ul>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="glass-card p-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=600&h=400&fit=crop"
                  alt="Các vận động viên cầu lông đang thi đấu"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">
                  10 Tháng Đầy Ấn Tượng
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Từ những khởi đầu khiêm tốn với 8 thành viên sáng lập đến một 
                    cộng đồng thịnh vượng với 20+ người chơi đam mê, chúng tôi đã xây dựng nên điều gì đó đặc biệt.
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
              Gặp Gỡ Đội Ngũ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Những cá nhân đam mê làm cho cộng đồng chúng ta phát triển mạnh mẽ
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
              Tham gia đội ngũ
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-650 text-navy-700 dark:text-white mb-6">
              Điểm Nổi Bật
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Chúng tôi không chỉ chơi - chúng tôi ghi lại những dấu ấn. 
            <br />
            Đây là hành trình, là câu chuyện, là tinh thần của CLB.
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
              Liên Hệ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sẵn sàng nhập cuộc?
            <br />
            Hãy kết nối với chúng tôi ngay hôm nay!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-coral-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              {[
                { icon: FiMail, title: 'Email', info: 'info@badmintonclub.com' },
                { icon: FiPhone, title: 'Điện thoại', info: '+84 339 567 ***' },
                { icon: FiMapPin, title: 'Địa điểm', info: 'Ô Diên, Hà Nội' },
                { icon: FiClock, title: 'Giờ mở cửa', info: 'Thứ 2-6: 6 giờ chiều - 10 giờ tối' }
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
              <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-8">Gửi tin nhắn cho chúng tôi</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Chủ đề"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200"
                />
                <textarea
                  rows={6}
                  placeholder="Tin nhắn của bạn"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-navy-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-ring transition-all duration-200 resize-none"
                ></textarea>
                <button type="submit" className="btn-primary w-full text-lg py-4 micro-bounce">
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 