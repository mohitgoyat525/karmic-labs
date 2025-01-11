import React from 'react'
import Header from '../common/Header'
import { HeroArrow, NextArrow } from '../utils/icons';

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/assets/images/png/hero-top-layer.png"
        alt="layer"
        className=" absolute top-0 left-0 z-0"
      />
      <a
        href="#home"
        className="absolute left-1/2 -translate-x-1/2 bottom-[10%] max-lg:hidden"
      >
        <HeroArrow />
      </a>
      <div className="container relative z-20">
        <Header />
      </div>
      <div className="bg-cover bg-no-repeat bg-center lg:bg-HeroLayer max-lg:bg-[#3B3B3B] max-lg:my-9 h-[726px] max-lg:h-full">
        <div className="container">
          <div
            className="flex items-center max-lg:flex-wrap max-md:pt-16 max-xl:!justify-center pt-32 max-xl:py-24 max-lg:py-16
           max-md:py-10 max-sm:py-6  gap-[158px] max-xl:gap-32 max-lg:gap-24 max-md:gap-16 max-sm:gap-10"
          >
            <div className="w-6/12 max-lg:w-full">
              <h1 className="text-white text-custom5xl max-lg:text-center max-w-[570px] max-lg:max-w-none max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-light leading-[69.56px] uppercase">
                We are believers decentralization and
                <span className="relative">
                  <img
                    className="absolute -top-2 right-0"
                    src="/assets/images/png/hero-border-top.png"
                    alt="border-top"
                  />
                  Web3.
                  <img
                    className="absolute bottom-0 right-0"
                    src="/assets/images/png/hero-border-bottom.png"
                    alt="border-bottom"
                  />
                </span>
              </h1>
              <p className="font-normal text-base max-lg:text-center text-white max-w-[570px] max-lg:max-w-none leading-[28.8px] font-spaceGrotesk">
                Vulputate tristique habitant neque, accumsan. Vitae ultrices
                nulla erat nibh aliquam, quis tempus volutpat arcu. Leo
                convallis luctus dis malesuada turpis non consequat ac.
              </p>
              <div className="flex items-center gap-8 mt-10 max-md:mt-5 max-lg:justify-center">
                <button className="font-bold flex items-center gap-3 leading-5 transition-all justify-center w-[154px] ease-linear duration-200 bg-white  text-black  py-3 border border-solid border-white rounded-full px-5">
                  Get Started <NextArrow />
                </button>
                <button className="text-white font-light leading-5 transition-all ease-linear duration-200 min-w-[138px] hover:bg-white hover:text-black py-3 border border-solid border-white rounded-full px-8 max-sm:px-3">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-6/12 max-lg:w-full">
              <img
                src="/assets/images/png/nubbies-img.webp"
                alt="nubbies-img"
                className="w-full max-w-[398px] max-lg:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero