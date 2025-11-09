import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Flame className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-base md:text-xl font-bold gradient-text whitespace-nowrap">
              Luminise
            </span>
          </div>

          {/* Center Text */}
          <div className="hidden lg:block">
            <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Limited Availability - Act Fast
            </p>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="sm" className="md:h-10 md:px-6 text-xs md:text-sm whitespace-nowrap">
            Book Demo
          </Button>
        </div>
      </div>
      
      {/* Premium border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </header>
  );
};

export default Header;
