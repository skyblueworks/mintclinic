import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface CTAProps {
  title: string
  description?: string
  buttonText: string
  buttonUrl: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function CTA({ 
  title, 
  description, 
  buttonText, 
  buttonUrl, 
  variant = 'primary',
  size = 'md' 
}: CTAProps) {
  const sizeClasses = {
    sm: 'py-8 px-6',
    md: 'py-12 px-8', 
    lg: 'py-16 px-12'
  }

  const buttonVariants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-green-600 text-white hover:bg-green-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  }

  const backgroundVariants = {
    primary: 'bg-gradient-to-r from-blue-50 to-blue-100',
    secondary: 'bg-gradient-to-r from-green-50 to-green-100',
    outline: 'bg-gradient-to-r from-gray-50 to-gray-100'
  }

  return (
    <div className={`${backgroundVariants[variant]} ${sizeClasses[size]} rounded-2xl my-8 text-center`}>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {description}
          </p>
        )}
        
        <Link
          href={buttonUrl}
          className={`
            inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold
            transition-all duration-200 transform hover:scale-105
            ${buttonVariants[variant]}
          `}
        >
          {buttonText}
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}