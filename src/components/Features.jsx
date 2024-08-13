import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [vise, setVise] = useState(false);
  const [fyde, setFyde] = useState(false);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, zIndex: 10 },
  };

  const scaleVarients = {
    hidden: { scale: 1 },
    visible: { scale: 0.9 },
  }

  return (
    <div className='w-full py-20'>
      <div className='w-full px-10 pb-10 flex border-b-[1px] border-b-zinc-600'>
        <h1 className='font-["Neue_Montreal"] text-[7vh] tracking-wide'>Featured projects</h1>
      </div>

      <div className='cards mt-10 px-10 w-full flex items-center gap-10'>
        <div
          className='card-1 cards-container relative w-1/2 h-[75vh]'
          onMouseEnter={() => setFyde(true)}
          onMouseLeave={() => setFyde(false)}
        >
          <motion.h1
            className='absolute left-[80%] transform -translate-x-1/2 top-[50%] text-[7vw] text-[#55635F] RobotoCondensed font-bold tracking-tighter leading-[0px]'
            initial="hidden"
            animate={fyde ? "visible" : "hidden"}
            variants={headingVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            FYDE
          </motion.h1>
          <motion.div className='w-full h-full rounded-xl overflow-hidden'
            initial="hidden"
            animate={fyde ? "visible" : "hidden"}
            variants={scaleVarients}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="image" />
          </motion.div>
        </div>

        <div
          className='card-2 cards-container relative w-1/2 h-[75vh]'
          onMouseEnter={() => setVise(true)}
          onMouseLeave={() => setVise(false)}
        >
          <motion.h1
            className='absolute right-[90%] transform -translate-x-1/2 top-[50%] text-[7vw] text-[#55635F] RobotoCondensed font-bold tracking-tighter leading-[0px]'
            initial="hidden"
            animate={vise ? "visible" : "hidden"}
            variants={headingVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            VISE
          </motion.h1>
          <motion.div className='w-full h-full rounded-xl overflow-hidden'
            initial="hidden"
            animate={vise ? "visible" : "hidden"}
            variants={scaleVarients}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
