
import React from 'react';
import Timeline from '../components/Timeline';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  return (
    <div className="relative">
      {/* Creative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background dark:from-navy dark:via-navy/90 dark:to-navy opacity-80" />
        
        {/* Floating shapes - circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-3xl animate-pulse" 
             style={{animationDuration: '15s'}} />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-900/20 blur-3xl animate-pulse"
             style={{animationDuration: '25s', animationDelay: '2s'}} />
             
        {/* Tech pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1a1f2c_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Full screen hero section */}
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl w-full">
            {/* Grid section with image and intro */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image section */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 dark:border-purple-900/30">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Profile"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-transparent mix-blend-overlay" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-70 blur-xl" />
              </div>

              {/* Content section */}
              <div className="space-y-6 animate-fade-up backdrop-blur-sm bg-white/30 dark:bg-navy-dark/30 p-6 rounded-xl shadow-lg border border-white/20 dark:border-purple-900/20">
                <h1 className="text-4xl font-bold">
                  <span className="text-gradient">Hello, I'm Sarah</span>
                </h1>
                <div className="space-y-4 text-lg text-foreground/80 dark:text-white/80">
                  <p>
                    I'm a passionate Senior Frontend Engineer with over 8 years of experience crafting exceptional web experiences. My expertise lies in React, TypeScript, and modern web technologies.
                  </p>
                  <p>
                    I specialize in building responsive, performant, and accessible web applications that delight users and solve real-world problems. When I'm not coding, you can find me contributing to open-source projects or mentoring aspiring developers.
                  </p>
                  <p>
                    Currently based in Berlin, Germany, I enjoy combining technical expertise with creative problem-solving to build products that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline section with scroll animation */}
        <div id="timeline-section" className="min-h-screen py-20 px-6 opacity-0 transform translate-y-10 transition-all duration-1000 backdrop-blur-sm bg-white/10 dark:bg-navy-dark/10 rounded-t-3xl">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
