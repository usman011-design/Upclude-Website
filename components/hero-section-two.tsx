import { AnimatedText } from "./animated-text"

export function HeroSectionTwo() {
  const messages = [
    "Connect with a supportive community that understands your journey.",
    "Share experiences and find comfort in knowing you are not alone.",
    "Build resilience together through shared stories and encouragement.",
  ]

  return (
    <section className="min-h-screen flex items-center bg-card py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-card-foreground leading-tight text-balance">
              Find Your Community
            </h2>
            <AnimatedText
              texts={messages}
              interval={4000}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            />
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join Community
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/diverse-group-of-people-in-supportive-circle-outdo.jpg"
                alt="Supportive community"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
