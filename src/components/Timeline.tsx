
import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Briefcase, Calendar, BabyIcon } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { useTranslation } from 'react-i18next';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  type: 'education' | 'work';
  description?: string;
  translationKey: string;
}

const Timeline = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  // Timeline data with translation keys
  const timelineData: TimelineItem[] = [
    {
      year: "2022-Present",
      title: t('timeline.items.0.title'),
      subtitle: t('timeline.items.0.subtitle'),
      type: "work",
      description: t('timeline.items.0.description'),
      translationKey: "senior-frontend"
    },
    {
      year: "2021-2022",
      title: t('timeline.items.1.title'),
      subtitle: t('timeline.items.1.subtitle'),
      type: "work",
      description: t('timeline.items.1.description'),
      translationKey: "junior-frontend"
    },
    {
      year: "2017-2021",
      title: t('timeline.items.2.title'),
      subtitle: t('timeline.items.2.subtitle'),
      type: "education",
      description: t('timeline.items.2.description'),
      translationKey: "bachelors"
    },
    {
      year: "2014-2017",
      title: t('timeline.items.3.title'),
      subtitle: t('timeline.items.3.subtitle'),
      type: "education",
      description: t('timeline.items.3.description'),
      translationKey: "high-school"
    },
    {
      year: "2011-2014",
      title: t('timeline.items.4.title'),
      subtitle: t('timeline.items.4.subtitle'),
      type: "education",
      description: t('timeline.items.4.description'),
      translationKey: "middle-school"
    },
    {
      year: "2005-2011",
      title: t('timeline.items.5.title'),
      subtitle: t('timeline.items.5.subtitle'),
      type: "education",
      description: t('timeline.items.5.description'),
      translationKey: "elementary"
    }
  ];
  
  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-gradient">{t('timeline.title')}</span>
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
                <p className="text-sm font-medium text-purple-500 dark:text-purple-300">{t('timeline.birth')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
