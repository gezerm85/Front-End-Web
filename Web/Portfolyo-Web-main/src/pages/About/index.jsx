// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from "../../assets/images/Profile.png";

function About() {
  return (
    <div className=" flex flex-col justify-center ">
      <div className="flex items-center justify-center bg-[#F9E6F0] min-h-[537px]  gap-[70px] max-md:flex-col max-md:w-full max-md:px-14 max-md:items-start ">
        <div className="  flex flex-col max-w-[195px]   ">
          <img width={195} height={195} src={profile} alt="" />
          <h1 className="mt-5 font-bold text-[17px]">Pablo Designero</h1>
          <h4 className="text-[17px]">Designer & Unicorn Trainer</h4>
        </div>
        <div className=" max-w-[515px]  ">
          <p className=" leading-7 text-[17px]">
            <span className="font-bold text-[17px]">Bio:</span>
            <br />
            Father of 3 humans, 5 unicorns & 2 dogs,I design since I can
            remember it. I often get asked where I get my inspiration from: in
            everyday’s lil’ details. And sometimes in leftover food I find in my
            beard.
          </p>
        </div>
      </div>
      <div className="h-[640px] flex flex-col items-center justify-center  ">
        <div className="flex flex-col max-w-[880px] max-md:px-14 max-md:mt-28">
          <h1 className="text-2xl font-medium mb-[60px] ">
            When I was 5, I got adbucted by a unicorn family. When they returned
            me to earth, I joined a designer school. But, fo’ real, what I
            learned with my kidnaptive family really gave an edge to my creative
            language.
          </h1>
          <span className=" block  text-[#f9e6f0] bg-[#009379] font-semibold text-[16px] ">
            Being a human is way too complicated. Time to be a unicorn.
          </span>
          <p className="leading-[26px] text-[16px]">
            Try it and you’ll see. Then your Figma files are just gonna fly in
            color, glitter, interactions and autolayout
          </p>
          <span className=" block  text-[#f9e6f0] bg-[#009379] font-semibold text-[16px] ">
            Also, grow a beard. Check my bio if that is not clear.
          </span>
          <p className=" leading-[26px] text-[16px]  ">
            Available for projects, from Monday to Tuesday, mainy between 14 and
            16. (Unless there is a unicorn race on TV - DUH -in that case, come
            back another day). Projects include, RocknRoll covers, furniture
            refurbishing, Unicorn potty training and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
