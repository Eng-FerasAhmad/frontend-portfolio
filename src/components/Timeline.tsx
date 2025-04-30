
import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Briefcase, Calendar, BabyIcon } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-gradient">Education & Experience</span>
      </h2>
      
      {/* Centered timeline container with increased horizontal space */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Centered vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300 dark:from-purple-400 dark:via-purple-500 dark:to-purple-600" />

        {/* Timeline items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${isMobile ? 'flex-col items-center' : (index % 2 === 0 ? 'justify-start' : 'justify-end')} animate-fade-up`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Timeline dot - centered on the timeline */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center p-3 rounded-full bg-white/90 dark:bg-navy-dark/90 shadow-lg border-2 border-purple-300 dark:border-purple-700 z-10">
                {item.type === 'education' ? (
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                ) : (
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                )}
              </div>

              {/* Content - alternating sides with proper spacing from center */}
              <div className={`
                ${isMobile ? 'mt-16 w-full' : index % 2 === 0 
                  ? 'w-[45%] pr-8 mr-[5%]' 
                  : 'w-[45%] pl-8 ml-[55%]'
                }
              `}>
                <Card className="backdrop-blur-sm bg-white/70 dark:bg-navy-dark/70 hover:bg-white/90 dark:hover:bg-navy-dark/90 transition-all duration-300 transform hover:-translate-y-1 shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2 text-purple-500 dark:text-purple-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">{item.year}</span>
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
            </div>
          ))}
          
          {/* Birth information at the bottom of timeline */}
          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: '900ms' }}>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center p-3 rounded-full bg-white/90 dark:bg-navy-dark/90 shadow-lg border-2 border-purple-300 dark:border-purple-700 z-10">
                <BabyIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-purple-500 dark:text-purple-300">Born Sep. 1987</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
