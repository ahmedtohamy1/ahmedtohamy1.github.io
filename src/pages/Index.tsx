import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <div className="bg-gradient-to-b from-background via-background/60 to-background">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Volunteering />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
