import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Games } from "@/components/Games";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Games />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
