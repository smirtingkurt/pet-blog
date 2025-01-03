import CatProfile from "@/components/cat-profile"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "关于我们 | PawZone",
  description: "了解更多关于我们可爱的猫咪们"
}

export default function AboutPage() {
  return (
    <main>
      <CatProfile />
    </main>
  )
} 