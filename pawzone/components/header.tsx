import { useState } from "react"
import Link from "next/link"
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold ${pacifico.className}`}>
          PawZone
        </Link>
        {/* 桌面导航 */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/shop" className="text-sm font-medium">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>
          <Link href="/more" className="text-sm font-medium">
            More
          </Link>
        </nav>
        {/* 汉堡包按钮 */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
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
        <nav className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link href="/shop" className="block text-sm font-medium">
              Shop
            </Link>
            <Link href="/about" className="block text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="block text-sm font-medium">
              Contact
            </Link>
            <Link href="/more" className="block text-sm font-medium">
              More
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

