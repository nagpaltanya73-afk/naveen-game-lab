import { Gamepad2, Heart, Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-gaming p-2 rounded-xl">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-gaming bg-clip-text text-transparent">
                Naveen Kumar
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Creating fun, lovable, and engaging HTML5 games that bring joy to players worldwide. 
              Let's build the future of web gaming together!
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-primary transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all hover:scale-110"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all hover:scale-110"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-all hover:scale-110"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Naveen Kumar. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Game Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};