
import { Book, Code, TestTube, User, Build, Design } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillSections = [
    {
      title: "Developer",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "REST APIs"]
    },
    {
      title: "Design",
      icon: Design,
      skills: ["UI/UX Design", "Figma", "Responsive Design", "CSS/SCSS", "Tailwind CSS", "Design Systems"]
    },
    {
      title: "Build",
      icon: Build,
      skills: ["Docker", "CI/CD", "AWS", "Webpack", "Vite", "Git"]
    },
    {
      title: "Testing",
      icon: TestTube,
      skills: ["Jest", "React Testing Library", "Cypress", "Unit Testing", "E2E Testing", "TDD"]
    },
    {
      title: "Trainer",
      icon: User,
      skills: ["Technical Workshops", "Code Reviews", "Mentoring", "Documentation", "Team Leadership", "Agile Practices"]
    },
    {
      title: "Learning",
      icon: Book,
      skills: ["AI/ML", "Web3", "Cloud Architecture", "Mobile Development", "System Design", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillSections.map((section) => (
            <Card key={section.title} className="border border-primary/20 bg-card hover:border-primary/40 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.skills.map((skill) => (
                    <li key={skill} className="text-foreground/80">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
