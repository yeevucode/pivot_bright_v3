import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users } from "lucide-react";

const serviceCards = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Pricing Systems & Operationalization",
    description: "Make pricing stick with playbooks, data, and dashboards embedded in your existing tools.",
    bullets: [
      "Embed scoping standards, AFA templates, and approvals in your existing tools",
      "Turn on profitability/variance dashboards by client, practice, and partner",
      'Enable partners with playbooks, "gives/gets," and short, practical training',
    ],
    targetResults: "+2–4 pts realization (firms) · 10–20% variance reduction (in-house)",
    anchor: "#engagement",
  },
  {
    icon: Target,
    number: "02",
    title: "Project-Based Pricing & Matter Delivery",
    description: "Fixed scope, fixed price, agreed outcomes — no surprises, from kickoff to close.",
    bullets: [
      "Fixed scope, fixed price, agreed outcomes—no surprises",
      "Milestone plan with owners, risk controls, and negotiation guardrails",
      "Core artifacts: scoping template, AFA model, partner playbook, value summary",
    ],
    targetResults: "Fewer write-downs · faster time-to-quote · tighter forecasts",
    anchor: "#engagement",
  },
  {
    icon: Users,
    number: "03",
    title: "Fractional Ongoing Advising",
    description: "Executive-level pricing and legal-ops leadership on tap — without the full-time headcount.",
    bullets: [
      "Executive-level pricing/legal-ops leadership without adding FTEs",
      "Deal-desk support, AFA tuning, and a KPI cockpit (realization, discounts, variance)",
      "Weekly/biweekly cadence plus quarterly exec readouts and a 90-day roadmap",
    ],
    targetResults: "+2–4 pts realization · 8–15% OC savings · fewer escalations",
    anchor: "#engagement",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-surface opacity-70" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-border to-transparent" aria-hidden />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-5 mb-6 text-balance">
            Comprehensive Legal Operations Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From pricing strategy to operational transformation, we provide end-to-end consulting services designed to elevate your legal practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative bg-card rounded-2xl p-8 border border-border shadow-elegant hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <span className="absolute top-5 right-6 font-heading text-5xl font-bold text-primary/[0.08] select-none pointer-events-none">
                  {card.number}
                </span>

                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-snug">
                  {card.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {card.description}
                </p>

                <ul className="space-y-2.5 mb-6 flex-grow">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-5 py-3 px-4 bg-primary/5 rounded-lg border border-primary/15">
                  <p className="text-primary text-xs font-semibold leading-relaxed">
                    {card.targetResults}
                  </p>
                </div>

                <a href={card.anchor}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-primary/45 group-hover:text-primary transition-colors"
                  >
                    See Full Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
