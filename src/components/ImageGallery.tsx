'use client'

import { useState } from 'react'
import Image from 'next/image'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=800&h=600&fit=crop',
      alt: 'Badminton court action shot',
      title: 'Intense Match Moments'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Team celebration',
      title: 'Victory Celebrations'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Training session',
      title: 'Practice Makes Perfect'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=800&h=600&fit=crop',
      alt: 'Social gathering',
      title: 'Community Events'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Coaching session',
      title: 'Learning Together'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=800&h=600&fit=crop',
      alt: 'Tournament day',
      title: 'Tournament Champions'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="neuro-card group cursor-pointer neuro-hover overflow-hidden"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative h-64">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold font-poppins">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for expanded view */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <div className="neuro-card overflow-hidden">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-8 bg-gradient-to-t from-soft-cream to-white">
                <h3 className="text-3xl font-bold text-gradient-cute font-poppins">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-600 text-lg font-quicksand mt-2">Experience the energy and excitement of our badminton community!</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-6 right-6 neuro-icon neuro-hover text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="neuro-card text-center">
        <p className="text-gray-600 mb-8 text-lg font-quicksand">
          Want to be featured in our gallery? Join us for the next event!
        </p>
        <button className="cute-btn text-lg font-quicksand">
          Join Our Next Event
        </button>
      </div>
    </div>
  )
}

export default ImageGallery 