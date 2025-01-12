import React from "react";
import CustomHeading from "../common/CustomHeading";
import { CARDS_LIST } from "../utils/helper";
const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-center bg-no-repeat h-[902px] max-xl:h-full lg:bg-whiteImg bg-hero-bg-set max-lg:bg-white relative z-40"
    >
      <div className="relative max-w-[1920px] mx-auto">
        <img
          src="/assets/images/png/services-right-layer.png"
          alt="layer"
          className=" absolute -top-[38%] left-0 z-0"
        />
        <div className="container pt-24 max-xl:py-32 max-lg:py-16 max-md:py-14 max-sm:py-10">
          <div className="max-w-[540px] mx-auto relative max-sm:max-w-[320px] max-md:mt-6">
            <img
              src="/assets/images/png/black-border.png"
              alt="border"
              className=" absolute -top-7 left-[15%] max-md:left-[25%] max-sm:left-9 max-md:-top-4 max-xl:-top-8 max-md:max-w-[261px] max-sm:-top-6"
            />
            <CustomHeading
              headingText="Projects"
              headingClass="!text-dark-black"
            />
          </div>
          <p className="text-center font-spaceGrotesk max-w-[532px] mx-auto text-dark-black text-base leading-6 font-normal pt-6 max-lg:pt-4 ">
            Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
            egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna
            id nisl quis vestibulum rhoncus.
          </p>
          <div className="flex max-w-[1140px] pt-[53px] max-xl:pt-10 max-md:pt-8 max-sm:pt-6 gap-y-6 max-lg:gap-6 w-full max-xl:items-center max-xl:justify-center mx-auto flex-wrap">
            <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {CARDS_LIST.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <div
                    className={`hover:scale-125 max-xl:hover:scale-110 max-md:scale-90 max-sm:h-[156px] hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center ${
                      index === 0 ? "bg-sky-blue" : ""
                    }`}
                  >
                    <img
                      className={`w-full rounded-lg h-[174px] min-w-[273px]`}
                      src={item}
                      alt={`Card ${index}`}
                    />
                    <div className="absolute bottom-[-50%] group-hover:bottom-0 min-h-[47px] flex justify-center items-center bg-gray transition-all duration-300 w-full">
                      <p className="text-white text-xl leading-[21px] font-bold">
                        Nubbies
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button className="text-black text-sm leading-5 flex items-center justify-center transition-all ease-linear duration-200 hover:bg-black hover:text-white w-[119px] mx-auto py-[11.2px] border border-solid border-black rounded-full px-8 mt-10">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
