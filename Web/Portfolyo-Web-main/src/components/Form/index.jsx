// eslint-disable-next-line no-unused-vars
import React from "react";
import DC from "../../assets/images/Vector_DC.png";
import FB from "../../assets/images/Vector_FB.png";
import drib from "../../assets/images/Vector_dribbble.png";
import insta from "../../assets/images/Vector_instagram.png";
import behen from "../../assets/images/Vector_Behance.png";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Form() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <hr className="mt-20 border mx-56  border-[#a3a3a3] items-center max-md:mx-16" />
      <div className="flex flex-wrap mt-14 relative  justify-between px-56 max-md:justify-center   ">
        <div className=" h-full flex flex-col mb-5">
          <h1 className="text-[32px] font-semibold max-w-[385px] ">
            Let’s work together
          </h1>
          <p className=" py-10 text-[17px] leading-[27px]  w-[385px] ">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex gap-5  py-1 ">
            <img
              className="object-none"
              width={36}
              height={36}
              src={DC}
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src={FB}
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src={drib}
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src={insta}
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src={behen}
              alt=""
            />
          </div>
        </div>
        <div className=" h-full flex flex-col ">
          <div className="flex flex-col gap-10  min-w-[385px] ">
            <input
              className="p-5 border focus:outline-none bg-[#F3F3F3]"
              type="text"
              placeholder="NAME"
            />
            <input
              className="p-5 border focus:outline-none bg-[#F3F3F3]"
              type="email"
              placeholder="EMAİL"
            />
            <textarea
              className="p-5  h-[231px] text-left border-none focus:outline-none bg-[#F3F3F3]"
              placeholder="Type your message here"
            />
            <button className="p-5 mb-8 bg-black text-white w-[235px] font-semibold ">
              Submit
            </button>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute bottom-10 right-10 transition-opacity duration-500"
        >
          <FaArrowAltCircleUp size={30} />
        </button>
      </div>
    </div>
  );
}

export default Form;
