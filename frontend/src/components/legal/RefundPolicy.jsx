import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-5xl px-6">

        <h1 className="mb-3 text-4xl font-bold text-gray-900">
          Refund Policy
        </h1>

        <p className="mb-10 text-gray-500">
          Last Updated: January 01, 2026
        </p>

        <div className="space-y-8 rounded-xl bg-white p-8 shadow-lg">

          {/* Introduction */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              1. Introduction
            </h2>

            <p className="leading-8 text-gray-700">
              Thank you for choosing JayPro Infratech. We strive to provide
              high-quality architectural, structural, interior design and
              construction services. This Refund Policy explains when refunds
              may or may not be provided for our services.
            </p>
          </section>

          {/* Consultation */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              2. Consultation Fees
            </h2>

            <p className="leading-8 text-gray-700">
              Consultation charges are non-refundable once the consultation has
              been completed. If a consultation is cancelled by JayPro
              Infratech, a full refund will be provided.
            </p>
          </section>

          {/* Design Services */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              3. Architectural & Interior Design Services
            </h2>

            <p className="leading-8 text-gray-700">
              Since architectural drawings, structural designs, floor plans,
              3D elevations, and interior designs are customized according to
              each client's requirements, payments made after work has begun are
              generally non-refundable.
            </p>
          </section>

          {/* Construction */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              4. Construction Services
            </h2>

            <p className="leading-8 text-gray-700">
              Refund requests for construction projects are reviewed on a
              case-by-case basis. Costs already incurred for labour,
              construction materials, site visits, approvals and completed work
              will be deducted before any refund is considered.
            </p>
          </section>

          {/* Cancellation */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              5. Project Cancellation
            </h2>

            <p className="leading-8 text-gray-700">
              If a project is cancelled before any work has started, the client
              may be eligible for a partial refund after deducting processing,
              documentation and administrative expenses.
            </p>
          </section>

          {/* Digital Products */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              6. Digital Deliverables
            </h2>

            <p className="leading-8 text-gray-700">
              Architectural drawings, CAD files, 3D models, renders, PDFs,
              layouts and other digital deliverables cannot be refunded once
              they have been delivered to the client.
            </p>
          </section>

          {/* Refund Processing */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              7. Refund Processing Time
            </h2>

            <p className="leading-8 text-gray-700">
              Approved refunds will be processed within 7–14 business days
              through the original payment method used for the transaction.
            </p>
          </section>

          {/* Exceptions */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              8. Non-Refundable Items
            </h2>

            <ul className="list-disc space-y-2 pl-6 text-gray-700 leading-8">
              <li>Completed architectural drawings</li>
              <li>Interior design concepts</li>
              <li>3D elevation designs</li>
              <li>Site visit charges</li>
              <li>Consultation fees</li>
              <li>Government approval fees</li>
              <li>Third-party service charges</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              9. Contact Us
            </h2>

            <p className="leading-8 text-gray-700">
              If you have any questions regarding this Refund Policy, please
              contact us:
            </p>

            <div className="mt-5 rounded-lg bg-gray-100 p-5">

              <h3 className="mb-3 text-lg font-semibold">
                JayPro Infratech
              </h3>

              <p>
                <strong>Patna Office:</strong>
              </p>

              <p>
                210, 2nd Floor, Orchid Mall,
                <br />
                Opp. A.N. College Main Gate,
                <br />
                Boring Road, Patna – 800001
              </p>

              <br />

              <p>
                <strong>Noida Office:</strong>
              </p>

              <p>
                H-169, H-Block,
                <br />
                Sector-63,
                <br />
                Noida, Uttar Pradesh – 201309
              </p>

              <br />

              <p>
                <strong>Email:</strong> info@jayproinfratech.com
              </p>

              <p>
                <strong>Phone:</strong> +91 98358 52462
              </p>

              <p>
                <strong>Phone:</strong> +91 62997 78784
              </p>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;