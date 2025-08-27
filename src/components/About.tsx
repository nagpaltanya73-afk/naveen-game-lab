import { Card, CardContent } from "@/components/ui/card";
import { Code, Gamepad2, Heart, Zap, Coffee, Target } from "lucide-react";

const skills = [
  { name: "HTML5 Canvas", level: 95, color: "bg-accent" },
  { name: "JavaScript/ES6", level: 90, color: "bg-primary" },
  { name: "Phaser.js", level: 85, color: "bg-success" },
  { name: "Game Design", level: 88, color: "bg-accent" },
  { name: "CSS3 Animations", level: 92, color: "bg-primary" },
  { name: "WebGL", level: 75, color: "bg-success" },
];

const funFacts = [
  {
    icon: Coffee,
    title: "Coffee Driven",
    description: "I've consumed over 1,000 cups of coffee while coding games!"
  },
  {
    icon: Gamepad2,
    title: "Gaming History",
    description: "Started playing games at age 5, been coding them for 8+ years"
  },
  {
    icon: Target,
    title: "Perfectionist",
    description: "I test each game at least 100 times before releasing"
  },
  {
    icon: Heart,
    title: "Community Love",
    description: "Over 50K players have enjoyed my games worldwide"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              Naveen
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate game developer on a mission to create fun, engaging, and lovable gaming experiences 
            that bring joy to players around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-gaming p-3 rounded-xl mr-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">My Story</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into game development started with a simple fascination: 
                <span className="text-primary font-semibold"> how do games work?</span> 
                What began as curiosity quickly evolved into a passionate pursuit of creating 
                digital experiences that make people smile.
              </p>
              
              <p>
                With over <span className="text-accent font-semibold">8 years of experience</span> in 
                HTML5 game development, I specialize in creating browser-based games that are both 
                accessible and engaging. My games have been played by thousands of people across the globe.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new game mechanics, sketching game ideas, 
                or playing the latest indie games for inspiration. I believe that 
                <span className="text-success font-semibold"> every game should tell a story</span> and 
                create memorable moments.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                Currently working on a multiplayer puzzle platformer!
              </span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Fun Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <Card 
                key={fact.title} 
                className="group hover:shadow-gaming transition-all duration-300 hover:scale-105 bg-gradient-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-gaming p-4 rounded-xl inline-block mb-4 group-hover:animate-bounce-subtle">
                    <fact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{fact.title}</h4>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};