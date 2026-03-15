const whoWeServe = [
  "Corporate legal ops & in-house counsel seeking predictable costs, outcome-based partnerships, and cleaner variance.",
  "Mid-size law firm partners & pricing leaders who need to win AFAs, protect realization, and rein in discounting.",
  "Practice leaders & COOs building pricing governance, budgeting discipline, and faster matter scoping.",
  "GC/CFO stakeholders who want fewer surprises and clear value reporting.",
];

const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-elegant">
          <div className="eyebrow mb-5">Who We Serve</div>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {whoWeServe.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
