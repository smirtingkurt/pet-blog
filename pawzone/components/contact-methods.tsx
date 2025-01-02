import { Phone, MapPin, MessageSquare } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Chat to sales",
    description: "Speak to our friendly team.",
    link: "sales@untitledui.com",
    href: "mailto:sales@untitledui.com"
  },
  {
    icon: MessageSquare,
    title: "Chat to support",
    description: "We're here to help.",
    link: "support@untitledui.com",
    href: "mailto:support@untitledui.com"
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "Visit our office HQ.",
    link: "View on Google Maps",
    href: "https://maps.google.com"
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    link: "+1(555)000-0000",
    href: "tel:+1(555)000-0000"
  }
]

export function ContactMethods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
      {contactMethods.map((method, index) => (
        <Card key={index} className="border-none shadow-none">
          <CardContent className="pt-6">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 mb-4">
              <method.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{method.title}</h3>
            <p className="text-muted-foreground mb-2">{method.description}</p>
            <a 
              href={method.href}
              className="text-primary hover:underline"
            >
              {method.link}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

