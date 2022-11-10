import React from "react";
import hero from "../../assets/hero.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row lg:justify-evenly lg:ml-20 items-center home gap-6 pt-12'>
      <div className='hero-image'>
        <img src={hero} alt='' />
      </div>
      <div>
        <h1 className='text-7xl px-5 text-center lg:text-left font-bold leading-normal text-teal-400'>
          I'm MARK
          <br /> <span>Your Fitness Trainer</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
