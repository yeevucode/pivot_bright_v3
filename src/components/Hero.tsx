import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import sanDiegoImage from "@/assets/sandiego.png";

const differentiators = [
  { label: "Pricing & value specialists", detail: "deep focus on AFAs, realization, and partner enablement (not generic ops)." },
  { label: "Fractional executive leadership", detail: "Head of Pricing/Legal Ops impact without adding FTE headcount." },
  { label: "Outcome-first approach", detail: "we track realization, discount rate, budget variance, cycle time." },
  { label: "Playbooks + operationalization", detail: "guardrails, approvals, and dashboards embedded in tools you already use." },
  { label: "Both sides of the table", detail: "experience with law firms and corporate legal departments, so incentives stay aligned." },
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center py-24">
      <img
        src={sanDiegoImage}
        alt="San Diego skyline"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.74] saturate-[0.95]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/74 via-primary/62 to-primary/50" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-primary/14 to-transparent" aria-hidden />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-4 lg:gap-6 items-stretch">
            <div className="animate-fade-up h-full rounded-2xl border border-primary-foreground/25 bg-primary/62 backdrop-blur-md p-7 sm:p-8 shadow-card">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 bg-primary-foreground/10 px-3 py-1.5 text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                Strategic Legal Operations Consulting
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-5 leading-[1.04] text-balance">
                Transform Your Legal
                <span className="block mt-1">
                  <span className="text-primary-foreground">Pricing</span>{" "}
                  <span className="text-primary-foreground/95">Strategy</span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/95 max-w-2xl mb-6 leading-relaxed">
                We help law firms and legal departments optimize pricing, streamline operations, and unlock sustainable partnerships through data-driven alternative fee strategies.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <Button asChild variant="secondary" size="xl">
                  <a href="mailto:rfbrackett@pivotpointpricing.com">
                    Book 30-Min Pricing Review
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <a href="#services">Learn More</a>
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-primary-foreground/85 text-xs sm:text-sm font-medium">
                <span>25+ years experience</span>
                <span className="hidden sm:inline text-primary-foreground/60">|</span>
                <span>+2–4 pts realization gain</span>
                <span className="hidden sm:inline text-primary-foreground/60">|</span>
                <span>4–8 weeks to first measurable result</span>
              </div>
            </div>

            <div className="hidden lg:flex animate-fade-up h-full rounded-2xl border border-primary-foreground/25 bg-gradient-to-br from-primary/68 via-primary/56 to-secondary/38 p-6 shadow-card flex-col justify-center backdrop-blur-md" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-primary-foreground font-semibold text-xs uppercase tracking-widest mb-3">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {differentiators.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90 text-sm leading-relaxed">
                      <strong className="text-primary-foreground">{item.label}</strong>
                      {" — "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#services"
              className="flex flex-col items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              aria-label="Scroll to services"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">Explore</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-14 lg:hidden animate-fade-up rounded-2xl border border-primary-foreground/25 bg-gradient-to-br from-primary/68 via-primary/56 to-secondary/38 p-5 shadow-card backdrop-blur-md" style={{ animationDelay: "0.25s" }}>
            <h3 className="text-primary-foreground font-semibold text-xs uppercase tracking-widest mb-3">
              What Sets Us Apart
            </h3>
            <ul className="space-y-2.5">
              {differentiators.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span className="text-primary-foreground/90 text-sm leading-relaxed">
                    <strong className="text-primary-foreground">{item.label}</strong>
                    {" — "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
