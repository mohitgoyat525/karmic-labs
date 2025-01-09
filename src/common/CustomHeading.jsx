import React from 'react'

const CustomHeading = ({ headingText, borderTop, imgClass, headingClass }) => {
  return (
    <h2 className={`${headingClass} font-light text-white text-center uppercase text-[56px] max-xl:text-3xl max-md:text-2xl relative`}>
      {headingText}
      <span className="relative">
        <img src={borderTop} alt="border" className={`${imgClass} absolute`}  />
      </span>
    </h2>
  );
};

export default CustomHeading