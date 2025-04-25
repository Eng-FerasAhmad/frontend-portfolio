
import { 
  BrainCircuit, Palette, Wrench, Beaker, GraduationCap, Sparkles,
  Code2, FileCode, Activity, Server, Binary, Scaling,
  Paintbrush, Figma, Smartphone, Brush, Waves, PenTool,
  Container, GitBranch, Cloud, Package, Zap, Gift,
  TestTube, Waypoints, Target, Blocks, Diamond, ClipboardCheck,
  Users, Eye, HandHelping, BookOpen, UserRound, Workflow,
  Bot, Baseline, Network, AppWindow, Component, Gauge
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillSections = [
    {
      title: "Developer",
      icon: BrainCircuit,
      description: "Experienced in modern web development with a focus on front-end technologies and responsive design.",
      skills: [
        { name: "JavaScript", icon: Code2 },
        { name: "TypeScript", icon: FileCode },
        { name: "React", icon: Activity },
        { name: "Node.js", icon: Server },
        { name: "Python", icon: Binary },
        { name: "REST APIs", icon: Scaling }
      ]
    },
    {
      title: "Design",
      icon: Palette,
      description: "Creating beautiful and intuitive user interfaces with modern design principles and tools.",
      skills: [
        { name: "UI/UX Design", icon: Paintbrush },
        { name: "Figma", icon: Figma },
        { name: "Responsive Design", icon: Smartphone },
        { name: "CSS/SCSS", icon: Brush },
        { name: "Tailwind CSS", icon: Waves },
        { name: "Design Systems", icon: PenTool }
      ]
    },
    {
      title: "Build",
      icon: Wrench,
      description: "Expertise in DevOps and deployment tools to build scalable applications.",
      skills: [
        { name: "Docker", icon: Container },
        { name: "CI/CD", icon: GitBranch },
        { name: "AWS", icon: Cloud },
        { name: "Webpack", icon: Package },
        { name: "Vite", icon: Zap },
        { name: "Git", icon: Gift }
      ]
    },
    {
      title: "Testing",
      icon: Beaker,
      description: "Ensuring code quality through comprehensive testing methodologies.",
      skills: [
        { name: "Jest", icon: TestTube },
        { name: "React Testing Library", icon: Waypoints },
        { name: "Cypress", icon: Target },
        { name: "Unit Testing", icon: Blocks },
        { name: "E2E Testing", icon: Diamond },
        { name: "TDD", icon: ClipboardCheck }
      ]
    },
    {
      title: "Trainer",
      icon: GraduationCap,
      description: "Passionate about sharing knowledge and helping others grow in their tech journey.",
      skills: [
        { name: "Technical Workshops", icon: Users },
        { name: "Code Reviews", icon: Eye },
        { name: "Mentoring", icon: HandHelping },
        { name: "Documentation", icon: BookOpen },
        { name: "Team Leadership", icon: UserRound },
        { name: "Agile Practices", icon: Workflow }
      ]
    },
    {
      title: "Learning",
      icon: Sparkles,
      description: "Continuously expanding knowledge in emerging technologies and best practices.",
      skills: [
        { name: "AI/ML", icon: Bot },
        { name: "Web3", icon: Baseline },
        { name: "Cloud Architecture", icon: Network },
        { name: "Mobile Development", icon: AppWindow },
        { name: "System Design", icon: Component },
        { name: "Performance Optimization", icon: Gauge }
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
                        <skill.icon className="w-5 h-5" />
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
