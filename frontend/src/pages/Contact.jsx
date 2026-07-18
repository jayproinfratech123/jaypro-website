import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to POST /api/contact or a CRM lead endpoint
    setSent(true);
  };

  return (
    <section className="container-xl py-24">
      <span className="section-label"><span className="h-px w-6 bg-red-500" /> Contact</span>
      <h1 className="font-display text-4xl font-bold text-blueprint-900">Let's talk about your build</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4 rounded-sm border border-black/5 bg-white p-6">
          <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <textarea required placeholder="Tell us about your project" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <button type="submit" className="btn-primary w-full">Send Inquiry</button>
          {sent && <p className="text-sm text-green-600">Thanks — our team will reach out within 24 hours.</p>}
        </form>

        <div className="space-y-6">
          <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-red-600" /> +91 9835852462</div>
          <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-red-600" /> info@jayproinfratech.com</div>
          <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-red-600" /> Patna Branch - 1st Floor, Pandooi Place, Opposite Harihar Chamber, Boring Road, Patna, Bihar - 800001</div>
          <div className="aspect-video w-full overflow-hidden rounded-sm border border-black/10 bg-concrete-100">
            <iframe
              title="map"
              className="h-full w-full"
              src="https://maps.google.com/maps?q=Bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
