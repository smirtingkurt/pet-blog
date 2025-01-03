import { ChevronRight } from 'lucide-react'

interface TestimonialCardProps {
  avatar: string
  name: string
  quote: string
}

export function TestimonialCard({ avatar, name, quote }: TestimonialCardProps) {
  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="space-y-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">"{quote}"</p>
        </div>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

