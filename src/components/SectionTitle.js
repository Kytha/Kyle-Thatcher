import React from "react";

const SectionTitle = ({ title, onScreen }) => {
  return (
    <h1
      className={`animated-outline ${
        onScreen ? "active " : " "
      }font-3xl ai-center jc-center pv-4 ph-12 font-2xl font-weight-bold inline-flex mb-13 mh-auto text-center`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
