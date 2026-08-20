import LeadForm from "../components/LeadForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="container-xl py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          SECTION LABEL
      ===================================================== */}
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
        <span className="h-px w-6 bg-red-600" />
        Contact
      </div>

      {/* =====================================================
          HEADING
      ===================================================== */}
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold leading-tight text-blueprint-900 sm:text-4xl lg:text-5xl">
          Let's talk about your build
        </h1>

        <p className="mt-4 text-base leading-7 text-charcoal/70 sm:text-lg">
          Have a project in mind? Get in touch with our team for
          construction, architecture, interior design, and planning
          services.
        </p>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

        {/* ===================================================
            LEAD FORM
        =================================================== */}
        <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">

          <div className="border-b border-black/5 px-5 py-4 sm:px-6">
            <h2 className="text-xl font-bold text-blueprint-900">
              Send us your requirement
            </h2>

            <p className="mt-1 text-sm text-charcoal/60">
              Fill in your details and our team will get back to you.
            </p>
          </div>

          <div className="p-3 sm:p-5">
            <LeadForm />
          </div>

        </div>

        {/* ===================================================
            CONTACT DETAILS
        =================================================== */}
        <div className="space-y-5">

          {/* =================================================
              PHONE
          ================================================= */}
          <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:border-red-200 sm:p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50">
                <Phone className="h-5 w-5 text-red-600" />
              </div>

              <div>

                <h3 className="font-semibold text-blueprint-900">
                  Call Us
                </h3>

                <div className="mt-2 space-y-1">

                  <a
                    href="tel:+919835852462"
                    className="block text-sm text-charcoal/70 transition hover:text-red-600 sm:text-base"
                  >
                    +91 9835852462
                  </a>

                  <a
                    href="tel:+916299778784"
                    className="block text-sm text-charcoal/70 transition hover:text-red-600 sm:text-base"
                  >
                    +91 6299778784
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              EMAIL
          ================================================= */}
          <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:border-red-200 sm:p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50">
                <Mail className="h-5 w-5 text-red-600" />
              </div>

              <div>

                <h3 className="font-semibold text-blueprint-900">
                  Email Us
                </h3>

                <a
                  href="mailto:info@jayproinfratech.com"
                  className="mt-2 block text-sm text-charcoal/70 transition hover:text-red-600 sm:text-base"
                >
                  info@jayproinfratech.com
                </a>

              </div>

            </div>

          </div>

          {/* =================================================
              PATNA OFFICE
          ================================================= */}
          <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:border-red-200 sm:p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50">
                <MapPin className="h-5 w-5 text-red-600" />
              </div>

              <div>

                <h3 className="font-semibold text-blueprint-900">
                  Patna Office
                </h3>

                <p className="mt-2 text-sm leading-6 text-charcoal/70 sm:text-base">
                  210, 2nd Floor, Orchid Mall,
                  <br />
                  Opp. A.N. College Main Gate,
                  <br />
                  Boring Road, Patna - 800001
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              NOIDA OFFICE
          ================================================= */}
          <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:border-red-200 sm:p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50">
                <MapPin className="h-5 w-5 text-red-600" />
              </div>

              <div>

                <h3 className="font-semibold text-blueprint-900">
                  Noida Office
                </h3>

                <p className="mt-2 text-sm leading-6 text-charcoal/70 sm:text-base">
                  H-169, H Block,
                  <br />
                  Sector 63, Noida,
                  <br />
                  Uttar Pradesh - 201309
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              WORKING HOURS
          ================================================= */}
          <div className="rounded-xl border border-red-100 bg-red-50/60 p-5 sm:p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                <Clock className="h-5 w-5 text-red-600" />
              </div>

              <div>

                <h3 className="font-semibold text-blueprint-900">
                  Working Hours
                </h3>

                <p className="mt-2 text-sm leading-6 text-charcoal/70 sm:text-base">
                  Monday - Saturday
                  <br />
                  10:00 AM - 6:30 PM
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM CTA
          BACKGROUND COLOR REMOVED
      ===================================================== */}
      <div
        className="
          mt-12
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-6
          py-10
          text-center
          shadow-sm
          sm:px-10
          sm:py-12
        "
      >

        {/* Small Label */}

        <div className="mb-3 flex items-center justify-center gap-2">

          <span className="h-px w-8 bg-red-600" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            Get Started
          </span>

          <span className="h-px w-8 bg-red-600" />

        </div>

        {/* Heading */}

        <h2 className="text-2xl font-bold text-blueprint-900 sm:text-3xl">
          Ready to start your project?
        </h2>

        {/* Description */}

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-charcoal/70 sm:text-base">
          Talk to our team today and take the first step toward
          building your dream space.
        </p>

        {/* Call Button */}

        <a
          href="tel:+919835852462"
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-red-600
            px-6
            py-3
            text-sm
            font-bold
            text-white
            shadow-sm
            transition
            duration-300
            hover:bg-red-700
            hover:shadow-md
          "
        >
          <Phone className="h-4 w-4" />
          Call Us Now
        </a>

      </div>

    </section>
  );
};

export default Contact;