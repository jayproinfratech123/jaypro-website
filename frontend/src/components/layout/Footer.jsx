import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-[#0F172A] text-white"
      role="contentinfo"
      aria-labelledby="footer-company"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container-xl px-6 py-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <section aria-labelledby="footer-company">
            <h2
              id="footer-company"
              className="text-xl font-bold"
              itemProp="name"
            >
              JayPro Infratech
            </h2>

            <p
              className="mt-3 text-sm text-gray-300 leading-6"
              itemProp="description"
            >
              We design elegant homes, villas and commercial buildings with
              innovative architecture, structural planning and premium interior
              solutions.
            </p>
          </section>

          {/* Quick Links */}
          <nav aria-labelledby="footer-links">
            <h3
              id="footer-links"
              className="mb-5 text-lg font-semibold"
            >
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-red-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-red-600">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-red-600">
                  Services
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-red-600">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-red-600">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-red-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <section aria-labelledby="footer-services">
            <h3
              id="footer-services"
              className="mb-5 text-lg font-semibold"
            >
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Structural Design</li>
              <li>3D Elevation</li>
              <li>Construction</li>
              <li>Turnkey Projects</li>
            </ul>
          </section>

          {/* Contact */}
          <section
            aria-labelledby="footer-contact"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <h3
              id="footer-contact"
              className="mb-3 text-base font-semibold"
            >
              Contact
            </h3>

            <div className="space-y-3 text-sm">

              {/* Address 1 */}
              <div className="flex items-start gap-2">
                <MapPin
                  className="mt-1 h-4 w-4 text-red-600 flex-shrink-0"
                  aria-hidden="true"
                />

                <address className="not-italic text-gray-300">
                  <span className="font-medium text-white">
                    Patna Office
                  </span>
                  <br />

                  <span itemProp="streetAddress">
                    210, 2nd Floor, Orchid Mall,
                  </span>
                  <br />

                  Opp. A.N. College Main Gate,
                  <br />

                  Boring Road,
                  <span itemProp="addressLocality"> Patna</span> -
                  <span itemProp="postalCode">800001</span>
                </address>
              </div>

              {/* Address 2 */}
              <div className="flex items-start gap-2">
                <MapPin
                  className="mt-1 h-4 w-4 text-red-600 flex-shrink-0"
                  aria-hidden="true"
                />

                <address className="not-italic text-gray-300">
                  <span className="font-medium text-white">
                    Noida Office
                  </span>
                  <br />

                  H-169, H-Block,
                  <br />

                  Sector-63,
                  <span itemProp="addressLocality"> Noida</span>,
                  Uttar Pradesh -
                  <span itemProp="postalCode">201309</span>
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2">
                <Phone
                  className="mt-1 h-4 w-4 text-red-600 flex-shrink-0"
                  aria-hidden="true"
                />

                <div className="text-gray-300">
                  <a
                    href="tel:+919835852462"
                    className="hover:text-red-600"
                    itemProp="telephone"
                  >
                    +91 98358 52462
                  </a>

                  <br />

                  <a
                    href="tel:+916299778784"
                    className="hover:text-red-600"
                  >
                    +91 62997 78784
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2">
                <Mail
                  className="mt-1 h-4 w-4 text-red-600 flex-shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="mailto:info@jayproinfratech.com"
                  className="text-gray-300 break-all hover:text-red-600"
                  itemProp="email"
                >
                  info@jayproinfratech.com
                </a>
              </div>

              {/* Social Media */}
              <div
                className="flex gap-2 pt-2"
                aria-label="Social media links"
              >
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19Fv83MAew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full bg-red-600 p-1.5 hover:bg-red-700 transition"
                >
                  <Facebook size={15} aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/jaypro_infratech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-red-600 p-1.5 hover:bg-red-700 transition"
                >
                  <Instagram size={15} aria-hidden="true" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@jayproinfratech484"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="rounded-full bg-red-600 p-1.5 hover:bg-red-700 transition"
                >
                  <Youtube size={15} aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/jaypro-infratech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full bg-red-600 p-1.5 hover:bg-red-700 transition"
                >
                  <Linkedin size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 md:flex-row">

            <p>
              © {new Date().getFullYear()} JayPro Infratech. All Rights Reserved.
            </p>

            <nav aria-label="Legal links">
              <div className="flex flex-wrap items-center gap-4">

                <a
                  href="/privacy-policy"
                  className="transition hover:text-red-600"
                >
                  Privacy Policy
                </a>

                <span aria-hidden="true">|</span>

                <a
                  href="/terms-and-conditions"
                  className="transition hover:text-red-600"
                >
                  Terms & Conditions
                </a>

                <span aria-hidden="true">|</span>

                <Link
                  to="/refund-policy"
                  className="transition hover:text-red-600"
                >
                  Refund Policy
                </Link>

              </div>
            </nav>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;