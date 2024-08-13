import React, { useEffect, useRef, useState } from 'react';
import { useInView } from "framer-motion";




const Eyes = () => {
  const inViewRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [leftEyeAngle, setLeftEyeAngle] = useState(0);
  const [rightEyeAngle, setRightEyeAngle] = useState(0);

  const isInView = useInView(inViewRef);

  useEffect(() => {
    if (isInView) {
      const angleFinder = (ref, mouseX, mouseY) => {
        const eyeRect = ref.current.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;
        const deltaX = mouseX - eyeX;
        const deltaY = mouseY - eyeY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        return angle - 180;
      }


      const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate angle for left eye
        if (leftEyeRef.current) {
          setLeftEyeAngle(angleFinder(leftEyeRef, mouseX, mouseY));
        }

        // Calculate angle for right eye
        if (rightEyeRef.current) {
          setRightEyeAngle(angleFinder(rightEyeRef, mouseX, mouseY));
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isInView]);

  return (
    <div className='w-full h-screen overflow-hidden' ref={inViewRef}>
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className='bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] relative w-full h-full bg-cover bg-center'>
        <div className=' absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] flex gap-10'>
          <div
            data-scroll
            data-scroll-speed="0.09"
            ref={leftEyeRef} className=' flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100'>
            <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${leftEyeAngle}deg)` }} className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] line w-full h-5">
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

          <div

            data-scroll
            data-scroll-speed="0.09"
            ref={rightEyeRef} className=' flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100'>
            <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rightEyeAngle}deg)` }} className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] line w-full h-5">
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
