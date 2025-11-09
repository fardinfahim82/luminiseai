import { PhoneOff, BotMessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const PainPromiseSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Every Missed Call <span className="gradient-text">Costs You Revenue</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your front desk can't be everywhere — but our AI Receptionist never misses a lead. It answers, books, and follows up automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <Card className="p-8 space-y-6 bg-card border-destructive/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <PhoneOff className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-destructive">Old Way</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>15-20 missed calls per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Staff overwhelmed juggling calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Patients waiting hours for callbacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Lost revenue from missed opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>No after-hours support</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* AI Way */}
          <Card className="p-8 space-y-6 bg-card border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BotMessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold gradient-text">AI Way</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Zero missed calls — ever</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Instant answers 24/7/365</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Automatic booking & follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Every lead captured & converted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Staff freed up for patient care</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PainPromiseSection;
