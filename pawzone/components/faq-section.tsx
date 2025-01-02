"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const initialFaqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time. Your new plan will take effect immediately."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. You'll continue to have access to your plan until the end of your billing period."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information to your invoices, such as your company details, VAT number, or specific billing requirements."
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually, depending on your preference. Payment is processed securely via credit card or bank transfer."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email from your account settings. A verification email will be sent to your new email address."
  },
  {
    question: "How does support work?",
    answer: "Our support team is available 24/7 via chat, email, or phone. Premium plans include priority support."
  },
  {
    question: "Do you provide tutorials?",
    answer: "Yes, we provide comprehensive documentation, video tutorials, and regular webinars to help you get the most out of our platform."
  }
]

export function FaqSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedFaqs = showAll ? initialFaqs : initialFaqs.slice(0, 5)

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently asked questions
      </h2>
      
      <Accordion type="single" collapsible className="mb-8">
        {displayedFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {!showAll && (
        <div className="text-center">
          <Button
            variant="secondary"
            onClick={() => setShowAll(true)}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  )
}

