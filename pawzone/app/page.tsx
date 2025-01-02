import { SearchBar } from "@/components/search-bar"
import { ArticleCard } from "@/components/article-card"
import { TagFilter } from "@/components/tag-filter"
import { Newsletter } from "@/components/newsletter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredArticle = {
  title: "宝儿、岚仔、板栗",
  image: "/three-cats.png",
  tags: ["Cat", "Cleaning", "Health"],
  slug: "three-cats",
  excerpt: "furry friend"
}

const popularArticles = [
  {
    title: "宝儿",
    image: "/bao-er-1.png",
    tags: ["Cat", "Diet"],
    slug: "bao-er-1"
  },
  {
    title: "岚仔",
    image: "/lan-zai-1.png",
    tags: ["Training", "Diet", "Health"],
    slug: "lan-zai-1"
  },
  {
    title: "板栗",
    image: "/ban-li-1.png",
    tags: ["Training", "Behavior"],
    slug: "ban-li-1"
  }
]

const articles = [
  {
    title: "10 Cat Training Tips Every Cat Owner Should Know",
    image: "/cat-training-tips.png",
    tags: ["Cat", "Training"],
    slug: "cat-training-tips"
  },
  // ... other articles
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Welcome To Our Blog</h1>
        <div className="max-w-md mx-auto">
          <SearchBar />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          <ArticleCard
            {...featuredArticle}
            featured={true}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Most Popular</h2>
          {popularArticles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.slug} className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-24 h-24 relative">
                <img
                  src={article.image}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-medium mb-1 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <TagFilter />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            {...article}
          />
        ))}
      </section>

      <div className="flex justify-center gap-2 mb-12">
        <Button variant="outline" className="w-8 h-8 p-0">1</Button>
        <Button variant="outline" className="w-8 h-8 p-0">2</Button>
        <Button variant="outline" className="w-8 h-8 p-0">3</Button>
        <Button variant="outline" className="w-8 h-8 p-0">4</Button>
        <Button variant="outline" className="w-8 h-8 p-0">5</Button>
      </div>

      <Newsletter />
    </div>
  )
}

