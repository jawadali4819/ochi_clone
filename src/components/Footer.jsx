import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, color: '#CFEB70', transition: { duration: 0.3 } },
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full min-h-screen flex flex-col justify-center px-6 md:px-10 pt-16 md:pt-24 pb-10 bg-gradient-to-b from-zinc-900 to-zinc-800 border-[1px] border-zinc-600 rounded-t-xl z-[100]"
    >
      <motion.div
        className="flex flex-col md:flex-row w-full h-full gap-10 md:gap-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
          <div className="heading">
            <motion.h1
              className="font-['Roboto_Condensed'] text-5xl sm:text-6xl md:text-[8vw] leading-none tracking-[-0.3vw] text-white uppercase"
              variants={textVariants}
            >
              Eye-
            </motion.h1>
            <motion.h1
              className="font-['Roboto_Condensed'] text-5xl sm:text-6xl md:text-[8vw] leading-none tracking-[-0.3vw] text-white uppercase"
              variants={textVariants}
            >
              Opening
            </motion.h1>
          </div>

          {/* Logo */}
          <motion.div
            className="ochi-logo flex justify-start items-center mt-6 md:mt-0"
            variants={textVariants}
          >
            <svg
              width="clamp(40px, 5vw, 50px)"
              height="clamp(40px, 5vw, 50px)"
              viewBox="0 0 72 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                fill="#ffffff"
              />
              <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="#ffffff" />
              <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="#ffffff" />
              <path
                d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                fill="#ffffff"
              />
              <path
                d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                fill="#ffffff"
              />
            </svg>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
          <div>
            <motion.h1
              className="font-['Roboto_Condensed'] text-4xl sm:text-5xl md:text-[7vw] leading-none tracking-[-0.3vw] text-white uppercase mb-6 md:mb-10"
              variants={textVariants}
            >
              Presentations
            </motion.h1>

            {/* Navigation Links */}
            {/* <div className="flex flex-col gap-4">
              {['Home', 'Services', 'Our Work', 'About Us', 'Contact'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-lg md:text-xl text-zinc-400 hover:text-[#CFEB70] uppercase"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Social Media and CTA */}
          <div className="mt-10 flex flex-col gap-6">
            {/* Social Icons */}
            <motion.div
              className="flex gap-4"
              variants={textVariants}
            >
              {['Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-zinc-400 hover:text-white"
                  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                >
                  {/* Placeholder for icons - replace with SVGs or icon library */}
                  <span className="text-lg md:text-xl p-4">{social}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.button
              className="px-6 py-3 bg-[#a7c24c] text-zinc-900 rounded-full uppercase font-semibold text-sm md:text-base hover:bg-[#8da440] transition-colors duration-300"
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Creative Divider */}
      <motion.div
        className="w-full h-[1px] bg-zinc-600 mt-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
      />
    </div>
  );
};

export default Footer;