
import { Book, Code, TestTube, User, Hammer, Paintbrush } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillSections = [
    {
      title: "Developer",
      icon: Code,
      description: "Experienced in modern web development with a focus on front-end technologies and responsive design.",
      skills: [
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟩" },
        { name: "Python", icon: "🐍" },
        { name: "REST APIs", icon: "🔌" }
      ]
    },
    {
      title: "Design",
      icon: Paintbrush,
      description: "Creating beautiful and intuitive user interfaces with modern design principles and tools.",
      skills: [
        { name: "UI/UX Design", icon: "🎨" },
        { name: "Figma", icon: "🖌️" },
        { name: "Responsive Design", icon: "📱" },
        { name: "CSS/SCSS", icon: "💅" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "Design Systems", icon: "🎯" }
      ]
    },
    {
      title: "Build",
      icon: Hammer,
      description: "Expertise in DevOps and deployment tools to build scalable applications.",
      skills: [
        { name: "Docker", icon: "🐋" },
        { name: "CI/CD", icon: "⚙️" },
        { name: "AWS", icon: "☁️" },
        { name: "Webpack", icon: "📦" },
        { name: "Vite", icon: "⚡" },
        { name: "Git", icon: "🔄" }
      ]
    },
    {
      title: "Testing",
      icon: TestTube,
      description: "Ensuring code quality through comprehensive testing methodologies.",
      skills: [
        { name: "Jest", icon: "🃏" },
        { name: "React Testing Library", icon: "🔍" },
        { name: "Cypress", icon: "🎯" },
        { name: "Unit Testing", icon: "⚡" },
        { name: "E2E Testing", icon: "🔄" },
        { name: "TDD", icon: "📝" }
      ]
    },
    {
      title: "Trainer",
      icon: User,
      description: "Passionate about sharing knowledge and helping others grow in their tech journey.",
      skills: [
        { name: "Technical Workshops", icon: "👨‍🏫" },
        { name: "Code Reviews", icon: "👀" },
        { name: "Mentoring", icon: "🤝" },
        { name: "Documentation", icon: "📚" },
        { name: "Team Leadership", icon: "👥" },
        { name: "Agile Practices", icon: "🔄" }
      ]
    },
    {
      title: "Learning",
      icon: Book,
      description: "Continuously expanding knowledge in emerging technologies and best practices.",
      skills: [
        { name: "AI/ML", icon: "🤖" },
        { name: "Web3", icon: "⛓️" },
        { name: "Cloud Architecture", icon: "☁️" },
        { name: "Mobile Development", icon: "📱" },
        { name: "System Design", icon: "🏗️" },
        { name: "Performance Optimization", icon: "⚡" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">My Skills</h1>
        <div className="grid gap-8">
          {skillSections.map((section) => (
            <Card key={section.title} className="border border-primary/20 bg-card hover:border-primary/40 transition-colors">
              <div className="grid md:grid-cols-[200px,1fr] gap-4">
                <CardHeader className="md:border-r border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{section.description}</p>
                </CardHeader>
                <CardContent className="pt-6 md:pt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {section.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2 text-foreground/80">
                        <span className="text-xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
