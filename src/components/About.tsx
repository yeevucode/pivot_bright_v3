import { CheckCircle2, Award } from "lucide-react";

const differentiators = [
  {
    title: "Specialists, not generalists",
    description: "Deep focus on legal pricing, AFAs, LPM, and value delivery—bridging strategy, finance, and client service.",
  },
  {
    title: "Executive strength, fractionally",
    description: "Senior leadership on tap (deal desk, governance, partner coaching) without adding FTEs.",
  },
  {
    title: "Playbooks → systems",
    description: "We embed scoping standards, approvals, and dashboards in tools you already use so pricing sticks day-to-day.",
  },
  {
    title: "Measured outcomes",
    description: "+2–4 pts realization (firms) · 10–20% budget variance reduction (in-house) · faster time-to-quote, fewer write-downs.",
  },
];

const memberships = [
  "Legal Value Network",
  "True Value Partnership Institute",
  "LMA",
  "Buying Legal Council",
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-border to-transparent" aria-hidden />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="eyebrow">About PivotPoint</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-5 text-balance">
            The Strategic Partner Your Company Deserves
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Founded by Robert Brackett, ALPP is building a team of experts dedicated to helping law firms and in-house counsel navigate win-win outcome-based approaches to legal services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

          <div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Pricing and value—delivered. We help mid-size law firms and in-house legal teams win AFAs they can deliver, lift realization, and make budgets believable.
            </p>

            <ul className="space-y-5 mb-10">
              {differentiators.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-semibold">{item.title}:</span>{" "}
                    <span className="text-muted-foreground">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-[3px] border-primary pl-5 py-1 bg-primary/5 rounded-r-xl">
              <p className="text-muted-foreground text-base leading-relaxed italic">
                "This outcome-first approach identifies clear problems, credible results, and packaging that makes the decision obvious."
              </p>
              <footer className="mt-2 text-secondary text-sm font-medium not-italic">
                — Robert Brackett, Founder
              </footer>
            </blockquote>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-card border border-border">
                <img
                  alt="Robert Brackett — PivotPoint Founder"
                  className="w-full object-contain"
                  src="/lovable-uploads/2b3f1ee1-9694-42ed-87e5-526199324af9.jpg"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-secondary/20 rounded-xl blur-xl" aria-hidden />
              <div className="absolute -bottom-3 -left-3 w-28 h-28 bg-primary/15 rounded-xl blur-xl" aria-hidden />
            </div>

            <div className="bg-card rounded-2xl p-7 border border-border shadow-elegant">
              <p className="text-muted-foreground text-sm leading-relaxed">
                A former client-facing law firm executive and strategic advisor with 25+ years in legal pricing, profitability, project management, and operations. I partner with firm leaders, senior partners, and in-house teams to design value-based pricing, launch client value programs, and deliver measurable improvements through tighter budgets and fewer surprises. My work spans AFAs, litigation budgeting, LPM, and AI-enabled forecasting.
              </p>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="text-foreground text-xs font-semibold uppercase tracking-widest">Memberships</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {memberships.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
