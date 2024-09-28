import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Teste3() {
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quando a div está visível na tela
          gsap.to(boxRef.current, { duration: 1, scale: 1.2, opacity: 1, delay: 0.3 });
        } else {
          // Quando a div sai da tela
          gsap.to(boxRef.current, { duration: 1, scale: 1, opacity: 0.4 });
        }
      });
    }, { threshold: 0.7 }); // Ajuste o threshold conforme necessário

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div style={{ height: '150vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div 
        ref={boxRef} 
        style={{ 
          width: '100px', 
          height: '100px', 
          background: 'red', 
          opacity: 0.5 
        }}
      />
    </div>
  );
};