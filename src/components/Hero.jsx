import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative bg-hero bg-right md:bg-center bg-cover h-[620px] md:h-screen justify-center items-center flex flex-col py-[100px] w-full">
      <Navbar />
      <div className="absolute inset-0 z-20 bg-primary bg-opacity-5 bg-cover"></div>
      <div className="max-w-[900px] mt-8 w-full mx-auto bg-white bg-opacity-50 flex-col items-center flex px-8 py-16">
        <h2 className="text-[27px] text-center md:text-[48px] text-black font-bold font-playFair">
          REVENUE REVOLUTION
        </h2>
        <p className="font-raleway text-[40px] text-center md:text-[65px] font-normal text-accent">
          Digital Marketing
        </p>
        <p className="font-raleway text-[40px] text-center md:text-[65px] font-normal text-accent">
          With Master Resell Rights
        </p>
        <p className="font-raleway text-[30px] text-center md:text-[45px] font-bold italic text-primary">
          your digital marketing business
        </p>
      </div>
    </div>
  );
};

export default Hero;
