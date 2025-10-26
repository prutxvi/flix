import { Button } from "@/components/ui/button";
import { MoveRight, Download } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ready to Navigate
            <span className="block text-white">
              Beyond the Route?
            </span>
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Join thousands of drivers who stay connected, informed, and safe on India's roads with Flix.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="gap-3 text-lg px-8 py-6 bg-white text-black hover:bg-neutral-200">
              <Download className="w-5 h-5" />
              Download Flix
            </Button>
            <Button size="lg" variant="outline" className="gap-3 text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black">
              Learn More
              <MoveRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-neutral-400">Offline Capable</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">AI</p>
              <p className="text-neutral-400">Powered Routing</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-neutral-400">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
