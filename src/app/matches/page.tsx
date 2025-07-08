'use client'

import { useState } from 'react'
import { FiPlay, FiCalendar, FiUsers, FiTrendingUp, FiFilter } from 'react-icons/fi'
import { matchVideos, MatchVideo, getVideosByCategory, getAllCategories } from '@/data/matches'

export default function MatchesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  const categories = getAllCategories()
  const filteredVideos = selectedCategory === 'all' 
    ? matchVideos 
    : getVideosByCategory(selectedCategory)

  const handleCategoryChange = (category: string) => {
    setIsLoading(true)
    setSelectedCategory(category)
    
    // Simulate loading for smooth transition
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const getYouTubeEmbedUrl = (url: string) => {
    // Convert various YouTube URL formats to embed format
    let videoId = ''
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0]
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0]
    } else if (url.includes('youtube.com/embed/')) {
      return url
    }
    
    return `https://www.youtube.com/embed/${videoId}`
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tournament': return <FiTrendingUp className="w-4 h-4" />
      case 'friendly': return <FiUsers className="w-4 h-4" />
      case 'training': return <FiPlay className="w-4 h-4" />
      default: return <FiFilter className="w-4 h-4" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'tournament': return 'Giải đấu'
      case 'friendly': return 'Giao hữu'
      case 'training': return 'Tập luyện'
      case 'all': return 'Tất cả'
      default: return category
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-navy-500/10 to-coral-500/10 rounded-full mb-6">
              <FiPlay className="w-5 h-5 text-navy-600 dark:text-navy-400 mr-2" />
              <span className="text-sm font-500 text-navy-600 dark:text-navy-400">
                Video Trận Đấu
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-700 text-gray-900 dark:text-white mb-6">
              Những Trận Đấu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-coral-500">
                Đáng Nhớ
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Khám phá những trận đấu xuất sắc, kỹ thuật tinh tế và tinh thần thể thao cao của CLB Bernice qua từng video
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[{ key: 'all', label: 'Tất cả' }, ...categories.map(cat => ({ key: cat, label: getCategoryLabel(cat) }))].map((category) => (
              <button
                key={category.key}
                onClick={() => handleCategoryChange(category.key)}
                className={`flex items-center px-6 py-3 rounded-2xl font-500 transition-all duration-300 micro-hover ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-navy-500 to-coral-500 text-white shadow-premium'
                    : 'glass text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70'
                }`}
              >
                {getCategoryIcon(category.key)}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-500"></div>
              </div>
            )}
            
            <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transition-opacity duration-300 ${
              isLoading ? 'opacity-50' : 'opacity-100'
            }`}>
              {filteredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="glass rounded-3xl overflow-hidden hover:shadow-premium transition-all duration-500 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Video Embed */}
                  <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                    <iframe
                      src={getYouTubeEmbedUrl(video.youtubeUrl)}
                      title={video.title}
                      className="w-full h-full rounded-t-3xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-500 ${
                        video.category === 'tournament' 
                          ? 'bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white'
                          : video.category === 'friendly'
                          ? 'bg-gradient-to-r from-green-500/90 to-emerald-500/90 text-white'
                          : 'bg-gradient-to-r from-blue-500/90 to-indigo-500/90 text-white'
                      }`}>
                        {getCategoryIcon(video.category)}
                        <span className="ml-1">{getCategoryLabel(video.category)}</span>
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-600 text-gray-900 dark:text-white mb-3 group-hover:text-navy-600 dark:group-hover:text-navy-400 transition-colors duration-300">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {video.description}
                    </p>

                    {/* Match Details */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <FiCalendar className="w-4 h-4 mr-2" />
                        <span>{video.date}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <FiUsers className="w-4 h-4 mr-2" />
                        <span>{video.teams}</span>
                      </div>

                      {video.result && (
                        <div className="flex items-center text-sm font-500">
                          <FiTrendingUp className="w-4 h-4 mr-2 text-navy-500" />
                          <span className="text-navy-600 dark:text-navy-400">{video.result}</span>
                        </div>
                      )}
                    </div>

                    {/* External Link */}
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-500 text-navy-600 dark:text-navy-400 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-200 micro-hover"
                      >
                        <FiPlay className="w-4 h-4 mr-2" />
                        Xem trên YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <FiPlay className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-xl font-600 text-gray-900 dark:text-white mb-2">
                  Chưa có video nào
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hiện tại chưa có video nào trong danh mục này. Vui lòng quay lại sau!
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-700 text-gray-900 dark:text-white mb-4">
                Tham Gia Cùng Chúng Tôi
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Hãy trở thành một phần của những trận đấu kịch tính này. Tham gia CLB Bernice và cùng tạo nên những khoảnh khắc đáng nhớ!
              </p>
              <button className="btn-primary micro-bounce text-lg px-8 py-4">
                Đăng Ký Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 