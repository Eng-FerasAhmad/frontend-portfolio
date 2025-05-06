
import { useTranslation } from "react-i18next";
import { 
  BrainCircuit, Palette, Wrench, Beaker, GraduationCap, Sparkles,
  Code2, FileCode, Activity, Server, Diamond, Scaling,
  Paintbrush, Figma, Smartphone, Brush, Waves, PenTool,
  Container, GitBranch, Cloud, Package, Zap, Gift,
  TestTube, Waypoints, Target, Blocks, ClipboardCheck,
  Users, Eye, HandHelping, BookOpen, UserRound, Workflow,
  Bot, Baseline, Network, AppWindow, Component, Gauge
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import BackgroundDecoration from "@/components/BackgroundDecoration";

const Skills = () => {
  const { t } = useTranslation();

  const skillSections = [
    {
      title: t('skills.developer.title'),
      icon: BrainCircuit,
      description: t('skills.developer.description'),
      skills: [
        { name: "React", icon: Code2, description: t('skills.developer.items.react') },
        { name: "Vue", icon: Component, description: t('skills.developer.items.vue') },
        { name: "Angular", icon: Activity, description: t('skills.developer.items.angular') },
        { name: "TypeScript", icon: FileCode, description: t('skills.developer.items.typescript') },
        { name: "JavaScript", icon: Code2, description: t('skills.developer.items.javascript') },
        { name: "Node.js", icon: Server, description: t('skills.developer.items.nodejs') },
        { name: "Redux", icon: Diamond, description: t('skills.developer.items.redux') },
        { name: "Vuex", icon: AppWindow, description: t('skills.developer.items.vuex') },
        { name: "Git", icon: GitBranch, description: t('skills.developer.items.git') },
        { name: "Scrum", icon: Target, description: t('skills.developer.items.scrum') },
        { name: "Kanban", icon: Blocks, description: t('skills.developer.items.kanban') },
        { name: "Sentry", icon: Eye, description: t('skills.developer.items.sentry') }
      ]
    },
    {
      title: t('skills.design.title'),
      icon: Palette,
      description: t('skills.design.description'),
      skills: [
        { name: "UI/UX Design", icon: Paintbrush, description: t('skills.design.items.uiux') },
        { name: "Figma", icon: Figma, description: t('skills.design.items.figma') },
        { name: "Responsive Design", icon: Smartphone, description: t('skills.design.items.responsive') },
        { name: "CSS/SCSS", icon: Brush, description: t('skills.design.items.css') },
        { name: "Tailwind CSS", icon: Waves, description: t('skills.design.items.tailwind') },
        { name: "Design Systems", icon: PenTool, description: t('skills.design.items.designSystems') }
      ]
    },
    {
      title: t('skills.build.title'),
      icon: Wrench,
      description: t('skills.build.description'),
      skills: [
        { name: "Docker", icon: Container, description: t('skills.build.items.docker') },
        { name: "CI/CD", icon: GitBranch, description: t('skills.build.items.cicd') },
        { name: "AWS", icon: Cloud, description: t('skills.build.items.aws') },
        { name: "Webpack", icon: Package, description: t('skills.build.items.webpack') },
        { name: "Vite", icon: Zap, description: t('skills.build.items.vite') },
        { name: "Git", icon: Gift, description: t('skills.build.items.git') }
      ]
    },
    {
      title: t('skills.testing.title'),
      icon: Beaker,
      description: t('skills.testing.description'),
      skills: [
        { name: "Jest", icon: TestTube, description: t('skills.testing.items.jest') },
        { name: "React Testing Library", icon: Waypoints, description: t('skills.testing.items.rtl') },
        { name: "Cypress", icon: Target, description: t('skills.testing.items.cypress') },
        { name: "Unit Testing", icon: Blocks, description: t('skills.testing.items.unit') },
        { name: "E2E Testing", icon: Diamond, description: t('skills.testing.items.e2e') },
        { name: "TDD", icon: ClipboardCheck, description: t('skills.testing.items.tdd') }
      ]
    },
    {
      title: t('skills.trainer.title'),
      icon: GraduationCap,
      description: t('skills.trainer.description'),
      skills: [
        { name: "Technical Workshops", icon: Users, description: t('skills.trainer.items.workshops') },
        { name: "Code Reviews", icon: Eye, description: t('skills.trainer.items.codeReviews') },
        { name: "Mentoring", icon: HandHelping, description: t('skills.trainer.items.mentoring') },
        { name: "Documentation", icon: BookOpen, description: t('skills.trainer.items.documentation') },
        { name: "Team Leadership", icon: UserRound, description: t('skills.trainer.items.leadership') },
        { name: "Agile Practices", icon: Workflow, description: t('skills.trainer.items.agile') }
      ]
    },
    {
      title: t('skills.learning.title'),
      icon: Sparkles,
      description: t('skills.learning.description'),
      skills: [
        { name: "AI/ML", icon: Bot, description: t('skills.learning.items.ai') },
        { name: "Web3", icon: Baseline, description: t('skills.learning.items.web3') },
        { name: "Cloud Architecture", icon: Network, description: t('skills.learning.items.cloud') },
        { name: "Mobile Development", icon: AppWindow, description: t('skills.learning.items.mobile') },
        { name: "System Design", icon: Component, description: t('skills.learning.items.systemDesign') },
        { name: "Performance Optimization", icon: Gauge, description: t('skills.learning.items.performance') }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6 relative overflow-hidden">
      <BackgroundDecoration />
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-3xl font-bold mb-12 text-gradient">{t('skills.title')}</h1>
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
                      <HoverCard key={skill.name}>
                        <HoverCardTrigger asChild>
                          <div 
                            className="flex items-center gap-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer p-2 rounded-md hover:bg-primary/5"
                          >
                            <skill.icon className="w-5 h-5" />
                            <span className="text-sm">{skill.name}</span>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">{skill.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {skill.description || `Skills and experience with ${skill.name}`}
                              </p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
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

