import React from 'react'
import CustomHeading from '../common/CustomHeading';
import { KARMIC_LIST } from '../utils/helper';
const Karmic = () => {
  return (
    <div className="relative">
      <img
        src="/assets/images/png/services-section-right-layer.png"
        alt="layer"
        className="absolute top-[-50%] right-0"
      />
      <div
        id="about"
        className="container pt-20 max-xl:pt-14 max-lg:pt-14 relative z-30"
      >
        <div className="max-w-[606px] max-sm:max-w-[320px] mx-auto relative max-lg:mt-6">
          <img
            src="/assets/images/png/heading-top-bottom-border.png"
            alt="border"
            className=" absolute -top-7 left-[15%] max-sm:left-5 max-md:left-[25%] max-md:-top-4 max-md:max-w-[261px] max-sm:-top-6"
          />
          <CustomHeading headingText="Who is karmic?" />
        </div>
        <p className="text-white font-normal text-base font-spaceGrotesk text-center pt-5 ">
          We are builders, innovaters, and believers.
        </p>
        <p className="text-white text-base font-normal font-spaceGrotesk max-w-[570px] mx-auto text-center leading-[28.8px]">
          We believe in a future that rests in your hands, and yours alone. The
          future is decentralized, The future is web3.
        </p>
        <div className="flex items-center justify-center mt-10 max-lg:mt-8 max-xl:flex-wrap">
          {KARMIC_LIST.map((obj, i) => (
            <img
              src={obj}
              alt="karmic"
              key={i}
              className="w-full max-w-[369px] pointer-events-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Karmic