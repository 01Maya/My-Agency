import { Navbar, SectionWrapper } from "@/components/navbar"
import { InteractiveHero } from "@/components/interactive-hero"
import { InteractiveServices } from "@/components/interactive-services"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Clock, Award, Users, Twitter, Linkedin, Instagram } from 'lucide-react'

const process = [
  { number: "01", title: "Discovery", description: "Understand your goals" },
  { number: "02", title: "Strategy", description: "Plan for success" },
  { number: "03", title: "Design", description: "Create beautiful solutions" },
  { number: "04", title: "Development", description: "Build with precision" },
  { number: "05", title: "Launch", description: "Deploy and optimize" }
]

const pricing = [
  {
    title: "Basic",
    price: "$999",
    description: "For small businesses",
    features: [
      "5 Pages Website",
      "Basic SEO Setup",
      "Mobile Responsive",
      "3 Rounds of Revisions",
      "1 Month Support"
    ]
  },
  {
    title: "Pro",
    price: "$1,999",
    description: "For growing companies",
    features: [
      "10 Pages Website",
      "Advanced SEO",
      "Mobile Responsive",
      "5 Rounds of Revisions",
      "3 Months Support",
      "Custom Features"
    ]
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited Pages",
      "Premium SEO",
      "Mobile Responsive",
      "Unlimited Revisions",
      "12 Months Support",
      "Custom Features",
      "Priority Support"
    ]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50 text-foreground">
      <Navbar />
      
      <SectionWrapper id="hero">
        <section className="pt-20 pb-16">
          <div className="container px-4 mx-auto">
            <InteractiveHero />
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="about">
        <section className="py-16 bg-white/50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're a team of passionate creators, developers, and strategists dedicated to delivering exceptional digital experiences.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Clock className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-lg">10+ Years</h4>
                    <p className="text-sm text-muted-foreground">of Experience</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Award className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-lg">200+</h4>
                    <p className="text-sm text-muted-foreground">Successful Projects</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-lg">50+</h4>
                    <p className="text-sm text-muted-foreground">Expert Team Members</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="services">
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive digital solutions tailored to your needs
              </p>
            </div>
            <InteractiveServices />
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="pricing">
        <section className="py-16 bg-white/50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
              <p className="text-xl text-muted-foreground">
                Choose the perfect plan for your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full hover:bg-primary/90 transition-colors">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="testimonials">
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="process">
        <section className="py-16 bg-white/50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground">
                How we bring your vision to life
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="contact">
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to start your digital journey? Contact us today!
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </SectionWrapper>

      <footer className="py-8 bg-white/50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Agency.</h3>
              <p className="text-muted-foreground">
                Creating digital excellence for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Design</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Development</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

