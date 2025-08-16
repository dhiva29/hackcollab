import { Card } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      title: "Hard to Find the Right People",
      description: "Searching through social media and forums is time-consuming and often leads to dead ends."
    },
    {
      title: "Skill Mismatches",
      description: "You find collaborators, but their skills don't complement yours or match the project needs."
    },
    {
      title: "No Clear Process",
      description: "There's no structured way to present your project idea and find committed partners."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Finding Collaborators is{" "}
            <span className="text-destructive">Hard Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Students and professionals face real challenges when trying to find the right project partners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-destructive">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;