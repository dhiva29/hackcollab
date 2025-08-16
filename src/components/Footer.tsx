const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CM</span>
              </div>
              <span className="text-xl font-bold">CollabMatch</span>
            </div>
            <p className="text-muted max-w-md mb-6">
              Connecting students and professionals to build amazing projects together. 
              Find your perfect collaboration partner today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <span className="text-sm">💼</span>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Product</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted hover:text-background transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted hover:text-background transition-colors">Contact</a></li>
              <li><a href="#terms" className="text-muted hover:text-background transition-colors">Terms</a></li>
              <li><a href="#privacy" className="text-muted hover:text-background transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted/20 mt-12 pt-8 text-center">
          <p className="text-muted">
            © 2024 CollabMatch. All rights reserved. Built for collaboration.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;