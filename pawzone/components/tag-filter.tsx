'use client'

import { Button } from "@/components/ui/button"

const tags = ["All", "Cat", "Dog", "Health", "Diet", "Safety", "Behavior", "Parenting", "Products"]

export function TagFilter() {
  return (
    <div className="flex flex-wrap gap-2 my-8">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant="outline"
          className="rounded-full"
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}

