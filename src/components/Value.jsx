import React from 'react'
import CustomHeading from '../common/CustomHeading'
import { VALUE_LIST } from '../utils/helper';

const Value = () => {
  return (
    <div className="container pt-[156px] max-xl:py-32 max-lg:py-24 max-md:py-10">
      <div className="max-w-[570px] mx-auto relative max-sm:max-w-[320px]">
        <CustomHeading headingText="Values" />
        <img
          src="/assets/images/png/heading-top-bttom-border.png"
          alt="border"
          className="absolute -top-3 left-[15%] max-xl:-top-12 max-md:-top-9 max-sm:max-w-[261px] max-sm:-top-6"
        />
      </div>
      <div className="flex pt-20 max-xl:flex-wrap max-xl:justify-center">
        {VALUE_LIST.map((obj, i) => (
          <div key={i} className="relative z-20 bg-transparent group">
            <div className="absolute size-[74px] rounded-full bg-white border border-solid border-white -top-6 -right-8 max-xl:top-0  max-xl:right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="border border-solid border-transparent transition-all ease-linear z-50 duration-200 relative bg-transparent hover:backdrop-blur-[10px] rounded-xl w-full max-w-[364px] p-5 mx-auto">
              <img src={obj.icon} alt={obj.title} className="mb-4" />
              <h3 className="font-spaceGrotesk text-white font-bold text-xl leading-[25.52px] ">
                {obj.title}
              </h3>
              <p className="text-white font-normal font-spaceGrotesk text-base max-w-[329px] leading-6 pt-2">
                {obj.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Value