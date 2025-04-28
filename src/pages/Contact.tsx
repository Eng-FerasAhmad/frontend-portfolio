
import Navigation from "../components/Navigation";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      description: "Connect with me professionally"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      description: "Follow me for tech updates"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      description: "Behind the scenes & daily life"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      description: "Stay connected"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
        
        <div className="mb-12 space-y-4">
          <p className="text-lg text-foreground/80">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of my social media channels.
          </p>
          <p className="text-lg text-foreground/80">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {socialLinks.map((social) => (
            <HoverCard key={social.name}>
              <HoverCardTrigger asChild>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                  <span className="font-medium">{social.name}</span>
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div>
                    <h4 className="text-sm font-semibold">{social.name}</h4>
                    <p className="text-sm">{social.description}</p>
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
