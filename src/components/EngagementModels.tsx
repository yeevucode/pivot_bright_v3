const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
    <span className="text-muted-foreground text-sm leading-relaxed">{children}</span>
  </li>
);

const SectionLabel = ({ children }: { children: string }) => (
  <h4 className="text-secondary font-semibold text-xs uppercase tracking-widest mb-3">
    {children}
  </h4>
);

const EngagementModels = () => {
  return (
    <section id="engagement" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">How We Work</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Three Ways to Engage
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose the model that fits your situation—whether you need a defined project, embedded systems, or ongoing strategic leadership.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">

          <div className="bg-card rounded-2xl p-8 border border-border shadow-elegant">
            <div className="mb-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/75 mb-2">
                Engagement Model 1
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Pricing Systems & Operationalization
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Make pricing stick: we implement the playbooks, data, and dashboards so partners and legal ops can run pricing day-to-day—no heroics needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <SectionLabel>You Get</SectionLabel>
                <ul className="space-y-2">
                  <Bullet>Matter taxonomy, scoping standards, and AFA templates embedded in your tools</Bullet>
                  <Bullet>Rate/discount guardrails and a simple approvals workflow</Bullet>
                  <Bullet>Profitability and variance dashboards by client, practice, and partner</Bullet>
                  <Bullet>Playbook adoption: training, office hours, and "gives/gets" cheat sheets</Bullet>
                </ul>
              </div>
              <div>
                <SectionLabel>Results We Target</SectionLabel>
                <ul className="space-y-2">
                  <Bullet><strong className="text-foreground">In-house:</strong> 10–20% budget variance reduction, clearer panel performance, fewer surprises</Bullet>
                  <Bullet><strong className="text-foreground">Law firms:</strong> +2–4 realization points, faster time-to-quote, fewer escalations</Bullet>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <SectionLabel>How It Works</SectionLabel>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fixed-scope implementation with change enablement; quarterly tune-ups to evolve as your portfolio shifts.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-elegant">
            <div className="mb-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/75 mb-2">
                Engagement Model 2
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Project-Based Pricing & Matter Delivery
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Fixed-scope engagements with agreed outcomes, timelines, and a single project price—so there are no surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <SectionLabel>You Get</SectionLabel>
                <ul className="space-y-2">
                  <Bullet>A crisp scope, success metrics, and acceptance criteria</Bullet>
                  <Bullet>A phased plan with milestone dates and owner(s)</Bullet>
                  <Bullet>Pricing guardrails, "gives/gets" for negotiations, and risk management</Bullet>
                  <Bullet>The core artifacts: matter scoping template, AFA model, partner playbook, and client-facing value summary</Bullet>
                  <Bullet>A post-engagement review tying results to KPIs</Bullet>
                </ul>
              </div>
              <div>
                <SectionLabel>Results We Target</SectionLabel>
                <ul className="space-y-2">
                  <Bullet><strong className="text-foreground">In-house:</strong> 10–20% budget variance reduction, measurable matter cycle-time gains, fewer last-minute escalations</Bullet>
                  <Bullet><strong className="text-foreground">Law firms:</strong> +2–4 realization points, 15–25% fewer write-downs, faster time-to-quote</Bullet>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border">
              <div>
                <SectionLabel>When to Choose This</SectionLabel>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A defined initiative with a clear finish line (e.g., AFA redesign for a practice, pricing governance playbook, or a two-firm pilot)
                </p>
              </div>
              <div>
                <SectionLabel>Typical Timeline</SectionLabel>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  4–8 weeks to first measurable result, then a 30-day look-back to verify impact
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-elegant">
            <div className="mb-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/75 mb-2">
                Engagement Model 3
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Fractional Ongoing Advising
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Executive-level pricing and legal-ops leadership on tap—continuous guidance, zero full-time headcount.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <SectionLabel>You Get</SectionLabel>
                <ul className="space-y-2">
                  <Bullet>Standing cadence (weekly/biweekly) with a named lead and rapid-response Slack/email</Bullet>
                  <Bullet>Partner deal desk support (live pricing reviews, gives/gets, approvals)</Bullet>
                  <Bullet>AFA design & governance tuning as your matters evolve</Bullet>
                  <Bullet>KPI cockpit: realization, discount rate, budget variance, cycle time</Bullet>
                  <Bullet>Quarterly exec readout with prioritized roadmap and owner-by-owner actions</Bullet>
                </ul>
              </div>
              <div>
                <SectionLabel>Results We Target</SectionLabel>
                <ul className="space-y-2">
                  <Bullet><strong className="text-foreground">In-house:</strong> 8–15% outside-counsel savings, 10–20% variance reduction, cleaner panel performance</Bullet>
                  <Bullet><strong className="text-foreground">Law firms:</strong> +2–4 realization points, 10–20% fewer write-downs, faster time-to-quote</Bullet>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border">
              <div>
                <SectionLabel>When to Choose This</SectionLabel>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You need senior guidance to sustain pricing wins, coach partners, and tune AFAs—without hiring a full-timer.
                </p>
              </div>
              <div>
                <SectionLabel>How It Works</SectionLabel>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fixed monthly retainer, clear scope of responsiveness, and rolling 90-day objectives tied to your KPIs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
