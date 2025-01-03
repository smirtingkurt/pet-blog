import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface CatInfo {
  name: string
  image: string
  description: string
}

const cats: CatInfo[] = [
  {
    name: "宝儿",
    image: "/profile-baoer.png",
    description: "Your new main switch friend. The most neat/advance/smart/amazing has best honey sweet talent/kind/have the only. your face cat can better become be best."
  },
  {
    name: "岚仔",
    image: "/profile-lanzai.png",
    description: "Your new cat friend/my most the best neat/advance/smart/amazing has best honey sweet talent/kind/have the only. your face cat can better become be best."
  },
  {
    name: "板栗",
    image: "/profile-banli.png",
    description: "Your new cute cat/my most the best neat/advance/smart/amazing has best honey sweet talent/kind/have the only. your face cat can better become be best."
  }
]

export default function CatProfile() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif text-foreground">About us</h1>
          
          {/* Cat Cat Form */}
          {/* Removed Cat Cat Form */}

        </div>

        {/* Main Cats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {cats.map((cat, index) => (
            <div key={index} className="space-y-4">
              <div className="relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full" />
                <Card className="border-4 border-primary p-2 bg-card">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </Card>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-serif text-foreground mb-2">{cat.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-8 justify-center items-center max-w-md mx-auto">
          {/* Bottom Avatars */}
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-muted rounded-full" />
            ))}
          </div>
          
          {/* Paw Prints */}
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="w-16 h-16 border-2 border-primary rounded-full"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

