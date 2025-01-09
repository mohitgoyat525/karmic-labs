import React from 'react'
import CustomHeading from '../common/CustomHeading';
import { KARMIC_LIST } from '../utils/helper';
const Karmic = () => {
  return (
    <div className="container pt-20 max-xl:pt-14 max-lg:pt-10">
      <div className="max-w-[606px] mx-auto relative">
        <img
          src="/assets/images/png/heading-top-bttom-border.png"
          alt="border"
          className=" absolute -top-3 left-[15%] max-lg:hidden max-xl:-top-12"
        />
        <CustomHeading headingText="Karmic" />
      </div>
      <p className="text-white font-normal text-base font-spaceGrotesk text-center pt-9">
        We are builders, innovaters, and believers.
      </p>
      <p className="text-white text-base font-normal max-w-[570px] mx-auto text-center leading-[28.8px]">
        We believe in a future that rests in your hands, and yours alone. The
        future is decentralized, The future is web3.
      </p>
      <div className="flex items-center justify-center mt-10 max-lg:mt-8 max-xl:flex-wrap">
        {KARMIC_LIST.map((obj, i) => (
          <img
            src={obj}
            alt="karmic"
            key={i}
            className="w-full max-w-[369px]"
          />
        ))}
      </div>
    </div>
  );
}

export default Karmic