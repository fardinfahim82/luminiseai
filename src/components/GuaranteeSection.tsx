import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const GuaranteeSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-primary/20">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent animate-glow-pulse" />
          
          <div className="relative z-10 text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center glow-primary">
                <Shield className="w-10 h-10 text-primary" />
              </div>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Zero-Risk Guarantee</span>
            </h2>

            <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
              If your clinic doesn't see at least a{" "}
              <span className="font-bold gradient-text">20% increase in booked appointments</span>{" "}
              in 30 days, we'll work for free until you do.
            </p>

            <p className="text-muted-foreground">
              That's how confident we are in our AI Receptionist system.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GuaranteeSection;
