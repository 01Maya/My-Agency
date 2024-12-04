"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { User, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CEO, TechStart",
    content: "Working with this agency has transformed our digital presence. Their innovative approach and attention to detail are unmatched.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Marketing Director",
    content: "The team's creativity and technical expertise helped us achieve our goals faster than we thought possible.",
  },
  {
    id: 3,
    name: "Michael Roberts",
    role: "Founder, InnovateCo",
    content: "Their strategic insights and execution capabilities have been instrumental in our growth journey.",
  }
]

export function TestimonialCarousel() {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
      <div>
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-10 h-10 text-primary" />
              </div>
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xl md:text-2xl mb-6 text-center text-muted-foreground">
              {testimonials[current].content}
            </p>
            <div className="text-center">
              <h4 className="font-semibold">{testimonials[current].name}</h4>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current ? "bg-primary w-4" : "bg-muted"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}

