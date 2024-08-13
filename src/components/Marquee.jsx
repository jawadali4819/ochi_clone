import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".009"
      className=" bg-[#55635F] rounded-tl-3xl rounded-tr-3xl w-full py-20 overflow-hidden">
      <div className=' border-t-[1px] border-b-[1px] border-zinc-800 flex  items-center whitespace-nowrap RobotoCondensed'>
        <motion.h1
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className='uppercase text-[19vw] pr-10 tracking-tighter leading-none font-bold'
        >We are ochi</motion.h1>
        <motion.h1
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className='uppercase text-[19vw] pr-10 tracking-tighter leading-none font-bold'
        >We are ochi</motion.h1>
      </div>
    </div>
  )
}

// initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}

export default Marquee
