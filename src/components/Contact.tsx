import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Github, Twitter, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent! 🎮",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a game idea? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-gaming bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-gaming p-3 rounded-xl mr-4">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your awesome name"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your game idea, feedback, or just say hello! 🎮"
                      rows={5}
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="electric" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="group hover:shadow-gaming transition-all duration-300 hover:scale-105 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-primary/20 p-3 rounded-xl mr-4 group-hover:bg-primary/30 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <p className="text-muted-foreground">naveen@gamedev.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-gaming transition-all duration-300 hover:scale-105 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-accent/20 p-3 rounded-xl mr-4 group-hover:bg-accent/30 transition-colors">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold">Location</h4>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-gaming transition-all duration-300 hover:scale-105 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-success/20 p-3 rounded-xl mr-4 group-hover:bg-success/30 transition-colors">
                        <Clock className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-bold">Response Time</h4>
                        <p className="text-muted-foreground">Usually within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Let's Connect Online</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="flex-1 group hover:bg-card hover:shadow-electric border-blue/30 hover:border-blue">
                  <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="flex-1 group hover:bg-card hover:shadow-electric border-pink/30 hover:border-pink">
                  <Twitter className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Twitter
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <Card className="bg-gradient-electric text-white shadow-electric">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quick Response Guarantee
                </h4>
                  <p className="text-white/90 text-sm">
                    I'm always excited to discuss new projects, collaborations, or answer 
                    questions about game development. Don't hesitate to reach out!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};