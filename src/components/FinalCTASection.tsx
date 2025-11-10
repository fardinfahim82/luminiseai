import { Button } from "@/components/ui/button";
import { Flame, PlayCircle, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2">
            Stop Losing Leads.{" "}
            <span className="gradient-text">Let AI Handle the Calls.</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
            Book your free demo today and see how Luminise AI can automate your clinic's growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="group w-full sm:w-auto"
              asChild
            >
              <a href="https://calendar.app.google/RDworA7VfvdSWXEz5" target="_blank" rel="noopener noreferrer">
                <Flame className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-glow-pulse" />
                Book Your Free AI Demo
              </a>
            </Button>
          </div>

          {/* Scarcity */}
          <div className="flex items-center justify-center gap-2 text-accent animate-glow-pulse pt-2 md:pt-4">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <p className="text-xs md:text-sm font-semibold">
              Only 3 installation slots available this week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
