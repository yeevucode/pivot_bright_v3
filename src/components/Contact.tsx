import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, Phone } from "lucide-react";

const promises = [
  "No commitment required — just a conversation",
  "30-minute focused call with Robert directly",
  "Leave with at least one concrete, actionable insight",
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-28 bg-background">
      <div className="absolute inset-0 gradient-surface" aria-hidden />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border shadow-card bg-card">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative p-10 sm:p-12 gradient-hero">
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                aria-hidden
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-secondary font-semibold text-xs uppercase tracking-widest">
                  <span className="w-4 h-px bg-secondary" />
                  Get In Touch
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mt-4 mb-6 text-balance leading-tight">
                  Ready to Transform
                  <span className="block">Your Practice?</span>
                </h2>
                <p className="text-primary-foreground/75 text-lg leading-relaxed">
                  Schedule a complimentary consultation to discuss how PivotPoint can help you optimize pricing, streamline operations, and achieve sustainable growth.
                </p>
              </div>
            </div>

            <div className="p-10 sm:p-12 bg-card">
              <ul className="space-y-4 mb-10">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    {promise}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border border-border bg-background p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Book a Free Consultation
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Pick a time that works for you. 30 minutes, no sales pressure, real insights.
                </p>
                <Button asChild variant="teal" size="lg" className="w-full gap-2">
                  <a href="mailto:rfbrackett@pivotpointpricing.com">
                    <Calendar className="w-4 h-4" />
                    Schedule Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
