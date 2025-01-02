import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              PawZone
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Your trusted source for pet care information and products. Making pet parenting easier.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cat-food">Cat Food</Link></li>
              <li><Link href="/dog-food">Dog Food</Link></li>
              <li><Link href="/toys">Toys</Link></li>
              <li><Link href="/health">Health</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/shipping">Shipping Info</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-gray-600">
          <p>© 2024 PawZone Pet Supplies, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

