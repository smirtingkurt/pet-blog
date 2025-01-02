import Link from "next/link"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogHome() {
  const allPosts = getSortedPostsData()

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">博客</h1>
      <ul>
        {allPosts.map(({ id, date, title }) => (
          <li key={id} className="mb-4">
            <Link href={`/blog/${id}`} className="text-2xl font-semibold text-blue-600 hover:underline">
              {title}
            </Link>
            <br />
            <small className="text-gray-500">{date}</small>
          </li>
        ))}
      </ul>
    </div>
  )
} 