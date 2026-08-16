import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on touch devices robustly
    const isTouchDevice = (typeof window !== 'undefined' && 
      (window.matchMedia('(pointer: coarse)').matches || 
       'ontouchstart' in window || 
       navigator.maxTouchPoints > 0));

    if (isTouchDevice) {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
      return;
    }

    let rafId: number;
    let mouseX = -100;
    let mouseY = -100;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Continuous requestAnimationFrame loop
    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
      rafId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateCursor); // start the loop
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#CAFF00] rounded-full pointer-events-none z-[9999] shadow-[0_0_7px_#CAFF00]"
    />
  );
};
