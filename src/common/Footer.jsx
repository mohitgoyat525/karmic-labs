import React from 'react'
import { FOOTER_LIST } from '../utils/helper'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="pt-[172px] max-xl:pt-36 max-lg:pt-32 max-md:pt-24 max-sm:pt-14">
      <a href="/">
        <img
          src="/assets/images/png/footer-logo.png"
          alt="logo"
          className="w-full max-w-[255px] mx-auto"
        />
      </a>
      <div className="flex items-center gap-6 justify-center mt-20 max-lg:mt-14 max-md:mt-10">
        {FOOTER_LIST.map((obj, i) => (
          <div
            key={i}
            className="bg-white flex items-center justify-center rounded-full border border-solid border-white size-[35px]"
          >
            <a href={obj.link} target="_blank">
              <img src={obj.icon} alt="" />
            </a>
          </div>
        ))}
      </div>
      <div className="w-full border border-solid border-white mt-4"></div>
          <p className='text-center font-normal text-base font-spaceGrotesk leading-[28.8px] text-white py-4'>© Karmic labs {year}</p>
    </footer>
  );
}

export default Footer