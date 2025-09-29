import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

interface TestimonialProps {
  quote: string
  author: string
  authorImage?: string
  treatment?: string
  rating?: number
}

export function Testimonial({ 
  quote, 
  author, 
  authorImage, 
  treatment,
  rating = 5 
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 my-8 border border-gray-100">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        {authorImage && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <Image
              src={authorImage}
              alt={author}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        )}
        
        <div>
          <div className="font-semibold text-gray-900">
            {author}
          </div>
          {treatment && (
            <div className="text-sm text-gray-500">
              {treatment}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}