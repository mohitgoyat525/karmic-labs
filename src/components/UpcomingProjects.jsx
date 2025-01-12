import React from "react";
import CustomHeading from "../common/CustomHeading";
import { PROJECTS_LIST } from "../utils/helper";
const UpcomingProjects = () => {
  return (
    <div id="home" className="relative max-w-[1920px] mx-auto">
      <div className="container pt-24 max-xl:pt-20 max-lg:py-14 max-sm:py-10 relative z-30">
        <div className="relative max-w-[606px] mx-auto max-sm:max-w-[320px] max-lg:mt-6">
          <CustomHeading headingText="Upcoming Projects" />
          <img
            src="/assets/images/png/heading-top-bottom-border.png"
            alt="border"
            className=" absolute -top-7 left-[15%] max-sm:left-5 max-md:max-w-[261px] max-md:left-[25%] max-md:-top-4 pointer-events-none max-sm:-top-6"
          />
        </div>
        <div className="flex items-center gap-7 mt-11 max-xl:flex-wrap max-xl:justify-center">
          {PROJECTS_LIST.map((obj, i) => (
            <div
              key={i}
              className="border border-solid bg-light-gray border-off-brown rounded-xl card-shadow p-4 max-w-[264px]"
            >
              <img
                src={obj.cardImg}
                alt="cardImg"
                className="w-full max-w-[231px]"
              />
              <div className="flex items-center mt-4 justify-between">
                <h3 className="text-white text-xl font-medium leading-6">
                  {obj.title}
                </h3>
                <p className="text-white text-base font-bold leading-[19.44px]">
                  {obj.time}
                </p>
              </div>
              <p className="text-white font-spaceGrotesk text-base font-light leading-[28.44px]">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
        <button className="border border-solid border-white rounded-[82px] flex items-center justify-center py-[11.2px] text-white font-medium leading-5 text-base bg-transparent transition-all ease-linear duration-200 hover:bg-white hover:text-black w-[119px] mx-auto mt-12 px-[30px]">
          View All
        </button>
      </div>
    </div>
  );
};

export default UpcomingProjects;
