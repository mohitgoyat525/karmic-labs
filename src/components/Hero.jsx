import React from 'react'
import Header from '../common/Header'
import { HeroArrow, NextArrow } from '../utils/icons';

const Hero = () => {
  return (
    <div className="relative">
      <div className="max-w-[1920px] relative mx-auto">
        <img
          src="/assets/images/png/hero-top-layer.png"
          alt="layer"
          className=" absolute top-0 left-0 z-0"
        />
        <div className="container relative z-20">
          <Header />
        </div>
      </div>
      <div className="min-h-[726px] flex justify-center relative items-center max-lg:py-14 max-md:py-10 bg-hero-image bg-hero-set max-xl:!bg-cover bg-no-repeat lg:bg-heroLayer max-lg:bg-off-gray max-lg:mt-9 max-lg:h-full">
        <div className="container">
          <div className="flex items-center max-lg:flex-wrap max-xl:!justify-center gap-[154px] max-xl:gap-20 max-lg:gap-10">
            <div className="min-w-[570px] max-xl:min-w-[540px] max-lg:min-w-full">
              
              <h1 className="text-white text-custom5xl max-lg:text-center max-w-[570px] max-lg:max-w-none max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-light leading-[69.56px] uppercase">
                We are believers decentralization and
                <span className="relative ms-1">
                  <img
                    className="absolute -top-3 right-0"
                    src="/assets/images/png/hero-border-top.png"
                    alt="border-top"
                  />
                  Web3.
                  <img
                    className="absolute -bottom-1 right-0"
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
                <button className="hover:bg-off-gray hover:text-white flex items-center gap-3 leading-5 transition-all justify-center w-[154px] ease-linear duration-200 bg-white text-dark-black py-[11.2px] font-bold border border-solid border-white rounded-full px-5">
                  Get Started <NextArrow />
                </button>
                <button className="text-white font-light leading-5 transition-all ease-linear duration-200 w-[138px] hover:bg-white hover:text-black py-[11.2px] border border-solid border-white rounded-full px-4 max-sm:px-3">
                  Read More
                </button>
              </div>
            </div>
            <div className="min-w-[398px] max-xl:min-w-[374px] max-lg:min-w-full">
              <img
                src="/assets/images/webp/nubbies-img.webp"
                alt="nubbies-img"
                className="w-full max-w-[398px] max-lg:mx-auto h-[446.47px] max-lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="#home"
        className="absolute left-1/2 -translate-x-1/2 bottom-[10%] max-lg:hidden"
      >
        <HeroArrow />
      </a>
    </div>
  );
}

export default Hero