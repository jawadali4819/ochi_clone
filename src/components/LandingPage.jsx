import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useState } from 'react';
import "../style/LandingPage.css";

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className='w-full h-screen pt-1 bg-zinc-900'>
      <div className="textStructure mt-40 px-10">
        {
          ['we create', 'eye-opening', 'presentations'].map((text, index) => {
            return (
              <div key={index} className="masker">
                <div className='w-fit flex items-center overflow-hidden'>
                  {
                    index === 1 && (<motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
                      className=' h-[11vh] w-[10vw] mr-2 bg-red-600 relative  rounded-sm'></motion.div>)
                  }
                  <h1 className="uppercase text-[7.5vw] leading-[6.5vw] tracking-[-0.3vw] font-semibold RobotoCondensed">
                    {text}
                  </h1>

                </div>

              </div>
            )

          })
        }

      </div>

      <div className=' w-full border-t-[1px] border-zinc-700 mt-[6.2rem] flex justify-between items-center px-10 py-5'>{
        ['For public and private companies', 'From the first pitch to IPO'].map((text, index) => <p key={index} className=' text-[1.2vw] font-light'>{text}</p>)
      }

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}

          className=" flex items-center justify-center gap-5 font-['Neue_Montreal'] font-medium">
          <button className="start overflow-hidden  px-5 py-[0.5rem] border-[1px] border-zinc-700 rounded-full uppercase text-[1vw] cursor-pointer "
            style={{ color: isHovered ? '#000' : '#fff' }}
          >
            Start the project
          </button>
          <div className="start arrow border-[1px] border-zinc-700 rounded-[50%] flex items-center justify-center p-2 rotate-45 cursor-pointer"
            style={{ color: isHovered ? '#000' : '#fff', backgroundColor: isHovered ? '#fff' : 'transparent' }}
          >
            <FaArrowUp />
          </div>
        </div>

      </div>

    </div>
  )
}

export default LandingPage
