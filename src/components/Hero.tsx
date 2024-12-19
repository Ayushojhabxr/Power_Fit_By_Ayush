import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

export function Hero() {
  const titleAnimation = useSpring({
    from: { transform: 'translateZ(-1000px)', opacity: 0 },
    to: { transform: 'translateZ(0)', opacity: 1 },
    delay: 200,
    config: { tension: 280, friction: 60 }
  });

  const buttonAnimation = useSpring({
    from: { transform: 'scale(0) rotateX(-180deg)', opacity: 0 },
    to: { transform: 'scale(1) rotateX(0deg)', opacity: 1 },
    delay: 800,
    config: { tension: 200, friction: 20 }
  });

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden perspective-1000">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-style-3d"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative container mx-auto px-4 text-center text-white transform-style-3d">
        <animated.div style={titleAnimation}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transform Your Body,<br />Transform Your Life
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Join PowerFit and experience state-of-the-art facilities, expert trainers, and a supportive community dedicated to helping you achieve your fitness goals.
          </motion.p>
        </animated.div>
        
        <animated.button 
          style={buttonAnimation}
          className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-110"
          onClick={() => {
            const element = document.getElementById('classes');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Your Journey
        </animated.button>
      </div>
    </section>
  );
}