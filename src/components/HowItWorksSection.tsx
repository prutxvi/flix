import { Timeline } from "@/components/ui/timeline";
import { Network, Route, Download, AlertTriangle, Users, Radio } from "lucide-react";

export function HowItWorksSection() {
  const data = [
    {
      title: "Profile",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">
                Your Personalized Profile
              </p>
              <p className="text-neutral-400 text-sm">
                Experience level, driving style, vehicle type
              </p>
            </div>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            Flix creates a unique driver profile based on your experience, confidence level, and vehicle specifications. This profile powers all AI routing decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <p className="text-cyan-400 font-semibold mb-2">New Drivers</p>
              <p className="text-neutral-400 text-sm">Safer routes with fewer complexities</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <p className="text-blue-400 font-semibold mb-2">Experienced</p>
              <p className="text-neutral-400 text-sm">Optimized for speed and efficiency</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Route",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <Route className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">
                AI-Powered Routing
              </p>
              <p className="text-neutral-400 text-sm">
                Smart, adaptive, and personalized
              </p>
            </div>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            Our AI analyzes traffic patterns, weather conditions, road quality, and your profile to generate the safest and most efficient route for you specifically.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              Real-time traffic analysis
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              Weather-adaptive routing
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              Road quality assessment
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              Historical hazard data
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Offline",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
              <Download className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">
                Auto Offline Mode
              </p>
              <p className="text-neutral-400 text-sm">
                Never lose connection
              </p>
            </div>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            When you start a trip, Flix automatically downloads your entire route, all hazard data, and initializes the mesh network for complete offline functionality.
          </p>
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border border-emerald-500/30">
            <p className="text-emerald-400 font-semibold mb-3">What's Downloaded:</p>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Complete route maps with turn-by-turn data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Recent hazard reports and incident data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Emergency contact information for route area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Alternate routes and detour options</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Mesh",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Radio className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">
                Mesh Network Active
              </p>
              <p className="text-neutral-400 text-sm">
                Connected without internet
              </p>
            </div>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            When cellular signal drops, Flix automatically switches to mesh mode. Nearby users form a peer-to-peer network using Bluetooth and Wi-Fi Direct to relay critical information.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-5 h-5 text-purple-400" />
                <p className="text-purple-400 font-semibold">How It Works</p>
              </div>
              <p className="text-neutral-400 text-sm">
                Messages hop from device to device until they reach someone with internet, then sync to the cloud and emergency services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-purple-900/20 border border-purple-500/20 text-center">
                <p className="text-2xl font-bold text-purple-400 mb-1">300m</p>
                <p className="text-xs text-neutral-400">Bluetooth Range</p>
              </div>
              <div className="p-3 rounded-lg bg-pink-900/20 border border-pink-500/20 text-center">
                <p className="text-2xl font-bold text-pink-400 mb-1">100m</p>
                <p className="text-xs text-neutral-400">WiFi Direct</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Safety",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">
                Real-Time Hazard Alerts
              </p>
              <p className="text-neutral-400 text-sm">
                Stay informed, stay safe
              </p>
            </div>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            Receive instant voice warnings about accidents, road closures, weather hazards, and emergencies ahead. SOS alerts from nearby vehicles reach you through the mesh network instantly.
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-red-900/20 border border-red-500/30">
              <p className="text-red-400 font-semibold mb-2">⚠️ SOS Emergency</p>
              <p className="text-neutral-400 text-sm">
                Accident 500m ahead — mesh relay from nearby driver
              </p>
            </div>
            <div className="p-4 rounded-xl bg-orange-900/20 border border-orange-500/30">
              <p className="text-orange-400 font-semibold mb-2">🚧 Road Hazard</p>
              <p className="text-neutral-400 text-sm">
                Construction zone ahead — reduce speed
              </p>
            </div>
            <div className="p-4 rounded-xl bg-yellow-900/20 border border-yellow-500/30">
              <p className="text-yellow-400 font-semibold mb-2">🌧️ Weather Alert</p>
              <p className="text-neutral-400 text-sm">
                Heavy rain detected — drive carefully
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
          How Flix Works
        </h2>
        <p className="text-xl text-neutral-400 text-center mb-16 max-w-3xl mx-auto">
          From profile creation to emergency response, every feature works together to keep you safe
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
