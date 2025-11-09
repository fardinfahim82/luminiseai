import { Plug, GraduationCap, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Plug,
    title: "Install",
    description: "We integrate your AI Receptionist with your phone, CRM, and calendar systems.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    title: "Train",
    description: "It learns your FAQs, pricing, and patient flow to sound natural and intelligent.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Automate",
    description: "You start receiving calls, bookings, and follow-ups 24/7.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="gradient-text">How It Works</span> — 3-Step Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Time to first value: within 7 days
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 space-y-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-muted/10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
