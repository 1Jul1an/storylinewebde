import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, TrendingUp, Calendar, Gamepad2, MessageCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ParticleBackground } from "@/components/particle-background"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-rp-primary text-rp-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rp-primary via-rp-secondary to-rp-primary opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/image2.png?height=1080&width=1920')] bg-cover bg-center opacity-60"></div>
        {/* Particle Background */}
        <ParticleBackground />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-rp-button-primary hover:bg-rp-button-hover-primary text-rp-text-primary border-rp-border-secondary">
            Seit 4 Jahren vertraut
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
            <span className="block">Storyline</span>
            <span className="block text-rp-border-secondary">Ein neuer Anfang</span>
            <span className="block text-white">auf FiveM.</span>
          </h1>


          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Tauche ein in authentisches Roleplay mit einer tollen Community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
                asChild
                size="lg"
                className="bg-rp-button-secondary text-rp-button-primary hover:text-rp-button-secondary hover:bg-rp-button-hover-primary font-semibold px-8 py-4 text-lg transition-colors duration-300"
            >
              <a
                  href="https://discord.gg/yeyUzTyySh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Jetzt beitreten
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-rp-border-secondary text-rp-border-secondary hover:bg-rp-border-secondary hover:text-rp-primary px-8 py-4 text-lg bg-transparent duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Mehr erfahren
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rp-border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rp-border-secondary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Unsere Geschichte Section - Elegant Dark Design */}
      <section className="relative py-32 bg-elegant-bg">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-elegant-card border border-elegant-border mb-6">
                <div className="w-2 h-2 bg-elegant-accent rounded-full animate-pulse"></div>
                <span className="text-elegant-text-muted text-sm font-medium">Unsere Reise</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light mb-6 text-elegant-text tracking-tight">
                Vier Jahre
                <span className="block text-elegant-accent font-normal">Geschichte</span>
              </h2>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-elegant-accent to-transparent mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-elegant-text-muted leading-relaxed">
                    Seit vier Jahren haben wir auf Alt:V eine einzigartige Community aufgebaut, die für authentisches
                     Roleplay steht. Unsere Spieler haben gemeinsam unzählige Geschichten geschrieben und eine
                    Welt erschaffen, die weit über das gewöhnliche Gaming hinausgeht.
                  </p>

                  <p className="text-lg text-elegant-text-muted leading-relaxed">
                    Der Wechsel zu FiveM ermöglicht es uns, unsere Vision noch weiter zu verwirklichen. Mit erweiterten
                    Möglichkeiten, besserer Performance und einer größeren Community starten wir in ein neues Kapitel
                    unserer Geschichte.
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-elegant-card/50 border border-elegant-border">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-elegant-accent" />
                  </div>
                  <div>
                    <div className="text-elegant-text font-medium">4 Jahre Erfahrung</div>
                    <div className="text-elegant-text-muted text-sm">Kontinuierliche Weiterentwicklung</div>
                  </div>
                </div>
              </div>

              {/* Timeline Visual */}
              <div className="relative">
                <div className="bg-elegant-card rounded-2xl p-8 border border-elegant-border">
                  <div className="space-y-8">
                    {/* Alt:V Era */}
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-light text-elegant-text">2021-2025</div>
                          <div className="text-elegant-text-muted">Alt:V Ära</div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-elegant-accent/20 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-elegant-accent"></div>
                        </div>
                      </div>
                      <div className="h-2 bg-elegant-border rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-elegant-accent to-elegant-accent-hover rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-elegant-border"></div>
                      <div className="text-elegant-text-muted text-sm">Übergang</div>
                      <div className="flex-1 h-px bg-elegant-border"></div>
                    </div>

                    {/* FiveM Future */}
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-light text-elegant-text">2025+</div>
                          <div className="text-elegant-text-muted">FiveM Zukunft</div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-elegant-accent/20 flex items-center justify-center animate-pulse">
                          <div className="w-6 h-6 rounded-full bg-elegant-accent"></div>
                        </div>
                      </div>
                      <div className="h-2 bg-elegant-border rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-elegant-accent to-elegant-accent-hover rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Elegant Design */}
      <section className="py-32 bg-elegant-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-elegant-card border border-elegant-border mb-6">
                <div className="w-2 h-2 bg-elegant-accent rounded-full"></div>
                <span className="text-elegant-text-muted text-sm font-medium">Features</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light mb-6 text-elegant-text tracking-tight">
                Server
                <span className="block text-elegant-accent font-normal">Features</span>
              </h2>
              <div
                  className="w-24 h-px bg-gradient-to-r from-transparent via-elegant-accent to-transparent mx-auto"></div>
              <p className="text-xl text-elegant-text-muted max-w-2xl mx-auto leading-relaxed mt-4">
                Erlebe Roleplay auf einem völlig neuen Level mit unseren durchdachten Features
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                  icon: Shield,
                  title: "Whitelist-System",
                  description: "Strenge Auswahl garantiert qualitativ hochwertiges Roleplay und eine reife Community.",
                },
                {
                  icon: TrendingUp,
                  title: "Realistisches Wirtschaftssystem",
                  description:
                    "Komplexe Wirtschaftsmechaniken schaffen authentische Herausforderungen und Möglichkeiten.",
                },
                {
                  icon: Users,
                  title: "Tiefgehende Charakterentwicklung",
                  description: "Entwickle deinen Charakter über Monate hinweg mit echten Konsequenzen und Wachstum.",
                },
                {
                  icon: Calendar,
                  title: "Community-Events",
                  description:
                    "Regelmäßige Events und storylines, die von der Community und dem Team gemeinsam gestaltet werden.",
                },
                {
                  icon: Gamepad2,
                  title: "authentisches Roleplay",
                  description: "Authentische Interaktionen ohne Arcade-Elemente für maximale Immersion.",
                },
                {
                  icon: MessageCircle,
                  title: "Aktive Community",
                  description: "Eine lebendige, respektvolle Community, die gemeinsam unvergessliche Momente schafft.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group bg-elegant-card border-elegant-border hover:border-elegant-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-elegant-accent/10"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-elegant-accent/10 flex items-center justify-center group-hover:bg-elegant-accent/20 transition-colors duration-300">
                        <feature.icon className="h-7 w-7 text-elegant-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-4 text-elegant-text group-hover:text-elegant-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-elegant-text-muted leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section - Elegant Design */}
      <section className="py-32 bg-elegant-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Header */}
            <div className="mb-16">
              <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-elegant-card border border-elegant-border mb-6">
                <div className="w-2 h-2 bg-elegant-accent rounded-full animate-pulse"></div>
                <span className="text-elegant-text-muted text-sm font-medium">Community</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light mb-6 text-elegant-text tracking-tight">
                Werde Teil unserer
                <span className="block text-elegant-accent font-normal">Geschichte</span>
              </h2>
              <div
                  className="w-24 h-px bg-gradient-to-r from-transparent via-elegant-accent to-transparent mx-auto mb-4"></div>

              <p className="text-xl text-elegant-text-muted leading-relaxed max-w-3xl mx-auto">
                Bereit für authentisches Roleplay? Tritt unserer Community bei und erlebe, was echtes Roleplay
                bedeutet. Der Bewerbungsprozess stellt sicher, dass nur die besten Rollenspieler Teil unserer Welt
                werden.
              </p>
            </div>

            {/* CTA Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="group bg-elegant-card border-elegant-border hover:border-elegant-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-elegant-accent/10">
                <CardContent className="p-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-elegant-accent/10 flex items-center justify-center mx-auto group-hover:bg-elegant-accent/20 transition-colors duration-300">
                      <MessageCircle className="h-8 w-8 text-elegant-accent" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium mb-4 text-elegant-text">
                    Storyline - Discord
                  </h3>

                  <p className="text-elegant-text-muted mb-8 leading-relaxed">
                    Tritt unserem Discord bei, lerne die Community kennen und erhalte alle wichtigen Updates.
                  </p>

                  <Button
                      asChild
                      className="w-full bg-elegant-accent hover:bg-elegant-accent-hover text-gray-900 font-medium py-3 rounded-xl transition-all duration-300"
                  >
                    <a href="https://discord.gg/yeyUzTyySh" target="_blank" rel="noopener noreferrer">
                      Discord beitreten
                    </a>
                  </Button>
                </CardContent>
              </Card>



              <Card className="group bg-elegant-card border-elegant-border hover:border-elegant-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-elegant-accent/10">
                <CardContent className="p-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-elegant-accent/10 flex items-center justify-center mx-auto group-hover:bg-elegant-accent/20 transition-colors duration-300">
                      <Shield className="h-8 w-8 text-elegant-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-4 text-elegant-text">Whitelist Bewerbung</h3>
                  <p className="text-elegant-text-muted mb-8 leading-relaxed">
                    Reiche deine Bewerbung ein und zeige uns, dass du bereit für authentisches Roleplay bist.
                  </p>
                  <Button
                      variant="outline"
                      className="relative w-full border-elegant-accent text-elegant-accent hover:bg-elegant-accent/10 hover:text-elegant-accent py-3 rounded-xl transition-all duration-300 bg-transparent cursor-not-allowed"
                  >
                    {/* Ausgangstext durchgestrichen */}
                    <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0 line-through">
        Jetzt bewerben
      </span>

                    {/* Zieltext sichtbar auf hover */}
                    <span className="transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        Coming Soon
      </span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Info Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Mindestalter: 18 Jahre", "Deutschsprachig", "Hardcore RP"].map((badge, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-elegant-border text-elegant-text-muted px-4 py-2 rounded-full bg-elegant-card/50"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Elegant Design */}
      <footer className="bg-elegant-bg border-t-2 border-green-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-light mb-4 text-elegant-text">Storyline</h3>
                <p className="text-elegant-text-muted mb-6 leading-relaxed max-w-md">
                  Vier Jahre Erfahrung. Ein neuer Anfang auf FiveM. Authentisches Roleplay mit einer tollen Community.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="sm"
                    className="bg-elegant-accent hover:bg-elegant-accent-hover text-gray-900 rounded-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Community Links */}
              <div>
                <h4 className="font-medium mb-6 text-elegant-text">Community</h4>
                <ul className="space-y-3">
                  {[
                    { label: "Discord Server", href: "https://discord.gg/yeyUzTyySh" },
                    { label: "Bewerbung", href: "#" },
                    { label: "Regelwerk", href: "#" },
                    { label: "Support", href: "#" },
                  ].map((item, index) => (
                      <li key={index}>
                        <Link
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-elegant-text-muted hover:text-elegant-accent transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>


              {/* Legal Links */}
              <div>
                <h4 className="font-medium mb-6 text-elegant-text">Rechtliches</h4>
                <ul className="space-y-3">
                  {["Impressum", "Datenschutz", "AGB"].map((link, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-elegant-text-muted hover:text-elegant-accent transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-elegant-border mt-12 pt-8 text-center">
              <p className="text-elegant-text-muted">&copy; 2025 Storyline. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
