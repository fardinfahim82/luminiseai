import { Button } from "@/components/ui/button";
import { Flame, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-ai-receptionist.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Let an AI Receptionist Run Your Business{" "}
                <span className="gradient-text">24/7</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                — and Get 20% More Appointments in 30 Days.
              </p>
              <p className="text-xl text-muted-foreground">
                (without hiring more staff or answering another call)
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <Flame className="w-5 h-5 group-hover:animate-glow-pulse" />
                Get Your Free AI Demo
              </Button>
              <Button variant="outline" size="xl">
                <PlayCircle className="w-5 h-5" />
                Watch How It Works
              </Button>
            </div>

            {/* Guarantee Line */}
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              If you don't see 20% more booked appointments in your first 30 days, we'll work for free until you do.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img 
                src={heroImage} 
                alt="AI Receptionist System Interface" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground">
              Watch how clinics are scaling faster with Luminise AI automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
