import { Shield, Wifi, Brain, MapPin, Radio, Zap } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

const features = [
  {
    icon: <Radio className="size-4 text-white" />,
    title: "Mesh Network",
    description: "Offline connectivity",
    iconClassName: "text-white",
    titleClassName: "text-white",
  },
  {
    icon: <Brain className="size-4 text-white" />,
    title: "AI Routing",
    description: "Personalized paths",
    iconClassName: "text-white",
    titleClassName: "text-white",
  },
  {
    icon: <Shield className="size-4 text-white" />,
    title: "Safety First",
    description: "Real-time alerts",
    iconClassName: "text-white",
    titleClassName: "text-white",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Features
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Experience navigation reimagined with cutting-edge technology designed for India's unique challenges
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <DisplayCards
            cards={features.map((feature, idx) => ({
              ...feature,
              className:
                idx === 0
                  ? "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
                  : idx === 1
                  ? "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
                  : "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
            }))}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Wifi className="w-8 h-8" />}
            title="Works Offline"
            description="Mesh networking keeps you connected via Bluetooth and Wi-Fi Direct when cellular signals fail"
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="AI-Powered Routes"
            description="Personalized navigation based on your driving style, experience level, and vehicle type"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Emergency SOS"
            description="Instant alerts through mesh network to nearby drivers and emergency services"
          />
          <FeatureCard
            icon={<MapPin className="w-8 h-8" />}
            title="Smart Downloads"
            description="Auto-downloads offline maps and hazard data for your entire route before you start"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Real-Time Hazards"
            description="Community-powered alerts for accidents, roadblocks, and dangerous conditions"
          />
          <FeatureCard
            icon={<Radio className="w-8 h-8" />}
            title="Mesh Strength"
            description="Every user strengthens the network, creating resilient connectivity everywhere"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-white/50 transition-all duration-300">
      <div className="relative z-10">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
