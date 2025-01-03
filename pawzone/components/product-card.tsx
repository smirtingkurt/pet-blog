import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  image: string
  name: string
  price: number
  className?: string
}

export function ProductCard({ image, name, price, className }: ProductCardProps) {
  return (
    <div className={cn("group relative rounded-2xl overflow-hidden", className)}>
      <div className="w-64 h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="responsive"
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="bg-[#E5F5D9] dark:bg-gray-800 px-4 py-2 rounded-full flex items-center gap-1">
          <span className="font-medium text-gray-800 dark:text-white">{name}</span>
          <span className="font-bold text-gray-900 dark:text-yellow-300">${price}</span>
        </div>
      </div>
    </div>
  )
}

