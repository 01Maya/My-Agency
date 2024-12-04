"use client"

import { useState } from 'react'
import { Paintbrush, Code2, BarChart, MessageSquare, Settings, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Design",
    description: "Beautiful, modern designs that help your brand stand out",
    details: "Our design process involves understanding your brand, researching your market, and creating visually stunning and functional designs that resonate with your target audience."
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Development",
    description: "Clean, efficient code that brings your vision to life",
    details: "We use cutting-edge technologies and best practices to develop robust, scalable, and maintainable applications that meet your business needs and exceed user expectations."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Marketing",
    description: "Strategic marketing solutions to grow your business",
    details: "Our data-driven marketing strategies help you reach your target audience, increase brand awareness, and drive conversions through various digital channels."
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Consulting",
    description: "Expert advice to guide your digital transformation",
    details: "We provide in-depth analysis of your business processes and offer tailored recommendations to optimize your digital strategy and achieve your goals."
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Support",
    description: "Reliable technical support to keep you running smoothly",
    details: "Our dedicated support team is available to address any issues, provide maintenance, and ensure your digital solutions continue to perform at their best."
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Innovation",
    description: "Cutting-edge solutions for modern challenges",
    details: "We stay at the forefront of technological advancements to bring innovative solutions that give your business a competitive edge in the digital landscape."
  },
]

export function InteractiveServices() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index}
          className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => setActiveService(activeService === index ? null : index)}
        >
          <CardContent className="p-6">
            <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            {activeService === index && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-4">{service.details}</p>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors">
                  Learn More
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

