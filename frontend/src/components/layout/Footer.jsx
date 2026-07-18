import { Link } from "react-router-dom";
import { HardHat, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-blueprint-950 bg-blueprint-grid bg-grid text-concrete-100">
    <div className="container-xl grid gap-10 py-16 md:grid-cols-4">
      <div>
        <Link to="/" className="flex items-center gap-2">
  <img src="/jayproinfratech-logo.png" alt="BuildCraft Pro" className="h-8 w-auto" />
  <span className="font-display text-lg font-bold text-white">
    Jaypro <span className="text-red-600">Infratech</span>
  </span>
</Link>
        <p className="text-sm leading-relaxed text-concrete-200/70">
          Plan. Design. Build. Track. — one dashboard for your entire construction journey.
        </p>
        <div className="mt-5 flex gap-3">
          <a href="#" className="rounded-full border border-white/10 p-2 hover:border-red-600 hover:text-red-500">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-full border border-white/10 p-2 hover:border-red-600 hover:text-red-500">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-full border border-white/10 p-2 hover:border-red-600 hover:text-red-500">
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-red-600">Company</h4>
        <ul className="space-y-2 text-sm text-concrete-200/80">
          <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
          <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-red-600">Services</h4>
        <ul className="space-y-2 text-sm text-concrete-200/80">
          <li><Link to="/services" className="hover:text-white">House Construction</Link></li>
          <li><Link to="/services" className="hover:text-white">Interior Design</Link></li>
          <li><Link to="/services" className="hover:text-white">Architecture Planning</Link></li>
          <li><Link to="/pricing" className="hover:text-white">Construction Packages</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-red-600">Contact</h4>
        <ul className="space-y-3 text-sm text-concrete-200/80">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" /> +91  9835852462</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" /> +91  7277008312</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-red-600" /> info@jayproinfratech.com</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red
          -500" /> Patna Branch - 1st Floor, Pandooi Place, Opposite Harihar Chamber, Boring Road, Patna, Bihar - 800001</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-concrete-200/50">
      © {new Date().getFullYear()} JayproInfratech. All rights reserved.
    </div>
  </footer>
);

export default Footer;
