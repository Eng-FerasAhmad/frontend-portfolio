
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 via-background/5 to-transparent" />
          </div>

          {/* Content section */}
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl font-bold">
              <span className="text-gradient">Hello, I'm Sarah</span>
            </h1>
            <div className="space-y-4 text-lg text-foreground/80">
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
  );
};

export default About;
