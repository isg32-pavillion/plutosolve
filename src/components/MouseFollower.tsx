
import { useEffect, useState } from 'react';
import '../App.css'

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed glass pointer-events-none z-30 transition-opacity duration-300 ${
        isVisible ? 'opacity-80' : 'opacity-0'
      }`}
      
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-24 h-24 glass rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 backdrop-blur-sm border border-white/20 shadow-lg" />
    </div>
  );
};

export default MouseFollower;
