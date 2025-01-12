import React from 'react'
import { FOOTER_LIST } from '../utils/helper'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="pt-[100px] max-xl:pt-0">
      <a href="/">
        <img
          src="/assets/images/png/footer-logo.png"
          alt="logo"
          className="w-full max-w-[255px] mx-auto max-md:max-w-[200px]"
        />
      </a>
      <div className="flex items-center gap-6 justify-center mt-20 max-lg:mt-14 max-md:mt-10">
        {FOOTER_LIST.map((obj, i) => (
          <a
            href={obj.link}
            key={i}
            className="bg-white flex items-center justify-center rounded-full border border-solid border-white size-[35px] transition-all ease-linear duration-200 hover:scale-105"
          >
            <img src={obj.icon} alt="icon" />
          </a>
        ))}
      </div>
      <div className="w-full border border-solid border-white mt-4"></div>
      <p className="text-center font-normal text-base font-spaceGrotesk leading-[28.8px] opacity-70 text-white py-4">
        © Karmic labs {year}
      </p>
    </footer>
  );
}

export default Footer