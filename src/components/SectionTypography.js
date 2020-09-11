import React from "react";

const SectionTypography = ({ children }) => {
  return (
    <p className="text-white-500 word-spacing-loose mb-3 highlight-first-letter text-center md:text-left">
      {children}
    </p>
  );
};

export default SectionTypography;
