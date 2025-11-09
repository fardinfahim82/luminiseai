import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-6 md:p-12 relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-primary/20">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent animate-glow-pulse" />
          
          <div className="relative z-10 text-center space-y-4 md:space-y-6">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center glow-primary">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold px-2">
              <span className="gradient-text">Zero-Risk Guarantee</span>
            </h2>

            <p className="text-base md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto px-2">
              If your clinic doesn't see at least a{" "}
              <span className="font-bold gradient-text">20% increase in booked appointments</span>{" "}
              in 30 days, we'll work for free until you do.
            </p>

            <p className="text-sm md:text-base text-muted-foreground px-2">
              That's how confident we are in our AI Receptionist system.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GuaranteeSection;
