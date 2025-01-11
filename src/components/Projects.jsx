import React from "react";
import CustomHeading from "../common/CustomHeading";
import { CARDS_LIST } from "../utils/helper";
const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-cover bg-center bg-no-repeat h-[902px] max-xl:h-full bg-whiteImg relative z-40"
    >
      <img
        src="/assets/images/png/services-right-layer.png"
        alt="layer"
        className=" absolute -top-[38%] left-0 z-0"
      />
      <div className="container pt-24 max-xl:py-32">
        <div className="max-w-[540px] mx-auto relative max-sm:max-w-[320px]">
          <img
            src="/assets/images/png/black-border.png"
            alt="border"
            className=" absolute -top-3 left-[15%] max-xl:-top-12 max-md:-top-8 max-sm:max-w-[261px] max-sm:-top-6"
          />
          <CustomHeading
            headingText="Projects"
            headingClass="!text-dark-black"
          />
        </div>
        <p className="text-center max-w-[532px] mx-auto text-dark-black text-base leading-6 font-normal pt-6 max-xl:pt-16 max-sm:pt-10 ">
          Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
          egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna
          id nisl quis vestibulum rhoncus.
        </p>
        <div className="flex max-w-[1140px] pt-[53px] gap-y-6 max-lg:gap-6 w-full max-xl:justify-center mx-auto flex-wrap">
          {CARDS_LIST.map((item, index) => (
            <div
              key={index}
              className={`w-3/12 flex max-xl:w-4/12 max-md:w-6/12 max-xl:justify-center max-xl:flex  `}
            >
              <div
                className={`max-w-[273px] hover:scale-125 hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center  ${
                  index === 0 ? "bg-sky-blue" : ""
                }`}
              >
                <img
                  className={` w-full rounded-lg ${
                    index === 0 ? "max-w-[174px]" : "max-w-[273px]"
                  }`}
                  src={item}
                  alt={item}
                />
                <div className="absolute min-h-[47px] flex justify-center items-center bg-gray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]">
                  <p className="text-white text-xl leading-[21px] font-bold">
                    Nubbies
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center ">
          <button className="text-black text-sm leading-5 transition-all ease-linear duration-200 hover:bg-black hover:text-white max-w-[119px] mx-auto py-3 border border-solid border-black rounded-full px-8 mt-10">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
