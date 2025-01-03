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
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="bg-[#E5F5D9] px-4 py-2 rounded-full flex items-center gap-1">
          <span className="font-medium">{name}</span>
          <span className="font-bold">${price}</span>
        </div>
      </div>
    </div>
  )
}

