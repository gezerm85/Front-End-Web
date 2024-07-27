// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from "react-icons/fa6";
import image from "../../assets/images/Image.png";
import placeholder from "../../assets/images/placeholder.png";
import placeholder2 from "../../assets/images/placeholder2.png";
import placeholder3 from "../../assets/images/placeholder3.png";
import google from "../../assets/images/Google.png";
import apple from "../../assets/images/Apple.png";
import Awwwards from "../../assets/images/Awwwards.png";
import Dribbble from "../../assets/images/Dribbble.png";
import Behance from "../../assets/images/Behance.png";
import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";
import category4 from "../../assets/images/category4.png";
import category5 from "../../assets/images/category5.png";
import category6 from "../../assets/images/category6.png";
import Author1 from "../../assets/images/Author-images.png";
import Author2 from "../../assets/images/Author-images2.png";
import Author3 from "../../assets/images/Author-images3.png";

function Home() {
  return (
    <div className=" relative">
      <div className="flex items-center justify-center p-20 flex-wrap  ">
        <div className="max-h-[317px] max-w-[557px] flex flex-col max-md:text-center">
          <h3 className="text-xl font-semibold ">Branding | Image making</h3>
          <h1 className=" max-md:text-[65px]  md:text-[80px] font-semibold">
            My awesome portfolio
          </h1>
          <h4 className="text-[20px]">
            And I made it myself! Yes. In Figma with Anima
          </h4>
        </div>
        <div className=" max-sm:mt-28">
          <img width={495} height={424} src={image} alt="" />
        </div>
      </div>

      <div className=" my-28 max-md:my-0 flex items-center justify-center  gap-24 flex-wrap ">
        <div className=" h-[300px] w-64 flex flex-col items-center justify-between ">
          <img width={130} height={130} src={placeholder} alt="" />
          <h3 className="font-semibold text-[27px]">Product design</h3>
          <p className="text-[17px] text-center ">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
        <div className=" h-[300px] w-64 flex flex-col items-center justify-between ">
          <img width={130} height={130} src={placeholder2} alt="" />
          <h3 className="font-semibold text-[27px]">Art Drection</h3>
          <p className="text-[17px] text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
        <div className="h-[300px] w-64 flex flex-col items-center justify-between">
          <img width={130} height={130} src={placeholder3} alt="" />
          <h3 className="font-semibold text-[27px]">Visual design</h3>
          <p className="text-[17px] text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
      </div>
      <div className=" px-56 max-md:px-28 mt-10  ">
        <div className="flex items-center py-10  justify-center min-h-[150px] gap-32 border-t border-b border-[#a3a3a3] flex-wrap max-md:gap-12    ">
          <img width={53} height={34} src={Behance} alt="" />
          <img width={103} height={34} src={google} alt="" />
          <img width={38} height={46} src={apple} alt="" />
          <img width={139} height={34} src={Dribbble} alt="" />
          <img width={213} height={34} src={Awwwards} alt="" />
        </div>
      </div>
      <div className="">
        <h1 className="text-center font-semibold text-[32px] mt-8 mb-14">
          My latest work
        </h1>
        <div>
          <div className="flex items-center justify-center gap-16 flex-wrap ">
            <div className="h-[407px] flex flex-col justify-between">
              <img width={315} height={315} src={category1} alt="" />
              <h1 className="text-xl font-semibold">Free Bird</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Lynyrd Skynyrd</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img width={315} height={315} src={category2} alt="" />
              <h1 className="text-xl font-semibold">Purple Haze</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Jimi Hendrix</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img width={315} height={315} src={category3} alt="" />
              <h1 className="text-xl font-semibold">You Really Got Me</h1>
              <p className="text-[17px] text-[#2d2d2d] ">The Kinks</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-16 mt-16 flex-wrap">
            <div className="h-[407px] flex flex-col justify-between">
              <img width={315} height={315} src={category4} alt="" />
              <h1 className="text-xl font-semibold">American Girl</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Tom Petty</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img width={315} height={315} src={category5} alt="" />
              <h1 className="text-xl font-semibold">Who Lotta Love</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Led Zeppelin</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img width={315} height={315} src={category6} alt="" />
              <h1 className="text-xl font-semibold">Under Pressure</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Queen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center font-semibold text-[32px] mb-16">Clients</h1>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          <div className="w-[315px] h-[344px] bg-[#FFFCF5] border-[2px] border-[#FFD285] flex flex-col  justify-between p-8  ">
            <p className="  font-semibold text-xl leading-[30px]">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="flex items-center text-[#2d2d2d]">
              <img
                className="pb-5"
                width={50}
                height={50}
                src={Author1}
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex pl-4 hover:text-yellow-300">
                  <FaStar size={20} /> <FaStar size={20} /> <FaStar size={20} />
                  <FaStar size={20} /> <FaStar size={20} />
                </div>
                <h4 className="text-xl pl-4 leading-[27px]">
                  Gemma Nolen,
                  <br />
                  Google
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[344px] bg-[#FFFCF5] border-[2px] border-[#FFD285] flex flex-col  justify-between p-8 ">
            <p className="leading-[30px]  font-semibold text-xl">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="flex items-center text-[#2d2d2d]">
              <img
                className="pb-5"
                width={50}
                height={50}
                src={Author2}
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex pl-4 hover:text-yellow-300">
                  <FaStar size={20} /> <FaStar size={20} /> <FaStar size={20} />
                  <FaStar size={20} /> <FaStar size={20} />
                </div>
                <h4 className="text-xl pl-4 leading-[27px]">
                  Gemma Nolen,
                  <br />
                  Google
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[344px] bg-[#FFFCF5] border-[2px] border-[#FFD285] flex flex-col  justify-between p-8 ">
            <p className="leading-[30px]  font-semibold text-xl">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="flex items-center text-[#2d2d2d]">
              <img
                className="pb-5"
                width={50}
                height={50}
                src={Author3}
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex pl-4 hover:text-yellow-300">
                  <FaStar size={20} /> <FaStar size={20} /> <FaStar size={20} />
                  <FaStar size={20} /> <FaStar size={20} />
                </div>
                <h4 className="text-xl pl-4 leading-[27px]">
                  Gemma Nolen,
                  <br />
                  Google
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
