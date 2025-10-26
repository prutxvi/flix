import { LogoCloud } from "@/components/ui/logo-cloud";

const techLogos = [
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EFlutter%3C/text%3E%3C/svg%3E",
    alt: "Flutter",
  },
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3ETensorFlow%3C/text%3E%3C/svg%3E",
    alt: "TensorFlow",
  },
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EMapbox%3C/text%3E%3C/svg%3E",
    alt: "Mapbox",
  },
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EMongoDB%3C/text%3E%3C/svg%3E",
    alt: "MongoDB",
  },
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EAWS%3C/text%3E%3C/svg%3E",
    alt: "AWS",
  },
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EFirebase%3C/text%3E%3C/svg%3E",
    alt: "Firebase",
  },
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EBluetooth%3C/text%3E%3C/svg%3E",
    alt: "Bluetooth Mesh",
  },
  {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EWi-Fi Direct%3C/text%3E%3C/svg%3E",
    alt: "Wi-Fi Direct",
  },
];

export default function TechStackSection() {
  return (
    <div className="min-h-[50vh] w-full flex items-center justify-center py-20 relative">
      <div
        aria-hidden="true"
        className="-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full opacity-0"
      />

      <section className="relative mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center font-medium text-white text-2xl tracking-tight md:text-4xl">
          <span className="text-neutral-400">Powered by cutting-edge tech.</span>
          <br />
          <span className="font-semibold text-white">
            Built for the future.
          </span>
        </h2>
        <div className="mx-auto my-8 h-px max-w-sm bg-neutral-800 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={techLogos} />

        <div className="mt-8 h-px bg-neutral-800 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}
