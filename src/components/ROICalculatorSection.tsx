import { useState, useEffect } from "react";
import { Calculator, TrendingUp, DollarSign, Calendar, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default constants
const HUMAN_CONVERSION_RATE = 0.10; // 10%
const AI_CONVERSION_RATE = 0.20; // 20%
const HUMAN_MONTHLY_COST = 2000;
const AI_MONTHLY_COST = 297;

const ROICalculatorSection = () => {
  const [monthlyLeads, setMonthlyLeads] = useState(200);
  const [currentReceptionists, setCurrentReceptionists] = useState(1);
  const [avgAppointmentValue, setAvgAppointmentValue] = useState(150);
  
  // Calculated values
  const [annualSavings, setAnnualSavings] = useState(0);
  const [extraAppointments, setExtraAppointments] = useState(0);
  const [additionalRevenue, setAdditionalRevenue] = useState(0);

  // Animation state
  const [animatedSavings, setAnimatedSavings] = useState(0);
  const [animatedAppointments, setAnimatedAppointments] = useState(0);
  const [animatedRevenue, setAnimatedRevenue] = useState(0);

  useEffect(() => {
    // Calculate Annual Savings
    const humanCost = HUMAN_MONTHLY_COST * currentReceptionists;
    const savings = (humanCost - AI_MONTHLY_COST) * 12;
    setAnnualSavings(savings);

    // Calculate Extra Appointments per Month
    const extra = monthlyLeads * (AI_CONVERSION_RATE - HUMAN_CONVERSION_RATE);
    setExtraAppointments(Math.round(extra));

    // Calculate Additional Revenue per Month
    const revenue = extra * avgAppointmentValue;
    setAdditionalRevenue(Math.round(revenue));
  }, [monthlyLeads, currentReceptionists, avgAppointmentValue]);

  // Animate numbers
  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedSavings(Math.round(annualSavings * progress));
      setAnimatedAppointments(Math.round(extraAppointments * progress));
      setAnimatedRevenue(Math.round(additionalRevenue * progress));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [annualSavings, extraAppointments, additionalRevenue]);

  const handleReset = () => {
    setMonthlyLeads(200);
    setCurrentReceptionists(1);
    setAvgAppointmentValue(150);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 md:p-4 bg-primary/10 rounded-full glow-primary">
              <Calculator className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold px-2">
            Calculate Your <span className="gradient-text">ROI with Luminise AI</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            See how much more your clinic could earn by installing our AI Receptionist System.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Input Card */}
          <Card className="p-6 md:p-8 space-y-6 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl md:text-2xl font-semibold">Your Clinic Data</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="gap-2 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
              </div>

              {/* Monthly Leads */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Monthly Leads
                </label>
                <Input
                  type="number"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Math.max(0, parseInt(e.target.value) || 0))}
                  className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary transition-all"
                  placeholder="Enter monthly leads"
                />
              </div>

              {/* Current Receptionists */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-primary" />
                  Current Receptionists (Human)
                </label>
                <Input
                  type="number"
                  value={currentReceptionists}
                  onChange={(e) => setCurrentReceptionists(Math.max(1, parseInt(e.target.value) || 1))}
                  className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary transition-all"
                  placeholder="Number of receptionists"
                />
              </div>

              {/* Average Appointment Value */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Average Appointment Value ($)
                </label>
                <Input
                  type="number"
                  value={avgAppointmentValue}
                  onChange={(e) => setAvgAppointmentValue(Math.max(0, parseInt(e.target.value) || 0))}
                  className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary transition-all"
                  placeholder="Enter average value"
                />
              </div>

              {/* Comparison Info */}
              <div className="pt-4 border-t border-border/50">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Human Receptionist</p>
                    <p className="font-semibold text-destructive">{HUMAN_CONVERSION_RATE * 100}% conversion</p>
                    <p className="text-xs text-muted-foreground">{formatCurrency(HUMAN_MONTHLY_COST)}/month each</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Luminise AI</p>
                    <p className="font-semibold text-primary">{AI_CONVERSION_RATE * 100}% conversion</p>
                    <p className="text-xs text-muted-foreground">{formatCurrency(AI_MONTHLY_COST)}/month</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Card */}
          <Card className="p-6 md:p-8 space-y-6 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent animate-glow-pulse" />
            
            <div className="relative space-y-6">
              <h3 className="font-heading text-xl md:text-2xl font-semibold gradient-text">Your ROI Results</h3>

              {/* Annual Savings */}
              <div className="space-y-2 p-4 md:p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-sm font-medium">Annual Savings</span>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 tabular-nums">
                  {formatCurrency(animatedSavings)}
                </div>
                <p className="text-xs text-muted-foreground">saved per year on staffing costs</p>
              </div>

              {/* Extra Appointments */}
              <div className="space-y-2 p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Extra Appointments/Month</span>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tabular-nums">
                  +{animatedAppointments}
                </div>
                <p className="text-xs text-muted-foreground">more bookings every month</p>
              </div>

              {/* Additional Revenue */}
              <div className="space-y-2 p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium">Additional Revenue/Month</span>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent tabular-nums">
                  {formatCurrency(animatedRevenue)}
                </div>
                <p className="text-xs text-muted-foreground">extra revenue per month</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            * Results based on industry averages and current Luminise AI performance data
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;