import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-accent/30 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find your perfect{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              project partner
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with students and professionals based on skills, interests, and goals.
            Turn your ideas into reality with the right collaborators.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto"
          >
            Join Now – It's Free
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;