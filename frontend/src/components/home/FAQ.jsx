import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is included in turnkey home construction?",
    a: "Our turnkey home construction service covers the complete process from architectural design, floor planning, structural design, electrical and plumbing planning to construction, finishing, interiors and final handover. This provides homeowners with a single construction partner for their complete house construction project.",
  },
  {
    q: "How much does house construction cost?",
    a: "House construction cost depends on the built-up area, architectural design, structural requirements, material quality, finishing specifications, labour and project location. We provide transparent construction packages and detailed estimates so you can plan your home construction budget effectively.",
  },
  {
    q: "Do you provide complete home construction with materials?",
    a: "Yes. Our complete home construction services can include construction materials, labour, civil work, electrical work, plumbing, flooring, painting and other agreed finishing requirements. The exact scope depends on the construction package selected by the client.",
  },
  {
    q: "How long does house construction usually take?",
    a: "A residential house construction project typically takes around 8–12 months depending on the size of the house, design complexity, site conditions, approvals, weather and selected specifications. We create a project schedule and monitor construction progress throughout the project.",
  },
  {
    q: "Can I customize my home design and floor plan?",
    a: "Absolutely. You can customize your house floor plan, room sizes, elevation, architectural design, kitchen, wardrobes, interiors, electrical points and other requirements. Our team can help create a practical home design based on your lifestyle, plot size and budget.",
  },
  {
    q: "Do you provide Vastu-based home design?",
    a: "Yes. We can incorporate Vastu considerations into your home floor plan, room placement, entrance planning, kitchen location, bedroom positioning and other important areas while maintaining a practical and functional architectural design.",
  },
  {
    q: "What quality checks do you follow during house construction?",
    a: "We follow quality checks at different stages of construction, including foundation, reinforcement, concrete work, brickwork, plastering, waterproofing, electrical work, plumbing, flooring and finishing. Proper material selection and workmanship checks help maintain construction quality.",
  },
  {
    q: "Can I track my home construction progress?",
    a: "Yes. Construction progress can be monitored through regular project updates, site photographs, reports and project tracking. Our goal is to keep homeowners informed about important construction stages and progress throughout their house construction project.",
  },
  {
    q: "Do you provide architectural and structural design services?",
    a: "Yes. Our home design services can include floor plans, architectural drawings, front elevation designs, structural plans, electrical plans, plumbing plans, Vastu planning and working drawings. These drawings help create a proper foundation for residential construction.",
  },
  {
    q: "How do I start my home construction project?",
    a: "You can start by sharing your plot details, location, approximate plot size, construction requirements and budget. Our team can then discuss your requirements, recommend suitable design and construction options, prepare an estimate and guide you through the next steps.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section
      className="bg-gray-50 px-4 py-14 -mt-5"
      aria-labelledby="faq-heading"
      aria-describedby="faq-description"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* =====================================================
          SEO HEADING
      ====================================================== */}

      <header className="mx-auto mb-8 max-w-3xl text-center -mt-5">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-red-500" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            Home Construction FAQ
          </span>

          <span className="h-px w-8 bg-red-500" />
        </div>

        <h2
          id="faq-heading"
          className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
        >
          Frequently Asked Questions About Home Construction
        </h2>

        <p
          id="faq-description"
          className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base"
        >
          Find answers to common questions about house construction,
          turnkey construction, home design, construction cost, Vastu,
          quality checks and project management.
        </p>
      </header>

      {/* =====================================================
          FAQ LIST
      ====================================================== */}

      <div
        className="mx-auto max-w-4xl space-y-3"
        role="list"
      >
        {faqs.map((item, i) => {
          const isOpen = open === i;

          return (
            <article
              key={item.q}
              className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-red-200 shadow-md"
                  : "border-gray-200"
              }`}
              itemScope
              itemType="https://schema.org/Question"
              role="listitem"
            >
              {/* =================================================
                  QUESTION
              ================================================== */}

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-gray-50 md:px-6 md:py-5"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span
                  className={`text-sm font-semibold leading-6 md:text-base ${
                    isOpen
                      ? "text-red-600"
                      : "text-gray-800"
                  }`}
                  itemProp="name"
                >
                  {item.q}
                </span>

                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition ${
                    isOpen
                      ? "bg-red-50"
                      : "bg-gray-100"
                  }`}
                >
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </span>
              </button>

              {/* =================================================
                  ANSWER
              ================================================== */}

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4 md:px-6">
                    <p
                      className="text-sm leading-7 text-gray-600 md:text-base"
                      itemProp="text"
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* =====================================================
          SEO SUPPORTING CONTENT
      ====================================================== */}

     
    </section>
  );
};

export default FAQ;