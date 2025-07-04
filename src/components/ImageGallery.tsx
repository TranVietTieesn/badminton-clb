'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight, FiCalendar, FiCamera } from 'react-icons/fi'

export interface Photo {
  id: string
  src: string
  alt: string
  title: string
  date: string
  category: string
  description?: string
}

interface ImageGalleryProps {
  photos: Photo[]
  categories?: { key: string; label: string }[]
  showFilters?: boolean
  columns?: 2 | 3 | 4
  className?: string
}

export default function ImageGallery({ 
  photos, 
  categories = [], 
  showFilters = true,
  columns = 3,
  className = ''
}: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Generate categories from photos if not provided
  const defaultCategories = [
    { key: 'all', label: 'Tất cả' },
    ...Array.from(new Set(photos.map(p => p.category))).map(cat => ({
      key: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1)
    }))
  ]

  const finalCategories = categories.length > 0 ? categories : defaultCategories

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

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

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  return (
    <div className={className}>
      {/* Category Filter */}
      {showFilters && finalCategories.length > 1 && (
        <div className="mb-8">
          <div className="glass rounded-2xl p-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {finalCategories.map((category) => {
                const count = category.key === 'all' 
                  ? photos.length 
                  : photos.filter(p => p.category === category.key).length
                
                return (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-450 transition-all duration-200 micro-hover ${
                      selectedCategory === category.key
                        ? 'bg-gradient-to-r from-navy-500 to-coral-500 text-white shadow-premium'
                        : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {category.label}
                    <span className="ml-1 text-xs opacity-75">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Photo Grid */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="glass-card group cursor-pointer overflow-hidden micro-hover"
            onClick={() => openModal(photo)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-550 text-sm mb-1 truncate">{photo.title}</h3>
                <div className="flex items-center text-xs opacity-90">
                  <FiCalendar className="w-3 h-3 mr-1" />
                  {formatDate(photo.date)}
                </div>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FiCamera className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiCamera className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-550 text-navy-700 dark:text-white mb-2">
            Chưa có ảnh nào
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Chúng tôi sẽ sớm cập nhật thêm nhiều ảnh thú vị!
          </p>
        </div>
      )}

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
            <div className="max-w-4xl w-full">
              <div className="relative aspect-[4/3] mb-4">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Photo Info */}
              <div className="glass rounded-xl p-4 text-center">
                <h2 className="text-xl font-550 text-navy-700 dark:text-white mb-2">
                  {selectedPhoto.title}
                </h2>
                {selectedPhoto.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {selectedPhoto.description}
                  </p>
                )}
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <FiCalendar className="w-4 h-4 mr-2" />
                  {formatDate(selectedPhoto.date)}
                </div>
              </div>
            </div>

            {/* Photo Counter */}
            {filteredPhotos.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-full px-3 py-1">
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