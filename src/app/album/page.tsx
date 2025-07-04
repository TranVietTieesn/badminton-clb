'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  FiX, FiChevronLeft, FiChevronRight, FiDownload, 
  FiCalendar, FiCamera, FiHeart, FiShare2 
} from 'react-icons/fi'
import { clubPhotos, photoCategories, type Photo } from '@/data/photos'

export default function AlbumPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredPhotos = selectedCategory === 'all' 
    ? clubPhotos 
    : clubPhotos.filter(photo => photo.category === selectedCategory)

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo)
    setCurrentIndex(filteredPhotos.findIndex(p => p.id === photo.id))
  }

  const closeModal = () => {
    setSelectedPhoto(null)
    setCurrentIndex(0)
  }

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setCurrentIndex(nextIndex)
    setSelectedPhoto(filteredPhotos[nextIndex])
  }

  const prevPhoto = () => {
    const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedPhoto(filteredPhotos[prevIndex])
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Calculate category counts
  const categoriesWithCounts = photoCategories.map(category => ({
    ...category,
    count: category.key === 'all' 
      ? clubPhotos.length 
      : clubPhotos.filter(p => p.category === category.key).length
  }))

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-650 text-navy-700 dark:text-white mb-6">
            Album Ảnh CLB
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Khám phá những khoảnh khắc đáng nhớ, hành trình phát triển và tinh thần đồng đội 
            qua từng bức ảnh của chúng tôi.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-coral-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="glass rounded-2xl p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categoriesWithCounts.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-6 py-3 rounded-xl text-sm font-450 transition-all duration-200 micro-hover ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-navy-500 to-coral-500 text-white shadow-premium'
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/50'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="glass-card group cursor-pointer overflow-hidden micro-hover"
              onClick={() => openModal(photo)}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-550 text-lg mb-1">{photo.title}</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    {formatDate(photo.date)}
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiCamera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-550 text-navy-700 dark:text-white mb-2">{photo.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  {photo.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{formatDate(photo.date)}</span>
                  <div className="flex items-center space-x-2">
                    <FiHeart className="w-4 h-4" />
                    <span>❤️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-navy-500 to-coral-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCamera className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">
              Chưa có ảnh nào
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chúng tôi sẽ sớm cập nhật thêm nhiều ảnh thú vị!
            </p>
          </div>
        )}

        {/* Instructions for adding photos */}
        <div className="mt-20 glass rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '800ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-550 text-navy-700 dark:text-white mb-4">
              📸 Thêm ảnh mới vào Album
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Để thêm ảnh hãy liên hệ ngay <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Nguyen An Thinh</code>
            </p>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-left">
              <h4 className="font-550 text-navy-700 dark:text-white mb-3">Các loại ảnh có sẵn:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {photoCategories.slice(1).map(category => (
                  <div key={category.key} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-navy-500 to-coral-500 rounded-full"></span>
                    <span className="text-gray-600 dark:text-gray-300">{category.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredPhotos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Photo Content */}
            <div className="max-w-5xl w-full">
              <div className="relative aspect-[4/3] mb-6">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Photo Info */}
              <div className="glass rounded-2xl p-6 text-center">
                <h2 className="text-2xl font-550 text-navy-700 dark:text-white mb-2">
                  {selectedPhoto.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedPhoto.description}
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    {formatDate(selectedPhoto.date)}
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center hover:text-navy-500 transition-colors">
                      <FiHeart className="w-4 h-4 mr-1" />
                      Yêu thích
                    </button>
                    <button className="flex items-center hover:text-navy-500 transition-colors">
                      <FiShare2 className="w-4 h-4 mr-1" />
                      Chia sẻ
                    </button>
                    <button className="flex items-center hover:text-navy-500 transition-colors">
                      <FiDownload className="w-4 h-4 mr-1" />
                      Tải về
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Counter */}
            {filteredPhotos.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-full px-4 py-2">
                <span className="text-white text-sm">
                  {currentIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 