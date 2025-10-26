import { Button } from "@/components/ui/button";
import { MoveRight, Download } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.15),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ready to Navigate
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Beyond the Route?
            </span>
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Join thousands of drivers who stay connected, informed, and safe on India's roads with Flix.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="gap-3 text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Download className="w-5 h-5" />
              Download Flix
            </Button>
            <Button size="lg" variant="outline" className="gap-3 text-lg px-8 py-6 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
              Learn More
              <MoveRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">100%</p>
              <p className="text-neutral-400">Offline Capable</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">AI</p>
              <p className="text-neutral-400">Powered Routing</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-400 mb-2">24/7</p>
              <p className="text-neutral-400">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
