"use client"

import { useState } from "react"
import Link from "next/link"
import { Pacifico } from 'next/font/google'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from "@/components/theme-provider"

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold ${pacifico.className}`}>
          PawZone
        </Link>
        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/shop" className="text-base font-medium hover:text-primary/80">
            Shop
          </Link>
          <Link href="/about" className="text-base font-medium hover:text-primary/80">
            About
          </Link>
          <Link href="/contact" className="text-base font-medium hover:text-primary/80">
            Contact
          </Link>
          <Link href="/more" className="text-base font-medium hover:text-primary/80">
            More
          </Link>
          {/* 主题切换按钮 */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent flex items-center justify-center"
            aria-label="切换主题"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>
        {/* 汉堡包按钮 */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="切换导航菜单"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>
      {/* 移动菜单 */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background border-t">
          <div className="px-4 py-2 space-y-2">
            <Link href="/shop" className="block text-base font-medium hover:text-primary/80">
              Shop
            </Link>
            <Link href="/about" className="block text-base font-medium hover:text-primary/80">
              About
            </Link>
            <Link href="/contact" className="block text-base font-medium hover:text-primary/80">
              Contact
            </Link>
            <Link href="/more" className="block text-base font-medium hover:text-primary/80">
              More
            </Link>
            {/* 移动菜单中的主题切换按钮 */}
            <button 
              onClick={toggleTheme}
              className="mt-2 p-2 rounded-md hover:bg-accent flex items-center"
              aria-label="切换主题"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span className="ml-2">切换主题</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

