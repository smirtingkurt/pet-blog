'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function SearchBar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto items-center space-x-2 bg-background rounded-full border border-input p-1 pl-4">
      <Input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="输入关键词搜索" 
        className="flex-grow border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-foreground placeholder:text-muted-foreground"
      />
      <Button type="submit" size="sm" className="rounded-full bg-[#003049] hover:bg-[#00304d] transition-colors">
        <Search className="h-4 w-4" />
        <span className="sr-only">搜索</span>
      </Button>
    </form>
  )
}

