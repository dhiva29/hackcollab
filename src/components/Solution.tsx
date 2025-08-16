import { Card } from "@/components/ui/card";

const Solution = () => {
  const solutions = [
    {
      title: "Smart Matching Algorithm",
      description: "Our AI-powered system matches you with collaborators based on complementary skills and shared interests.",
      icon: "🎯"
    },
    {
      title: "Detailed Profiles",
      description: "Rich profiles showcase skills, experience, availability, and collaboration preferences.",
      icon: "👥"
    },
    {
      title: "Project-Focused Platform",
      description: "Built specifically for finding project partners, not just networking or socializing.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            How CollabMatch{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Solves This
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've created a platform designed specifically to connect project partners quickly and effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">{solution.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;