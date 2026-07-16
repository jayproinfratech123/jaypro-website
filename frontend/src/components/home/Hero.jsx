import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => (
  <section className="relative overflow-hidden bg-blueprint-950 bg-blueprint-grid bg-grid text-white">
    <div className="container-xl grid gap-12 py-24 lg:grid-cols-2 lg:py-32">
      <div>
        <span className="section-label">
          <span className="h-px w-6 bg-amber-500" /> Construction, tracked in real time
        </span>
        <h1 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
          Plan. Design.
          <br />
          Build. <span className="text-amber-500">Track.</span>
        </h1>
        <p className="mt-6 max-w-md text-concrete-200/80">
          JAYPRO Infratech  puts your entire construction project — design, materials, workers,
          payments — on one live dashboard, updated daily from the site to your phone.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link to="/pricing" className="btn-primary">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="flex items-center gap-2 font-display text-sm font-semibold text-white/90 hover:text-amber-500">
            <PlayCircle className="h-9 w-9" /> Watch how it works
          </button>
        </div>

        <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div>
            <dt className="font-display text-2xl font-bold text-amber-500">1,200+</dt>
            <dd className="text-xs text-concrete-200/60">Homes delivered</dd>
          </div>
          <div>
            <dt className="font-display text-2xl font-bold text-amber-500">98%</dt>
            <dd className="text-xs text-concrete-200/60">On-time handover</dd>
          </div>
          <div>
            <dt className="font-display text-2xl font-bold text-amber-500">24/7</dt>
            <dd className="text-xs text-concrete-200/60">Live site updates</dd>
          </div>
        </dl>
      </div>

      <div className="relative">
        <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-4 flex items-center justify-between text-xs text-concrete-200/60">
            <span>Site Progress — Villa #A204</span>
            <span className="rounded-full bg-amber-500/20 px-2 py-1 text-amber-500">Live</span>
          </div>
          {[
            { stage: "Foundation", pct: 100 },
            { stage: "Columns", pct: 100 },
            { stage: "Roof", pct: 62 },
            { stage: "Brick Work", pct: 10 },
          ].map((s) => (
            <div key={s.stage} className="mb-4">
              <div className="mb-1 flex justify-between text-sm">
                <span>{s.stage}</span>
                <span className="text-amber-500">{s.pct}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div className="h-1.5 rounded-full bg-amber-500" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs text-concrete-200/60">
            <div className="rounded-sm bg-white/5 py-3">18 Workers</div>
            <div className="rounded-sm bg-white/5 py-3">Day 84 / 210</div>
            <div className="rounded-sm bg-white/5 py-3">₹42L used</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
