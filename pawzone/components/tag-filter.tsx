'use client'

import { Button } from "@/components/ui/button"

const tags = ["All", "Cat", "Dog", "Health", "Diet", "Safety", "Behavior", "Parenting", "Products"]

interface TagFilterProps {
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

export function TagFilter({ selectedTag, onTagSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 my-8">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          className="rounded-full"
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}

