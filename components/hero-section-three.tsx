import { AnimatedText } from "./animated-text"

export function HeroSectionThree() {
  const messages = [
    "Discover personalized techniques that work for your unique needs.",
    "Track your progress and celebrate small victories along the way.",
    "Access expert guidance whenever you need support and reassurance.",
  ]

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-tr from-background via-muted/50 to-background relative overflow-hidden py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-muted">
              <img
                src="/person-journaling-peacefully-in-cozy-room-with-pla.jpg"
                alt="Personal growth journey"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Personalized Support
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight text-balance">
              Your Path to Peace
            </h2>
            <AnimatedText
              texts={messages}
              interval={4000}
              className="text-xl md:text-2xl text-foreground leading-relaxed"
            />
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground mt-2">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground mt-2">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-foreground">24/7</div>
                <div className="text-sm text-muted-foreground mt-2">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
