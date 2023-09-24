import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './media';
const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["React Frontend Developer", "Flutter Developer", "Python Developer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kapil Kumar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Hi, I am a final year student at the Indian Institute of Information Technology, Una Himachal Pradesh.
I am a highly motivated and dedicated Flutter Developer with internship experience at Litter Leagues Live & Shooratech Innovates Pvt Ltd. Throughout my career, I have honed my skills in mobile app development using Flutter, creating seamless and user-friendly interfaces. 
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
