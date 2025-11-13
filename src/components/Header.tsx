import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <img 
              src={logo} 
              alt="AI Receptionist Logo" 
              className="h-10 md:h-12 w-auto flex-shrink-0"
            />
          </div>

          {/* Center Text */}
          <div className="hidden lg:block">
            <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Limited Availability - Act Fast
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="sm" 
            className="md:h-10 md:px-6 text-xs md:text-sm whitespace-nowrap"
            asChild
          >
            <a href="https://calendly.com/accelarator_call/30min" target="_blank" rel="noopener noreferrer">
              Book Demo
            </a>
          </Button>
        </div>
      </div>
      
      {/* Premium border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </header>
  );
};

export default Header;
