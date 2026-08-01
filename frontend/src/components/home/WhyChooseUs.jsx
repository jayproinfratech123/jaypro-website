import { ShieldCheck, Clock, Radio, Wallet } from "lucide-react";

const points = [
  {
    icon: Radio,
    title: "Live Tracking",
    desc: "Daily photos, videos, and GPS-tagged updates from every site.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Materials",
    desc: "Every batch of cement, steel, and tiles logged and traceable.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "98% of our projects are handed over on the promised date.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "No hidden costs — see exactly where every rupee goes.",
  },
];

const WhyChooseUs = () => (
  <section
    className="container-xl py-24"
    aria-labelledby="why-choose-heading"
    aria-describedby="why-choose-description"
  >
    {/* Section Header */}
    <header className="mb-14 max-w-xl">
      <span className="section-label text-red-600">
        <span
          className="h-px w-6 bg-red-600"
          aria-hidden="true"
        />
        Why Jaypro Infratech
      </span>

      <h2
        id="why-choose-heading"
        className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl"
      >
        Built on trust, tracked in real time
      </h2>

      <p
        id="why-choose-description"
        className="mt-4 text-charcoal/60"
      >
        Discover why homeowners choose Jaypro Infratech for transparent
        pricing, verified construction materials, live project tracking,
        and on-time delivery.
      </p>
    </header>

    {/* Features */}
    <div
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      role="list"
    >
      {points.map(({ icon: Icon, title, desc }) => (
        <article
          key={title}
          className="h-full"
          itemScope
          itemType="https://schema.org/Service"
        >
          <Icon
            className="mb-4 h-8 w-8 text-red-600"
            aria-hidden="true"
          />

          <h3
            className="mb-2 font-display font-semibold text-blueprint-900"
            itemProp="name"
          >
            {title}
          </h3>

          <p
            className="text-sm text-charcoal/60"
            itemProp="description"
          >
            {desc}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;