
import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  type: 'education' | 'work';
  description?: string;
}

// Reversed timeline data to show newest first
const timelineData: TimelineItem[] = [
  {
    year: "2022-Present",
    title: "Senior Frontend Engineer",
    subtitle: "InnovateTech Solutions",
    type: "work",
    description: "Leading frontend development team and architecting solutions"
  },
  {
    year: "2021-2022",
    title: "Junior Frontend Developer",
    subtitle: "TechStart Inc.",
    type: "work",
    description: "Developed responsive web applications using React"
  },
  {
    year: "2017-2021",
    title: "Bachelor's Degree in Computer Science",
    subtitle: "University of Technology",
    type: "education",
    description: "Specialized in Web Development and Software Engineering"
  },
  {
    year: "2014-2017",
    title: "High School",
    subtitle: "Washington High School",
    type: "education",
    description: "Focus on STEM subjects and computer science"
  },
  {
    year: "2011-2014",
    title: "Middle School",
    subtitle: "Lincoln Middle School",
    type: "education",
    description: "Advanced coursework and introduction to programming"
  },
  {
    year: "2005-2011",
    title: "Elementary School",
    subtitle: "St. Mary's Elementary",
    type: "education",
    description: "Foundations of learning and early development"
  }
];

const Timeline = () => {
  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-gradient">Education & Experience</span>
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-5 bottom-5 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300 dark:from-purple-400 dark:via-purple-500 dark:to-purple-600" />

        {/* Timeline items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative pl-16 animate-fade-up"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Icon */}
              <div className="absolute left-0 p-3 rounded-full bg-white dark:bg-navy-dark shadow-lg border border-purple-200 dark:border-purple-900">
                {item.type === 'education' ? (
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                ) : (
                  <Briefcase className="w-6 h-6 text-purple-500" />
                )}
              </div>

              {/* Content */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-navy-dark/70 hover:bg-white/90 dark:hover:bg-navy-dark/90 transition-all duration-300 transform hover:translate-x-1 border border-purple-100 dark:border-purple-900/30">
                <CardContent className="p-6">
                  <div className="absolute -right-2 -top-2 bg-purple-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <div className="text-sm text-purple-500 dark:text-purple-300 font-medium mb-2">
                    {item.subtitle}
                  </div>
                  {item.description && (
                    <p className="text-sm text-foreground/70 dark:text-white/70">
                      {item.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
