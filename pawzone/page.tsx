import { Cat } from 'lucide-react'
import { ProductCard } from "./product-card"
import { TestimonialCard } from "./testimonial-card"

const products = [
  {
    name: "Tofu Litter",
    price: 40,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Dry Cat Food",
    price: 99,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Crunchy treat",
    price: 12,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Feather Toy",
    price: 6,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Bolster Bed",
    price: 90,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Plastic Bowl",
    price: 10,
    image: "/placeholder.svg?height=400&width=400"
  }
]

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-20">
      {/* Shop Section */}
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-3xl font-bold">Shop</h1>
            <Cat className="w-6 h-6" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've varieties for each and every product. So, grab the desirable thing for your adorable cat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <div className="text-right">
          <button className="text-gray-600 hover:text-gray-900">see more</button>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="space-y-6">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-3xl font-bold text-center">Happy Clients</h2>
          <Cat className="w-6 h-6" />
        </div>
        <TestimonialCard
          avatar="/placeholder.svg?height=100&width=100"
          name="Rose"
          quote="Amazing selection of cat toys and treats! My kitty can't get enough, and the delivery was super fast."
        />
      </section>
    </main>
  )
}

