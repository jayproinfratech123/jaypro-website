import { Home, PenTool, Sofa, TreePine, Compass, Ruler, Sparkles, Box } from "lucide-react";

const services = [
  { icon: Home, title: "House Construction", desc: "End-to-end turnkey construction from foundation to handover." },
  { icon: PenTool, title: "House Design", desc: "Custom floor plans tailored to your plot and lifestyle." },
  { icon: Sofa, title: "Interior Design", desc: "Full interior styling, furniture, and material selection." },
  { icon: TreePine, title: "Exterior Design", desc: "Facades, landscaping, and elevation that stand out." },
  { icon: Compass, title: "Architecture Planning", desc: "Structural and architectural drawings by licensed architects." },
  { icon: Ruler, title: "Structural Drawing", desc: "Detailed structural and load-bearing documentation." },
  { icon: Sparkles, title: "Vastu Consultation", desc: "Vastu-compliant layouts guided by expert consultants." },
  { icon: Box, title: "3D Elevation", desc: "Photorealistic 3D walkthroughs before you break ground." },
];

const ServicesGrid = () => (
  <section className="container-xl py-24">
    <div className="mb-14 max-w-xl">
      <span className="section-label"><span className="h-px w-6 bg-amber-500" /> What we offer</span>
      <h2 className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl">
        Every service, under one roof
      </h2>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="group rounded-sm border border-black/5 bg-white p-6 transition hover:border-amber-500/40 hover:shadow-md">
          <Icon className="mb-4 h-8 w-8 text-amber-500" />
          <h3 className="mb-2 font-display font-semibold text-blueprint-900">{title}</h3>
          <p className="text-sm text-charcoal/60">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesGrid;
