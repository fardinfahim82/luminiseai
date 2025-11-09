import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sara H.",
    clinic: "BrightSmile Dental, Austin TX",
    text: "We used to miss 15–20 calls a week. Within 2 weeks of installing Luminise's AI Receptionist, our calendar filled up and we had to hire another hygienist to keep up.",
    effect: "fade-in",
  },
  {
    name: "Dr. Kevin R.",
    clinic: "Lakeside Dental Studio, Chicago IL",
    text: "Before Luminise, our staff was constantly juggling calls. Now, patients get instant answers and bookings 24/7 — and our front desk finally has breathing room.",
    effect: "glow",
  },
  {
    name: "Dr. Alina M.",
    clinic: "PureSmiles Dentistry, Miami FL",
    text: "We doubled our new patient flow within 30 days. The AI receptionist feels more reliable than a human — no breaks, no stress, no missed opportunities.",
    effect: "parallax",
  },
  {
    name: "Dr. Thomas J.",
    clinic: "City Dental Group, Los Angeles CA",
    text: "Honestly, I was skeptical about AI handling calls. But now it's one of the smartest moves we've made — zero missed calls and more organized bookings than ever.",
    effect: "connected",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Trusted by Clinics That{" "}
            <span className="gradient-text">Refuse to Miss Another Call</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 space-y-6 bg-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.clinic}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
