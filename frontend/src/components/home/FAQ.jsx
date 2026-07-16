import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does a typical house construction take?", a: "Most 2-floor homes are completed in 8–12 months depending on plot size and package tier." },
  { q: "Can I track my project remotely?", a: "Yes — every project gets a live dashboard with daily photos, videos, and progress percentages." },
  { q: "Do you provide Vastu-compliant designs?", a: "Yes, our in-house Vastu consultants review every floor plan on request." },
  { q: "What payment methods are supported?", a: "Razorpay, Stripe, UPI, cards, net banking, and milestone-based EMI plans." },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="container-xl py-24">
      <div className="mb-10 max-w-xl">
        <span className="section-label"><span className="h-px w-6 bg-amber-500" /> FAQs</span>
        <h2 className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl">Common questions</h2>
      </div>
      <div className="mx-auto max-w-3xl divide-y divide-black/10 border-y border-black/10">
        {faqs.map((item, i) => (
          <div key={item.q}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left font-display font-medium text-blueprint-900"
            >
              {item.q}
              <ChevronDown className={`h-4 w-4 transition ${open === i ? "rotate-180 text-amber-500" : ""}`} />
            </button>
            {open === i && <p className="pb-5 text-sm text-charcoal/60">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
