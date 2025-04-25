
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent text-foreground dark:text-white px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white text-foreground">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 dark:text-white/80 mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="#projects">{t('hero.viewProjects')}</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">{t('hero.contactMe')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
