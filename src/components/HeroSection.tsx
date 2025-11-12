import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 pt-20 md:pt-24">
      {/* Enhanced animated background with gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-20 left-5 md:left-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-5 md:right-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {/* Hero Content */}
          <div className="text-center space-y-6 md:space-y-8 animate-fade-in max-w-4xl">
            <div className="space-y-3 md:space-y-5">
              <h1 className="font-typewriter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Let an AI Receptionist Run Your Business{" "}
                <span className="gradient-text font-heading">24/7</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                — and Get <span className="text-primary">20% More Appointments</span> in 30 Days.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
                (without hiring more staff or answering another call)
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-2">
              <Button 
                variant="hero" 
                size="lg" 
                className="group w-full sm:w-auto md:text-lg font-bold px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
                asChild
              >
                <a href="https://calendly.com/accelarator_call/30min" target="_blank" rel="noopener noreferrer">
                  <Flame className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-glow-pulse" />
                  Book Your Free AI Demo
                </a>
              </Button>
            </div>

            {/* Guarantee Line with enhanced styling */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-xl" />
              <p className="relative text-xs sm:text-sm text-foreground/80 max-w-2xl mx-auto font-semibold bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/30">
                If you don't see 20% more booked appointments in your first 30 days, we'll work for free until you do.
              </p>
            </div>
          </div>

          {/* VSL Video - Enhanced styling */}
          <div className="relative animate-fade-in w-full max-w-4xl" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] group">
              {/* Video glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Video container */}
              <div className="relative bg-card rounded-2xl overflow-hidden border-2 border-primary/30">
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
                  className="rounded-2xl"
                />
              </div>
            </div>
            <p className="text-center mt-4 md:mt-5 text-sm md:text-base text-muted-foreground px-2 font-medium">
              Watch how clinics are scaling faster with AI automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
