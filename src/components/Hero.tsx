import { Button } from "@/components/ui/button";
import { Play, Code, Star } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gaming hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-accent/20 backdrop-blur-sm rounded-full p-4">
          <Code className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-bounce-subtle">
        <div className="bg-success/20 backdrop-blur-sm rounded-full p-4">
          <Star className="h-8 w-8 text-success" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "1s" }}>
        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4">
          <Play className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              Building Fun,
            </span>
            <br />
            <span className="text-foreground">
              One Game at a Time
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Welcome to my digital playground! I'm Naveen Kumar, an HTML game developer creating 
            <span className="text-primary font-semibold"> lovable</span> and 
            <span className="text-accent font-semibold"> engaging</span> gaming experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Play My Games
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-card hover:shadow-card"
            >
              <Code className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-gaming transition-all hover:scale-105">
            <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
            <p className="text-muted-foreground">Games Created</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-gaming transition-all hover:scale-105">
            <h3 className="text-3xl font-bold text-accent mb-2">50K+</h3>
            <p className="text-muted-foreground">Players Worldwide</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-gaming transition-all hover:scale-105">
            <h3 className="text-3xl font-bold text-success mb-2">4.8★</h3>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};