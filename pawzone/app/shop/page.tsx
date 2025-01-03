import { Cat } from 'lucide-react'
import { ProductCard } from "@/components/product-card"
import { TestimonialCard } from "@/components/testimonial-card"

const products = [
  {
    name: "豆腐猫砂",
    price: 40,
    image: "/products/tofu-litter.png"
  },
  {
    name: "猫干粮",
    price: 99,
    image: "/products/dry-food.jpg"
  },
  {
    name: "猫零食",
    price: 12,
    image: "/products/cat-treats.png"
  },
  {
    name: "逗猫棒",
    price: 6,
    image: "/products/cat-wand.png"
  },
  {
    name: "猫窝",
    price: 90,
    image: "/products/cat-bed.png"
  },
  {
    name: "猫食盆",
    price: 10,
    image: "/products/food-bowl.png"
  }
]

export default function ShopPage() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-20">
      {/* Shop Section */}
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-3xl font-bold">商店</h1>
            <Cat className="w-6 h-6" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们为每一种产品都提供多种选择。快为您可爱的猫咪挑选心仪的商品吧。
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
          <button className="text-gray-600 hover:text-gray-900">查看更多</button>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="space-y-6">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-3xl font-bold text-center">顾客反馈</h2>
          <Cat className="w-6 h-6" />
        </div>
        <TestimonialCard
          avatar="/products/customer-1.png"
          name="Kurt"
          quote="猫咪玩具和零食的选择太棒了！我家猫咪非常喜欢，而且配送速度超快。"
        />
      </section>
    </main>
  )
} 