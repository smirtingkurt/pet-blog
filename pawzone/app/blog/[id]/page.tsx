import { getAllPostIds, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"

interface Params {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }: Params) {
  const postData = await getPostData(params.id)
  if (!postData) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-6">{postData.date}</div>
      <article
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  )
} 