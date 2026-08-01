import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is included in turnkey home construction?",
    a: "We handle everything from design, approvals, construction, interiors, and final handover.",
  },
  {
    q: "Do you provide fixed pricing?",
    a: "Yes, we offer transparent per-sqft pricing with no hidden costs.",
  },
  {
    q: "How long does construction usually take?",
    a: "Typically 8–12 months depending on size and customization.",
  },
  {
    q: "Can I customize the design?",
    a: "Absolutely! You can fully customize layouts, materials, and finishes.",
  },
  {
    q: "How can I track construction progress?",
    a: "We provide a live dashboard with updates, photos, and reports.",
  },
  {
    q: "What quality checks do you follow during construction?",
    a: "We follow 150+ quality checks across all stages of construction.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section
      className="bg-gray-50 py-14 px-4 -mt-5"
      aria-labelledby="faq-heading"
      aria-describedby="faq-description"
    >
      {/* Heading */}
      <header className="text-center mb-7 -mt-5">
        <h2
          id="faq-heading"
          className="text-4xl font-bold text-gray-900"
        >
          Frequently Asked Questions
        </h2>

        <p
          id="faq-description"
          className="text-gray-500 mt-3"
        >
          Everything you need to know about working with us.
        </p>
      </header>

      {/* FAQ List */}
      <div
        className="max-w-3xl mx-auto space-y-3"
        role="list"
      >
        {faqs.map((item, i) => (
          <article
            key={item.q}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
            itemScope
            itemType="https://schema.org/Question"
          >
            {/* Question */}
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span
                className="text-sm font-medium text-gray-800"
                itemProp="name"
              >
                {item.q}
              </span>

              <ChevronDown
                aria-hidden="true"
                className={`w-5 h-5 transition-transform duration-300 ${
                  open === i
                    ? "rotate-180 text-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>

            {/* Answer */}
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`px-6 transition-all duration-300 ${
                open === i
                  ? "max-h-40 pb-5 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="https://schema.org/Answer"
            >
              <p
                className="text-gray-600 text-xs leading-relaxed"
                itemProp="text"
              >
                {item.a}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQ;