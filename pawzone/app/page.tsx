'use client'

import { SearchBar } from "@/components/search-bar"
import { ArticleCard } from "@/components/article-card"
import { TagFilter } from "@/components/tag-filter"
import { Newsletter } from "@/components/newsletter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'

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
    image: "/posts/cat-training-tips.png",
    tags: ["Cat", "Training"],
    slug: "cat-training-tips"
  },
  {
    title: "9 Cat Training Tips Every Cat Owner Should Know",
    image: "/posts/cat-training-tips-1.png",
    tags: ["Cat", "Training"],
    slug: "cat-training-tips-1"
  },
  {
    title: "8 Cat Training Tips Every Cat Owner Should Know",
    image: "/posts/cat-training-tips-2.png",
    tags: ["Cat", "Training"],
    slug: "cat-training-tips-2"
  },
  {
    title: "7 Cat Training Tips Every Cat Owner Should Know",
    image: "/posts/cat-training-tips-3.png",
    tags: ["Cat", "Training"],
    slug: "cat-training-tips-3"
  },
  
  // ... other articles
]

const ARTICLES_PER_PAGE = 3; // 修改为每页显示3篇文章（3列 x 1行）

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // 计算总页数
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  
  // 获取当前页的文章
  const currentArticles = articles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

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
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="rounded-lg object-cover"
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
        {currentArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            {...article}
          />
        ))}
      </section>

      <div className="flex justify-center gap-2 mb-12">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <Button
            key={pageNumber}
            variant={currentPage === pageNumber ? "default" : "outline"}
            className="w-8 h-8 p-0"
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
      </div>

      <Newsletter />
    </div>
  )
}

