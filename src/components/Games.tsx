import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star, Users, Trophy } from "lucide-react";
import puzzleGame from "@/assets/game-puzzle.jpg";
import arcadeGame from "@/assets/game-arcade.jpg";
import strategyGame from "@/assets/game-strategy.jpg";

const games = [
  {
    id: 1,
    title: "Puzzle Master",
    description: "Challenge your mind with colorful block puzzles that get progressively harder!",
    image: puzzleGame,
    category: "Puzzle",
    rating: 4.9,
    players: "12K+",
    featured: true,
  },
  {
    id: 2,
    title: "Space Defender",
    description: "Epic arcade shooter with retro vibes and modern gameplay mechanics.",
    image: arcadeGame,
    category: "Arcade",
    rating: 4.7,
    players: "25K+",
    featured: true,
  },
  {
    id: 3,
    title: "Kingdom Wars",
    description: "Strategic battles await in this medieval conquest game.",
    image: strategyGame,
    category: "Strategy",
    rating: 4.8,
    players: "8K+",
    featured: false,
  },
];

const categories = ["All", "Puzzle", "Arcade", "Strategy", "Adventure"];

export const Games = () => {
  return (
    <section id="games" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              My Games
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into worlds of fun and challenge! Each game is crafted with love and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "electric" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Games */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Trophy className="mr-2 h-6 w-6 text-accent" />
            Featured Games
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {games.filter(game => game.featured).map((game) => (
              <Card key={game.id} className="group overflow-hidden shadow-card hover:shadow-gaming transition-all duration-300 hover:scale-105 bg-gradient-card">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {game.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-accent mr-1 fill-current" />
                      <span className="text-sm font-medium">{game.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{game.title}</h4>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {game.players} players
                    </div>
                    <Button variant="ocean" className="group">
                      <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Play Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Games Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8">All Games</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="group overflow-hidden shadow-card hover:shadow-gaming transition-all duration-300 hover:scale-105 bg-gradient-card">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button 
                      variant="sunset" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Play
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-lg text-xs font-medium">
                      {game.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-1">{game.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{game.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Star className="h-3 w-3 mr-1 fill-current text-accent" />
                      {game.rating}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {game.players}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="hover:bg-card hover:shadow-card">
            Load More Games
          </Button>
        </div>
      </div>
    </section>
  );
};