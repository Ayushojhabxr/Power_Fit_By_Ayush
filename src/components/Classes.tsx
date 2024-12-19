import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { SectionTitle } from './ui/SectionTitle';

const classes = [
  {
    title: "Strength Training",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Build muscle and increase strength with our comprehensive strength training programs."
  },
  {
    title: "HIIT",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness."
  },
  {
    title: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Find balance and flexibility with our expert-led yoga classes."
  }
];

export function Classes() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section id="classes" className="py-20 bg-gray-100 perspective-1000">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Our Classes</SectionTitle>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {classes.map((cls, index) => {
            const springProps = useSpring({
              transform: hoveredIndex === index 
                ? 'scale(1.05) rotateY(10deg)' 
                : 'scale(1) rotateY(0deg)',
              config: { tension: 300, friction: 40 }
            });

            return (
              <animated.div
                key={cls.title}
                style={springProps}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform-style-3d cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img src={cls.image} alt={cls.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{cls.title}</h3>
                    <p className="text-gray-600">{cls.description}</p>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}