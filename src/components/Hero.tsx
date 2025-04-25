
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent text-foreground dark:text-white px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white text-foreground">
          Senior Frontend Engineer
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 dark:text-white/80 mb-8">
          Crafting exceptional web experiences with modern technologies
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
