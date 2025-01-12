import React from "react";

const CustomHeading = ({ headingText, headingClass }) => {
  return (
    <h2
      className={`${headingClass} font-light text-white text-center uppercase text-custom4xl leading-[60.86px] max-xl:text-custom3xl max-md:text-3xl`}
    >
      {headingText}
    </h2>
  );
};

export default CustomHeading;
