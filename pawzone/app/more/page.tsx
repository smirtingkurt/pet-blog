import { AlertCircle } from "lucide-react"

export default function MorePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center">
        <AlertCircle className="w-16 h-16 mb-4 text-primary" />
        <h1 className="text-4xl font-bold mb-4">敬请期待</h1>
        <p className="text-lg text-muted-foreground mb-8">
          我们正在努力开发更多精彩内容，请持续关注！
        </p>
      </div>
    </div>
  )
} 