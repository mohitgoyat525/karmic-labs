import React from 'react'
import CustomHeading from '../common/CustomHeading'
import {PROJECTS_LIST} from '../utils/helper'
const UpcomingProjects = () => {
  return (
    <div className="container pt-24 max-xl:pt-20 max-lg:py-14 max-md:py-10 relative z-30">
      <div className="relative max-w-[606px] mx-auto">
        <CustomHeading headingText="Upcoming Projects" />
        <img
          src="/assets/images/png/heading-top-bttom-border.png"
          alt="border"
          className=" absolute -top-3 left-[15%] max-xl:-top-9 max-sm:left-0  pointer-events-none"
        />
      </div>
      <div className="flex items-center gap-7 mt-11  max-xl:flex-wrap max-xl:justify-center">
        {PROJECTS_LIST.map((obj, i) => (
          <div
            key={i}
            className="border border-solid  bg-light-gray border-[#FFFFFF1A] rounded-xl card-shadow p-4  max-w-[264px]"
          >
            <img
              src={obj.cardImg}
              alt="cardImg"
              className="w-full max-w-[231px]"
            />
            <div className="flex items-center mt-4 justify-between">
              <h3 className="text-white text-xl font-medium">{obj.title}</h3>
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
      <button className="border border-solid border-white rounded-[82px] flex items-center justify-center py-3 text-white font-medium leading-5 text-base bg-transparent transition-all ease-linear duration-200 hover:bg-white hover:text-black max-w-[119px] mx-auto mt-12 px-[30px]">
        View All
      </button>
    </div>
  );
}

export default UpcomingProjects