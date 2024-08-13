import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HoverEffect = ({ defaultText, hoverText, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col items-center justify-center w-[100px] relative cursor-pointer p-0 m-0 ${index === 4 && 'ml-[8vw]'}`}
    >
      {/* Default Text */}
      <motion.span
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isHovered ? -20 : 0, // Move up on hover
          opacity: isHovered ? 0 : 1, // Fade out on hover
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        style={{ display: 'block', position: 'absolute', left: 0, right: 0, width: '100%', textAlign: 'center' }}
      >
        {defaultText}
      </motion.span>

      {/* Hover Text */}
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: isHovered ? 0 : 10, // Move down on mouse leave
          opacity: isHovered ? 1 : 0, // Fade in on hover
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        style={{ display: 'block', position: 'absolute', left: 0, right: 0, width: '100%', textAlign: 'center' }}
      >
        {hoverText}
      </motion.span>
      <motion.div
        style={{
          position: 'absolute',
          bottom: -2, // Position the underline just below the text
          left: 0,
          height: '0.5px',
          width: '100%',
          scaleX: 0,
          transformOrigin: 'left',
          backgroundColor: 'white',
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0, // Underline expands from left to right
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >

      </motion.div>
    </motion.div>
  );
};

export default HoverEffect;
