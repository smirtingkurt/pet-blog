import { ContactMethods } from "@/components/contact-methods"
import { FaqSection } from "@/components/faq-section"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">联系我们</h1>
        <p className="text-lg text-muted-foreground">
          无论您有任何问题或建议，我们都随时准备为您提供帮助。选择以下任意方式与我们取得联系。
        </p>
      </div>

      <ContactMethods />

      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">发送消息</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input 
                  type="text"
                  className="w-full rounded-md border border-input px-3 py-2"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">电子邮箱</label>
                <input 
                  type="email"
                  className="w-full rounded-md border border-input px-3 py-2"
                  placeholder="请输入您的邮箱"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">主题</label>
              <input 
                type="text"
                className="w-full rounded-md border border-input px-3 py-2"
                placeholder="请输入消息主题"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">消息内容</label>
              <textarea 
                className="w-full rounded-md border border-input px-3 py-2 h-32"
                placeholder="请输入您的消息内容"
              />
            </div>
            <button 
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              发送消息
            </button>
          </form>
        </div>
      </div>

      <FaqSection />
    </div>
  )
}

