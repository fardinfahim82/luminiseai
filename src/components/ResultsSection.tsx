import { Calendar, PhoneIncoming, Heart, TrendingDown, DollarSign } from "lucide-react";

const results = [
  {
    icon: Calendar,
    text: "+20% more appointments in 30 days",
  },
  {
    icon: PhoneIncoming,
    text: "No more missed calls or lost leads",
  },
  {
    icon: Heart,
    text: "Happier patients from instant responses",
  },
  {
    icon: TrendingDown,
    text: "Freed-up staff time & lower labor costs",
  },
  {
    icon: DollarSign,
    text: "Proven ROI — every call handled, every lead captured",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Results</span> You Can Expect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <result.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">{result.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
