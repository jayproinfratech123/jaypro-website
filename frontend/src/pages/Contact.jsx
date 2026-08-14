import LeadForm from "../components/LeadForm";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="container-xl py-24">
      <span className="section-label">
        <span className="h-px w-6 bg-red-500" />
        Contact
      </span>

      <h1 className="font-display text-4xl font-bold text-blueprint-900">
        Let's talk about your build
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">

        {/* Lead Form */}
        <div className="rounded-sm border border-black/5 bg-white p-2">
          <LeadForm />
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-red-600" />
            +91 9835852462 <br/>
            +91 6299778784
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-red-600" />
            info@jayproinfratech.com
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-red-600" />
            210, 2nd Floor, Orchid Mall,
Opp. A.N. College Main Gate,
Boring Road, Patna -800001

          </div>
          

         
        </div>

      </div>
    </section>
  );
};

export default Contact;