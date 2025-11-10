import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 pt-20 md:pt-24">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-5 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-3 md:space-y-4">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Let an AI Receptionist Run Your Business{" "}
                <span className="gradient-text">24/7</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90">
                — and Get 20% More Appointments in 30 Days.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                (without hiring more staff or answering another call)
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto md:text-base">
                <Flame className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-glow-pulse" />
                Book Your Free AI Demo
              </Button>
            </div>

            {/* Guarantee Line */}
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              If you don't see 20% more booked appointments in your first 30 days, we'll work for free until you do.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden glow-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 group">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/4YP_K_yA5h8?si=k8U74cEGsH3b8240" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-xl md:rounded-2xl"
              />
            </div>
            <p className="text-center mt-3 md:mt-4 text-xs sm:text-sm text-muted-foreground px-2">
              Watch how clinics are scaling faster with Luminise AI automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
