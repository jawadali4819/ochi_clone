import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [vise, setVise] = useState(false);
  const [fyde, setFyde] = useState(false);

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30, rotate: 5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      }
    },
  };

  const scaleVariants = {
    hidden: { scale: 1, filter: 'brightness(1)' },
    visible: { 
      scale: 0.95, 
      filter: 'brightness(0.85)',
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' 
      }
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.3, 
      transition: { 
        duration: 0.4, 
        ease: 'easeInOut' 
      }
    },
  };

  return (
    <div className="w-full py-10 md:py-20 bg-gradient-to-b from-zinc-800 to-zinc-800">
      {/* Heading Section */}
      <div className="w-full px-6 md:px-10 pb-8 md:pb-10 border-b border-zinc-300">
        <h1 className="font-['Neue_Montreal'] text-4xl sm:text-5xl md:text-[7vh] tracking-wide text-zinc-100">
          Featured Projects
        </h1>
      </div>

      {/* Cards Section */}
      <div className="cards mt-8 md:mt-12 px-6 md:px-10 w-full flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Card 1 - FYDE */}
        <div
          className="card-1 cards-container relative w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[75vh]"
          onMouseEnter={() => setFyde(true)}
          onMouseLeave={() => setFyde(false)}
        >
          {/* Overlay for hover effect */}
          <motion.div
            className="absolute inset-0 bg-black z-10 rounded-xl"
            initial="hidden"
            animate={fyde ? 'visible' : 'hidden'}
            variants={overlayVariants}
          />

          {/* Animated Heading */}
          <motion.h1
            className="absolute left-1/2 md:left-[80%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-[7vw] text-[#80a588] font-['Roboto_Condensed'] font-bold tracking-tighter z-20 pointer-events-none"
            initial="hidden"
            animate={fyde ? 'visible' : 'hidden'}
            variants={headingVariants}
          >
            FYDE
          </motion.h1>

          {/* Animated Image */}
          <motion.div
            className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-white"
            initial="hidden"
            animate={fyde ? 'visible' : 'hidden'}
            variants={scaleVariants}
          >
            <img
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt="Fyde project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Card 2 - VISE */}
        <div
          className="card-2 cards-container relative w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[75vh]"
          onMouseEnter={() => setVise(true)}
          onMouseLeave={() => setVise(false)}
        >
          {/* Overlay for hover effect */}
          <motion.div
            className="absolute inset-0 bg-black z-10 rounded-xl"
            initial="hidden"
            animate={vise ? 'visible' : 'hidden'}
            variants={overlayVariants}
          />

          {/* Animated Heading */}
          <motion.h1
            className="absolute right-1/2 md:right-[90%] translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-[7vw] text-[#80a588] font-['Roboto_Condensed'] font-bold tracking-tighter z-20 pointer-events-none"
            initial="hidden"
            animate={vise ? 'visible' : 'hidden'}
            variants={headingVariants}
          >
            VISE
          </motion.h1>

          {/* Animated Image */}
          <motion.div
            className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-white"
            initial="hidden"
            animate={vise ? 'visible' : 'hidden'}
            variants={scaleVariants}
          >
            <img
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt="Vise project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;