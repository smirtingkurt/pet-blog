import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-4 flex justify-between">
        <span>© 2023 PawZone. All rights reserved.</span>
        <div className="flex space-x-4">
          <Link href="/privacy" className="text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-sm">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

