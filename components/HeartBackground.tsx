import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  scale: number;
  duration: number;
  delay: number;
}

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate random hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random percentage for left position
      scale: Math.random() * 0.5 + 0.5, // Scale between 0.5 and 1
      duration: Math.random() * 10 + 10, // Duration between 10s and 20s
      delay: Math.random() * 10, // Random delay
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300 opacity-30"
          initial={{ y: '110vh', x: `${heart.x}vw`, scale: heart.scale, opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.4, 0],
            rotate: [0, 10, -10, 0], // Gentle wiggle
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default HeartBackground;
