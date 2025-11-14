import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
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
  const [avgAppointmentValue, setAvgAppointmentValue] = useState(300);
  
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
    setAvgAppointmentValue(300);
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
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Calculate Your <span className="gradient-text">ROI with Luminise AI</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            See how much more your clinic could earn by installing our AI Receptionist System.
          </p>
        </div>

        {/* Main Calculator Card */}
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
          {/* Input Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Monthly Leads */}
            <div className="space-y-3">
              <label className="text-sm text-muted-foreground">Monthly Leads</label>
              <Input
                type="number"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Math.max(0, parseInt(e.target.value) || 0))}
                className="h-14 text-2xl font-semibold text-center bg-background/50 border-border/50"
              />
            </div>

            {/* Current Human Setters */}
            <div className="space-y-3">
              <label className="text-sm text-muted-foreground">Current Human Setters</label>
              <Input
                type="number"
                value={currentReceptionists}
                onChange={(e) => setCurrentReceptionists(Math.max(1, parseInt(e.target.value) || 1))}
                className="h-14 text-2xl font-semibold text-center bg-background/50 border-border/50"
              />
            </div>

            {/* Average Deal Value */}
            <div className="space-y-3">
              <label className="text-sm text-muted-foreground">Average Deal Value</label>
              <Input
                type="number"
                value={avgAppointmentValue}
                onChange={(e) => setAvgAppointmentValue(Math.max(0, parseInt(e.target.value) || 0))}
                className="h-14 text-2xl font-semibold text-center bg-background/50 border-border/50"
              />
            </div>
          </div>

          {/* Results Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Annual Savings */}
            <div className="p-6 rounded-xl bg-background/30 border border-border/30 space-y-2">
              <p className="text-sm text-muted-foreground">Annual Savings</p>
              <div className="text-3xl md:text-4xl font-bold text-green-400 tabular-nums">
                {formatCurrency(animatedSavings)}
              </div>
              <p className="text-xs text-muted-foreground">saved per year</p>
            </div>

            {/* Extra Appointments */}
            <div className="p-6 rounded-xl bg-background/30 border border-border/30 space-y-2">
              <p className="text-sm text-muted-foreground">Extra Appointments/Month</p>
              <div className="text-3xl md:text-4xl font-bold text-green-400 tabular-nums">
                +{animatedAppointments}
              </div>
              <p className="text-xs text-muted-foreground">more bookings</p>
            </div>

            {/* Additional Revenue */}
            <div className="p-6 rounded-xl bg-background/30 border border-border/30 space-y-2">
              <p className="text-sm text-muted-foreground">Additional Revenue/Month</p>
              <div className="text-3xl md:text-4xl font-bold text-green-400 tabular-nums">
                {formatCurrency(animatedRevenue)}
              </div>
              <p className="text-xs text-muted-foreground">extra revenue</p>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Human Setters */}
            <div className="p-6 rounded-xl bg-background/30 border border-border/30 space-y-4">
              <h3 className="font-semibold text-lg">Human Setters</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Conversion Rate</span>
                  <span className="text-destructive font-semibold">{HUMAN_CONVERSION_RATE * 100}%</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2">
                  <div 
                    className="bg-destructive h-2 rounded-full transition-all duration-500"
                    style={{ width: `${HUMAN_CONVERSION_RATE * 100}%` }}
                  />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-muted-foreground">Monthly Cost</span>
                  <span className="text-destructive font-semibold">{formatCurrency(HUMAN_MONTHLY_COST)}</span>
                </div>
              </div>
            </div>

            {/* Luminise AI */}
            <div className="p-6 rounded-xl bg-background/30 border border-primary/30 space-y-4">
              <h3 className="font-semibold text-lg">Luminise AI</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Conversion Rate</span>
                  <span className="text-green-400 font-semibold">{AI_CONVERSION_RATE * 100}%</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${AI_CONVERSION_RATE * 100}%` }}
                  />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-muted-foreground">Monthly Cost</span>
                  <span className="text-green-400 font-semibold">{formatCurrency(AI_MONTHLY_COST)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Save {formatCurrency(animatedSavings)}/year?
            </h3>
            <p className="text-muted-foreground">
              Start your AI setup today and watch every call turn into revenue — guaranteed
            </p>
            <Button 
              variant="cta"
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
            >
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Build My AI Receptionist Now
            </Button>
          </div>
        </Card>

        {/* Bottom Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Results based on industry averages and current Luminise AI performance data
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;