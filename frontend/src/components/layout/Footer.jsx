import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container-xl px-6 py-5">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-xl font-bold">
              JayPro Infratech
            </h2>

            <p className="mt-3 text-sm text-gray-300 leading-6">
              We design elegant homes, villas and commercial buildings with
              innovative architecture, structural planning and premium interior
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
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
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
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
          </div>

          {/* Contact */}
          {/* Contact */}
<div>
  <h3 className="mb-3 text-base font-semibold">
    Contact
  </h3>

  <div className="space-y-3 text-sm">

    {/* Address 1 */}
    <div className="flex items-start gap-2">
      <MapPin className="mt-1 h-4 w-4 text-red-600 flex-shrink-0" />
      <p className="text-gray-300">
        <span className="font-medium text-white">Patna Office</span><br />
        210, 2nd Floor, Orchid Mall,<br />
        Opp. A.N. College Main Gate,<br />
        Boring Road, Patna - 800001
      </p>
    </div>

    {/* Address 2 */}
    <div className="flex items-start gap-2">
      <MapPin className="mt-1 h-4 w-4 text-red-600 flex-shrink-0" />
      <p className="text-gray-300">
        <span className="font-medium text-white">Noida Office</span><br />
        H-169, H-Block, sector-63, Noida, Uttar Pradesh - 201309
      </p>
    </div>

    {/* Phone Numbers */}
    <div className="flex items-start gap-2">
      <Phone className="mt-1 h-4 w-4 text-red-600 flex-shrink-0" />
      <div className="text-gray-300">
        <p>+91 98358 52462</p>
        <p>+91 62997 78784</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-2">
      <Mail className="mt-1 h-4 w-4 text-red-600 flex-shrink-0" />
      <p className="text-gray-300 break-all">
        info@jayproinfratech.com
      </p>
    </div>

    {/* Social Icons */}
    <div className="flex gap-2 pt-2">
      <a
        href="#"
        className="rounded-full bg-red-600 p-1.5 hover:bg-red-700"
      >
        <Facebook size={15} />
      </a>

      <a
        href="#"
        className="rounded-full bg-red-600 p-1.5 hover:bg-red-700"
      >
        <Instagram size={15} />
      </a>

      <a
        href="#"
        className="rounded-full bg-red-600 p-1.5 hover:bg-red-700"
      >
        <Linkedin size={15} />
      </a>
    </div>

  </div>
</div>
          

        </div>

        <div className="mt-8 border-t border-gray-700 pt-4">

  <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 md:flex-row">

    <p>
      © {new Date().getFullYear()} JayPro Infratech. All Rights Reserved.
    </p>

    <div className="flex flex-wrap items-center gap-4">
      <a
        href="/privacy-policy"
        className="transition hover:text-red-600"
      >
        Privacy Policy
      </a>

      <span>|</span>

      <a
        href="/terms-and-conditions"
        className="transition hover:text-red-600"
      >
        Terms & Conditions
      </a>

      <span>|</span>

      <a
        href="/refund-policy"
        className="transition hover:text-red-600"
      >
        Refund Policy
      </a>
    </div>

  </div>

</div>

      </div>
    </footer>
  );
};

export default Footer;