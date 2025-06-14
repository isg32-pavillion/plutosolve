
import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    const getSystemTheme = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const getCurrentTheme = () => {
      if (theme === 'system') {
        return getSystemTheme();
      }
      return theme;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTheme = getCurrentTheme();
      
      // Theme-aware gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      if (currentTheme === 'dark') {
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.08)'); // purple
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.06)'); // blue
        gradient.addColorStop(1, 'rgba(147, 51, 234, 0.08)'); // purple
      } else {
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.03)'); // purple
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.02)'); // blue
        gradient.addColorStop(1, 'rgba(147, 51, 234, 0.03)'); // purple
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Theme-aware particles
      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (currentTheme === 'dark') {
          ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity * 1.5})`;
        } else {
          ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        }
        
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      particles.length = 0;
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getCurrentTheme = () => {
    if (theme === 'system') {
      return getSystemTheme();
    }
    return theme;
  };

  const currentTheme = getCurrentTheme();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        background: currentTheme === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' 
          : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}
    />
  );
};

export default AnimatedBackground;
