import { ShieldCheck, Clock, Radio, Wallet } from "lucide-react";

const points = [
  { icon: Radio, title: "Live Tracking", desc: "Daily photos, videos, and GPS-tagged updates from every site." },
  { icon: ShieldCheck, title: "Verified Materials", desc: "Every batch of cement, steel, and tiles logged and traceable." },
  { icon: Clock, title: "On-Time Delivery", desc: "98% of our projects are handed over on the promised date." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No hidden costs — see exactly where every rupee goes." },
];

const WhyChooseUs = () => (
  <section className="container-xl py-24">
    <div className="mb-14 max-w-xl">
      <span className="section-label text-red-600"><span className="h-px w-6 bg-red-600" /> Why jaypro infratech</span>
      <h2 className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl">Built on trust, tracked in real time</h2>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {points.map(({ icon: Icon, title, desc }) => (
        <div key={title}>
          <Icon className="mb-4 h-8 w-8 text-red-600" />
          <h3 className="mb-2 font-display font-semibold text-blueprint-900">{title}</h3>
          <p className="text-sm text-charcoal/60">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
