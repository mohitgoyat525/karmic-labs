import React from 'react'
import CustomHeading from '../common/CustomHeading';
import { CARDS_LIST } from '../utils/helper';
const Projects = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-[902px] max-lg:h-full bg-whiteImg relative">
      <img
        src="/assets/images/png/services-right-layer.png"
        alt="layer"
        className=" absolute -top-[38%] left-0 z-0"
      />
      <div className="container pt-24 max-xl:pt-32 max-lg:pt-20">
        <div className="max-w-[540px] mx-auto relative">
          <img
            src="/assets/images/png/black-border.png"
            alt="border"
            className=" absolute -top-3 left-[15%] max-xl:-top-12 max-lg:hidden"
          />
          <CustomHeading
            headingText="Projects"
            headingClass="!text-[#040404]"
          />
        </div>
        <p className="text-center max-w-[532px] mx-auto text-[#040404] text-base leading-6 font-normal pt-6 max-xl:pt-10 max-md:pt-5">
          Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
          egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna
          id nisl quis vestibulum rhoncus.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
          {CARDS_LIST.map((obj, i) => (
            <div key={i}>
              <img
                src={obj}
                alt="projectName"
                className="w-full max-w-[273px] transition-all ease-linear duration-200 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center max-lg:pb-20">
          <button className="text-black text-sm leading-5 transition-all ease-linear duration-200 hover:bg-black hover:text-white max-w-[119px] mx-auto py-3 border border-solid border-black rounded-full px-8 mt-10">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects