import Link from "next/link"
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold ${pacifico.className}`}>
          PawZone
        </Link>
        <nav className="space-x-6">
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
      </div>
    </header>
  )
}

