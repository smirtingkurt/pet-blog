'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="flex w-full max-w-md mx-auto items-center space-x-2 bg-white rounded-full border border-gray-300 p-1 pl-4">
      <Input 
        type="text" 
        placeholder="Type any keywords" 
        className="flex-grow border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button type="submit" size="sm" className="rounded-full bg-[#003049] hover:bg-[#00304d] transition-colors">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search blog</span>
      </Button>
    </div>
  )
}

