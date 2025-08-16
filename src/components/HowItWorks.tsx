import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Profile",
      description: "Set up your profile with skills, interests, availability, and what kind of projects you're looking for.",
      icon: "📝"
    },
    {
      step: "02",
      title: "Post/Swipe",
      description: "Post your project ideas or browse and swipe through potential collaborators and opportunities.",
      icon: "👆"
    },
    {
      step: "03",
      title: "Start Building",
      description: "Connect with matches, chat about your ideas, and start collaborating on amazing projects together.",
      icon: "🏗️"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these three steps to find your perfect project partner.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 h-full bg-gradient-to-br from-card to-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-blue-500"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;