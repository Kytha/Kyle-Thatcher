import React from "react";
import promo from "../public/img/scribe-promo.jpg";
export default function ProjectCard() {
  return (
    <div className="mb-2">
      <img className="object-cover object-none w-full block" src={promo}></img>
    </div>
  );
}
