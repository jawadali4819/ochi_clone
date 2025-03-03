import React from "react";
import HoverEffect from "./HoverEffect";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.09"
      className="w-full min-h-screen pt-20 pb-10 bg-[#CDEA68] text-[#212121] font-['Neue_Montreal'] rounded-tl-3xl rounded-tr-3xl flex flex-col items-center"
    >
      {/* Intro Text */}
      <h1 className="px-5 md:px-10 text-[6vw] md:text-[4vw] leading-[7vw] md:leading-[4.2vw] text-center md:text-left">
        Ochi is a strategic partner for fast-growing tech businesses that need to{" "}
        <u>raise funds</u>, <u>sell products</u>, <u>explain complex ideas</u>, and{" "}
        <u>hire great people</u>.
      </h1>

      {/* Content Section */}
      <div className="w-full flex flex-col md:flex-row border-t-[1px] border-t-[#738531] mt-10 md:mt-16 p-5 md:p-0">
        {/* Left Side */}
        <div className="px-5 md:px-10 w-full md:w-1/2 flex flex-col justify-start gap-5">
          <h1 className="text-[6vw] md:text-[4vw] tracking-tight">Our approach:</h1>
          <button className="bg-[#1e1d1d] text-white text-[3vw] md:text-[1vw] uppercase font-light rounded-full pl-5 pr-3 py-2 w-max flex items-center justify-center gap-5 transition-all duration-300 hover:bg-[#444]">
            Read more
            <div className="bg-white text-black p-3 rounded-full flex items-center justify-center rotate-[135deg] cursor-pointer"></div>
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-auto md:h-[70vh] my-5 mx-5 bg-[#9aca2a] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/about_image.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
