import React from "react";
import CustomHeading from "../common/CustomHeading";
import { SERCVICE_LIST } from "../utils/helper";

const Services = () => {
    return (
      <div id="services" className="relative">
        <img
          src="/assets/images/png/services-section-right-layer.png"
          alt="layer"
          className="absolute right-0 -top-[36%] "
        />
        <div className="container pt-[136px] max-xl:pt-36 max-lg:pt-20 max-md:pt-14 max-sm:pt-10">
          <div className="max-w-[570px] max-sm:max-w-[320px] mx-auto relative">
            <CustomHeading headingText="Services" />
            <img
              src="/assets/images/png/heading-top-bttom-border.png"
              alt="borders"
              className=" absolute -top-3 max-xl:-top-9 left-16 max-sm:left-10 max-lg:-top-9 max-sm:max-w-[261px] max-sm:-top-6"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 rounded-xl">
            {SERCVICE_LIST.map((obj, i) => (
              <div key={i} className="relative z-20 bg-transparent group">
                <div className="absolute size-[74px] rounded-full bg-white border border-solid border-white -top-6 -right-8  max-xl:top-0 max-xl:right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="border border-solid border-transparent transition-all ease-linear z-50 duration-200 relative bg-transparent hover:backdrop-blur-[10px] rounded-xl w-full max-w-[364px] p-5 mx-auto">
                  <img src={obj.icon} alt={obj.title} className="mb-4" />
                  <h3 className="font-spaceGrotesk text-white font-bold text-xl leading-[25.52px] mb-2">
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
