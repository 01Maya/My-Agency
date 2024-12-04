"use client"

import * as React from "react"
import { useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Process", href: "#process" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navbarHeight = 64 // Adjust this value based on your navbar height
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      setIsOpen(false) // Close the mobile menu after clicking
    }
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-200",
      isScrolled ? "bg-white shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Agency.
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="hover:bg-primary/90 transition-colors">Contact Us</Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline"
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full hover:bg-primary/90 transition-colors">Contact Us</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export function SectionWrapper({ id, children }: { id: string, children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16">
      {children}
    </section>
  )
}

