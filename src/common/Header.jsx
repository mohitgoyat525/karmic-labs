import React, { useEffect, useState } from "react";
import { NAVBAR_LIST } from "../utils/helper";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <nav className="flex items-center justify-between">
      <a href="/">
        <img
          src="/assets/images/png/logo.png"
          alt="logo"
          className="w-full max-w-[156px] max-xl:max-w-[160px] pt-[11px]"
        />
      </a>

      <div
        className={`flex items-center gap-4 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-black max-lg:z-[90] transition-transform duration-300 ${
          isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"
        }`}
      >
        <ul className="flex items-center gap-9 max-lg:flex-col max-lg:gap-6">
          {NAVBAR_LIST.map((obj, i) => (
            <li key={i} className={`${i === 6 ? "hidden" : ""}`}>
              <a
                href={obj.link}
                onClick={handler}
                className="transition-all ease-linear duration-300 hover:scale-105 text-base font-medium text-white"
              >
                {obj.name}
              </a>
            </li>
          ))}
          <li>
            <button onClick={handler} className="lg:hidden min-w-[172px] py-3 rounded-full border border-solid border-transparent bg-white hover:border-white text-base font-bold text-dark-black transition-all ease-linear duration-200 hover:bg-black hover:text-white">
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
      <button className="max-lg:hidden min-w-[170px] py-3 rounded-full border border-solid border-transparent bg-white hover:border-white text-base font-bold text-dark-black transition-all ease-linear duration-200 hover:bg-black hover:text-white">
        Connect Wallet
      </button>
      <button
        onClick={handler}
        className="flex flex-col justify-center items-center z-[100] gap-1 lg:hidden relative size-6"
      >
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </button>
    </nav>
  );
};

export default Header;
