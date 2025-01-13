import React from "react";
import CustomHeading from "../common/CustomHeading";
import { VALUE_LIST } from "../utils/helper";

const Values = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="container pt-[156px] max-xl:py-16 max-md:py-14">
        <div className="max-w-[570px] mx-auto relative max-sm:max-w-[320px]">
          <CustomHeading headingText="Values" />
          <img
            src="/assets/images/png/heading-top-bottom-border.png"
            alt="border"
            className="absolute -top-7 left-[15%] max-sm:left-5 max-md:left-[25%] max-md:-top-4 max-md:max-w-[261px] max-sm:-top-6"
          />
        </div>
        <div className="flex pt-[77px] max-lg:pt-14 max-md:pt-10 max-sm:pt-6 max-xl:flex-wrap max-xl:justify-center gap-4">
          {VALUE_LIST.map((obj, i) => (
            <div
              key={i}
              className={`relative z-20 bg-transparent group min-w-[369px] max-sm:min-w-[320px] ${
                i === 0 ? "" :"h-[222px]"
              }`}
            >
              <div className="absolute size-[74px] rounded-full bg-white border border-solid border-white -top-6 -right-8 max-xl:top-0  max-xl:right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="border max-w-[369px] border-solid border-transparent hover:border-off-brown transition-all ease-linear z-50 duration-200 relative bg-transparent hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-[10px] rounded-xl w-full p-5 mx-auto">
                <img src={obj.icon} alt={obj.title} className="mb-[10px]" />
                <h3 className="font-spaceGrotesk text-white font-bold text-xl leading-[25.52px] ">
                  {obj.title}
                </h3>
                <p className="text-white font-normal font-spaceGrotesk text-base max-w-[329px] leading-6 pt-[10px]">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
