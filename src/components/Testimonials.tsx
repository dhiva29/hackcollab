import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      content: "Found my hackathon team through CollabMatch and we won first place! The skill matching was spot-on.",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "UX Designer",
      content: "As a designer, I always struggled to find developers for my side projects. This platform changed everything.",
      avatar: "MJ"
    },
    {
      name: "Priya Patel",
      role: "Data Science Graduate",
      content: "Connected with a researcher who shared my interests. Our collaboration led to a published paper!",
      avatar: "PP"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students and professionals who have found their perfect project partners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400 mt-4">
                {"★".repeat(5)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;