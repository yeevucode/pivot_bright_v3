const stats = [
  { value: "25+", label: "Years of Legal Pricing Expertise" },
  { value: "+2–4 pts", label: "Typical Realization Gain" },
  { value: "10–20%", label: "Budget Variance Reduction" },
  { value: "4–8 wks", label: "To First Measurable Result" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 px-6 flex flex-col items-center text-center ${
                i < stats.length - 1 ? "border-r border-border" : ""
              } ${i === 1 ? "border-r-0 lg:border-r border-border" : ""}`}
            >
              <span className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-xs sm:text-sm leading-snug max-w-[130px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
