import React from "react";

const TraitCard = ({ trait, iconClass }) => {
  return (
    <>
      <div className="h-9 w-9 relative text-center inline-block mb-8">
        <div className="hexagon bg-cello-600 shadow-lg">
          <i className={`${iconClass} font-5xl text-white-500`}></i>
        </div>
      </div>
      <h3 className="text-white-500 font-lg font-weight-semi-bold">{trait}</h3>
    </>
  );
};

export default TraitCard;
