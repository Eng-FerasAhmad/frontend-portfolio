
import { Code, Hammer, Paintbrush, Book, User, TestTube } from "lucide-react";
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
        <h1 className="text-3xl font-bold mb-12 text-gradient">My Skills</h1>
        <div className="grid gap-12">
          {skillSections.map((section) => (
            <Card 
              key={section.title} 
              className="bg-transparent border-none shadow-none space-y-6"
            >
              <div className="flex flex-col">
                <CardHeader className="pb-8 px-0">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/5 p-2">
                      <section.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-400 mt-4 w-full">{section.description}</p>
                </CardHeader>
                <CardContent className="pt-8 px-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {section.skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="flex items-center gap-3 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm">{skill.name}</span>
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
