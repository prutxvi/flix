import './App.css';
import { DotScreenShader } from '@/components/ui/dot-shader-background';
import { Hero } from '@/components/ui/animated-hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import TechStackSection from '@/components/TechStackSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { CTASection } from '@/components/CTASection';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="fixed inset-0 z-0">
        <DotScreenShader />
      </div>

      <div className="relative z-10">
        <Hero />
        <FeaturesSection />
        <TechStackSection />
        <HowItWorksSection />
        <CTASection />

        <footer className="border-t border-neutral-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-neutral-400 text-sm">
                © 2025 Flix. Beyond the Route.
              </div>
              <div className="flex gap-6 text-sm text-neutral-400">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
