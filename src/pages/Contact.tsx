
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Contact = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      description: t('contact.socials.linkedin')
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      description: t('contact.socials.twitter')
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      description: t('contact.socials.instagram')
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      description: t('contact.socials.facebook')
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-4xl mx-auto text-center bg-white/50 dark:bg-navy-dark/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-gradient">{t('contact.title')}</h1>
        
        <div className="mb-12 space-y-4">
          <p className="text-lg text-foreground dark:text-white/80">
            {t('contact.description1')}
          </p>
          <p className="text-lg text-foreground dark:text-white/80">
            {t('contact.description2')}
          </p>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((social) => (
            <HoverCard key={social.name}>
              <HoverCardTrigger asChild>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 rounded-lg bg-white/70 dark:bg-navy/70 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all transform hover:scale-105 shadow-md"
                >
                  <social.icon className="w-6 h-6 text-primary" />
                  <span className="font-medium">{social.name}</span>
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md">
                <div className="flex justify-between space-x-4">
                  <div>
                    <h4 className="text-sm font-semibold">{social.name}</h4>
                    <p className="text-sm text-foreground/80 dark:text-white/80">{social.description}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
