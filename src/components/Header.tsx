import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold gradient-text">
              Luminise
            </span>
          </div>

          {/* Center Text */}
          <div className="hidden md:block">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Limited Availability - Act Fast
            </p>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="default">
            Book Your Free AI Demo
          </Button>
        </div>
      </div>
      
      {/* Premium border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </header>
  );
};

export default Header;
