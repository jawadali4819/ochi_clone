import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.09"
      className='w-full h-min pt-20 pb-10 bg-[#CDEA68] text-[#212121] font-["Neue_Montreal"] rounded-tl-3xl rounded-tr-3xl '>
      <h1 className='px-10 text-[4vw] leading-[4.2vw] tracking-normal'>
        Ochi is a strategic partner for fast-growing tech businesses that need to <u>raise funds</u>, <u>sell products</u>,  <u>explain complex ideas</u>, and <u>hire great people</u>.
      </h1>

      <div className='w-full flex border-t-[1px] border-t-[#738531] mt-16 p-0'>
        <div className='px-10 w-1/2 flex flex-col justify-start gap-5'>
          <h1 className="text-[4vw] tracking-tight ">
            Our approach:
          </h1>
          <button className='bg-[#1e1d1d] text-white text-[1vw] uppercase font-light rounded-full pl-[1.5rem] pr-[0.5rem] py-2 w-max flex items-center justify-center gap-5'>
            Read more

            <div className=" bg-white text-black w-max p-3 rounded-[50%] flex items-center justify-center rotate-[135deg] cursor-pointer" >
              <FaArrowLeftLong />
            </div>

          </button>

        </div>

        <div className='w-1/2 h-[70vh] my-5 mx-5 bg-[#9aca2a] rounded-[1rem] align-self-center'>
          <img src="/images/about_image.jpg" alt=""
            className="w-full h-full object-cover rounded-[1rem]"
          />

        </div>

      </div>

    </div>
  )
}

export default About
