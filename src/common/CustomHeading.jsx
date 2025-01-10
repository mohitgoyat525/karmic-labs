import React from 'react'

const CustomHeading = ({ headingText,headingClass }) => {
  return (
    <h2 className={`${headingClass} font-light text-white text-center uppercase text-[56px] max-xl:text-3xl max-md:text-2xl relative`}>
      {headingText}
    </h2>
  );
};

export default CustomHeading