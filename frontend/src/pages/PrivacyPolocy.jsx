const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-xl mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-blueprint-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600">
            Your privacy is important to us. This Privacy Policy explains how
            JayPro Infratech collects, uses, stores, and protects your personal
            information when you use our website or services.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Last Updated: July 29, 2026
          </p>
        </div>

        <div className="space-y-8">

          {/* Introduction */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              1. Introduction
            </h2>

            <p className="leading-8 text-gray-600">
              JayPro Infratech ("Company", "we", "our", or "us") values your
              trust and is committed to protecting your personal information.
              This Privacy Policy describes how we collect, use, share, and
              protect the information you provide while visiting our website,
              requesting architectural services, interior design consultation,
              construction management, or contacting our team.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              2. Information We Collect
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-600">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile Number</li>
              <li>Company Name (if applicable)</li>
              <li>Project Location</li>
              <li>Property Details</li>
              <li>Architectural Requirements</li>
              <li>Construction Budget</li>
              <li>Uploaded Drawings or Documents</li>
              <li>IP Address</li>
              <li>Browser Type & Device Information</li>
              <li>Website Usage Analytics</li>
            </ul>
          </div>

          {/* How We Use */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-600">
              <li>Respond to your inquiries.</li>
              <li>Prepare project quotations.</li>
              <li>Schedule site visits.</li>
              <li>Provide architectural consultation.</li>
              <li>Manage ongoing construction projects.</li>
              <li>Share project updates.</li>
              <li>Improve website performance.</li>
              <li>Provide customer support.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              4. Cookies & Tracking Technologies
            </h2>

            <p className="leading-8 text-gray-600">
              Our website may use cookies to improve your browsing experience,
              remember your preferences, analyze website traffic, and enhance
              security. You may disable cookies through your browser settings,
              although certain features may not function properly.
            </p>
          </div>

          {/* Data Security */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              5. Data Security
            </h2>

            <p className="leading-8 text-gray-600">
              We implement industry-standard technical and organizational
              security measures to protect your information against unauthorized
              access, alteration, disclosure, or destruction. While we strive
              to safeguard your information, no internet transmission or storage
              system is completely secure.
            </p>
          </div>

          {/* Sharing */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              6. Sharing of Information
            </h2>

            <p className="leading-8 text-gray-600">
              We do not sell or rent your personal information. We may share
              your information with trusted service providers, consultants,
              contractors, or legal authorities only when necessary to deliver
              our services or comply with applicable laws.
            </p>
          </div>

          {/* Rights */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              7. Your Rights
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-600">
              <li>Access your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Request a copy of your stored information.</li>
            </ul>
          </div>

          

          {/* Updates */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-blueprint-900">
              8. Changes to This Privacy Policy
            </h2>

            <p className="leading-8 text-gray-600">
              We may update this Privacy Policy from time to time to reflect
              changes in our business practices or legal requirements. The
              updated version will always be available on this page with the
              revised effective date.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-xl bg-blueprint-900 p-8 text-white">
            <h2 className="mb-6 text-2xl font-semibold">
              Contact Us
            </h2>

            <div className="space-y-3 leading-8">
              <p>
                <strong>JayPro Infratech</strong>
              </p>

              <p>
                1st Floor, Pandooi Place,
                <br />
                Opposite Harihar Chamber,
                <br />
                Boring Road,
                <br />
                Patna, Bihar – 800001
              </p>

              <p>
                📧 info@jayproinfratech.com
              </p>

              <p>
                📞 +91 9835852462
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;