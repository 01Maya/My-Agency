"use client"

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InteractiveHero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log(`Submitted email: ${email}`)
      setEmail('')
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
        Transform Your Digital Presence
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        We create innovative digital solutions that help businesses thrive in the modern world. Let's build something amazing together.
      </p>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit" className="w-full sm:w-auto hover:bg-primary/90 transition-colors">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

