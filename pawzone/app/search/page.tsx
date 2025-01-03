'use client'

import { useSearchParams } from 'next/navigation'
import { ArticleCard } from "@/components/article-card"
import { SearchBar } from "@/components/search-bar"

// 模拟文章数据库
const allArticles = [
  {
    title: "宝儿、岚仔、板栗",
    image: "/three-cats.png",
    tags: ["Cat", "Cleaning", "Health"],
    slug: "three-cats",
    excerpt: "furry friend"
  },
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
  },
  {
    title: "10 Cat Training Tips Every Cat Owner Should Know",
    image: "/cat-training-tips.png",
    tags: ["Cat", "Training"],
    slug: "cat-training-tips"
  }
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  // 搜索逻辑
  const searchResults = allArticles.filter(article => {
    const searchText = `${article.title} ${article.tags.join(' ')}`.toLowerCase()
    return searchText.includes(query.toLowerCase())
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto mb-8">
        <SearchBar />
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">搜索结果</h1>
        <p className="text-gray-600">
          关键词 &quot;{query}&quot; 找到 {searchResults.length} 个结果
        </p>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((article) => (
            <ArticleCard
              key={article.slug}
              {...article}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">未找到相关结果</p>
          <p className="text-gray-500">请尝试其他关键词</p>
        </div>
      )}
    </div>
  )
} 