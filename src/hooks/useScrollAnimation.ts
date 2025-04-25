
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline-section');
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;

      if (isVisible) {
        timelineSection.style.opacity = '1';
        timelineSection.style.transform = 'translateY(0)';
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
