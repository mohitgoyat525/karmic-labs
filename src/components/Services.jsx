import React from "react";
import CustomHeading from "../common/CustomHeading";
import { SERVICE_LIST } from "../utils/helper";

const Services = () => {
  return (
    <div id="services" className="relative">
      <img
        src="/assets/images/png/services-section-right-layer.png"
        alt="layer"
        className="absolute right-0 -top-[36%] "
      />
      <div className="container pt-[136px] max-xl:pt-16 max-lg:pt-0 relative z-50">
        <div className="max-w-[570px] max-sm:max-w-[320px] mx-auto relative max-lg:mt-6 ">
          <CustomHeading headingText="Services" />
          <img
            src="/assets/images/png/heading-top-bottom-border.png"
            alt="borders"
            className=" absolute -top-7 left-20 max-xl:left-28 max-md:left-[25%] max-md:-top-4 max-sm:left-10 max-lg:-top-9 max-md:max-w-[261px] max-sm:-top-6"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-4 mt-[77px] max-lg:my-14 max-md:my-10 rounded-xl">
          {SERVICE_LIST.map((obj, i) => (
            <div
              key={i}
              className="group mx-auto transition-all ease-linear z-50 duration-200 relative bg-transparent rounded-xl w-full min-w-[369px] max-xl:min-w-0 max-xl:max-w-[364px]"
            >
              <div className="absolute size-[74px] rounded-full bg-white border border-solid border-white -top-5 -right-7 max-xl:top-0 max-xl:right-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="border p-5 min-h-[276px] max-sm:min-h-[255px] border-solid border-transparent w-full transition-all duration-300 rounded-xl group-hover:bg-white group-hover:border-off-brown group-hover:bg-opacity-10 group-hover:backdrop-blur-[10px]">
                <img
                  src={obj.icon}
                  alt={obj.title}
                  className="mb-5 max-sm:mb-3"
                />
                <h3 className="font-spaceGrotesk text-white font-bold text-xl leading-[25.52px] mb-[6px]">
                  {obj.title}
                </h3>
                <div className="text-white font-normal font-spaceGrotesk text-base max-w-[329px] leading-6">
                  {Array.isArray(obj.description) ? (
                    <ul className="list-disc pl-5">
                      {obj.description.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  ) : (
                    obj.description
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
