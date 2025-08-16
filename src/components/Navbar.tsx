import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <span className="text-xl font-bold text-foreground">CollabMatch</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#explore" className="text-muted-foreground hover:text-primary transition-colors">Explore</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;