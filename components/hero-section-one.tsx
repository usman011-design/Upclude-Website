import { AnimatedText } from "./animated-text"

export function HeroSectionOne() {
  const messages = [
    "Find peace in the present moment, one breath at a time.",
    "Release tension and embrace tranquility with guided practices.",
    "Your journey to calm starts here, with gentle support every step.",
  ]

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-muted to-background pt-16 md:pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/peaceful-meditation-person-sitting-by-calm-water-a.jpg"
                alt="Peaceful meditation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="order-1 md:order-2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight text-balance">Drop Anxiety</h1>
            <AnimatedText
              texts={messages}
              interval={4000}
              className="text-xl md:text-2xl text-foreground leading-relaxed"
            />
            <button className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
