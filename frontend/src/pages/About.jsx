const About = () => (
  <section className="container-xl py-24">
    <span className="section-label"><span className="h-px w-6 bg-amber-500" /> About Us</span>
    <h1 className="font-display text-4xl font-bold text-blueprint-900">Building homes, and trust, since 2012</h1>
    <div className="mt-8 grid gap-10 lg:grid-cols-2">
      <p className="text-charcoal/70">
        BuildCraft Pro started with one mission: make house construction transparent. Today we manage
        design, construction, and interiors for hundreds of families across India, all visible from a
        single live dashboard.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="font-display text-3xl font-bold text-amber-500">12+</p>
          <p className="text-sm text-charcoal/60">Years of experience</p>
        </div>
        <div>
          <p className="font-display text-3xl font-bold text-amber-500">1,200+</p>
          <p className="text-sm text-charcoal/60">Homes delivered</p>
        </div>
        <div>
          <p className="font-display text-3xl font-bold text-amber-500">40+</p>
          <p className="text-sm text-charcoal/60">In-house architects</p>
        </div>
        <div>
          <p className="font-display text-3xl font-bold text-amber-500">15</p>
          <p className="text-sm text-charcoal/60">Industry awards</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
