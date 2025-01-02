import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ArticleCardProps {
  title: string
  image: string
  tags: string[]
  slug: string
  featured?: boolean
  excerpt?: string
}

export function ArticleCard({ title, image, tags, slug, featured = false, excerpt }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${slug}`}>
        <article className="group relative h-[400px] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt=""
            width={800}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <div className="absolute bottom-0 p-6">
              <div className="flex gap-2 flex-wrap mb-3">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
              {excerpt && (
                <p className="text-white/90 line-clamp-2">{excerpt}</p>
              )}
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
        <div className="relative h-48">
          <Image
            src={image}
            alt=""
            width={400}
            height={200}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex gap-2 flex-wrap mb-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-semibold line-clamp-2">{title}</h3>
        </div>
      </article>
    </Link>
  )
}

