import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Newsletter() {
  return (
    <section className="bg-blue-50 rounded-lg p-8 my-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="rounded-full"
            />
            <Button className="rounded-full bg-[#003049]">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/Newsletter-illustration.png"
            alt="Newsletter illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

