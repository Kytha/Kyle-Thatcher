import React from "react";

export default function ProjectCard({
  img,
  name,
  github,
  demo,
  website,
  description,
}) {
  return (
    <div className="mb-2 project">
      <div className="overlay bg-cello-500 flex jc-center ai-center flex-col">
        <h4 className="font-4xl font-weight-bold text-white-500">{name}</h4>
        <h6 className="mb-9 text-turquoise-500">{description}</h6>
        <div>
          <a
            href={github}
            className="border-rose-500 rounded-xl ph-6 pv-3 text-rose-500"
          >
            GITHUB
          </a>
          {demo && (
            <a
              href={demo}
              className="border-rose-500 rounded-xl ph-6 pv-3 text-rose-500 ml-6"
            >
              DEMO
            </a>
          )}
          {website && (
            <a
              href={website}
              className="border-rose-500 rounded-xl ph-6 pv-3 text-rose-500 ml-6"
            >
              WEBSITE
            </a>
          )}
        </div>
      </div>
      <img className="object-cover w-full block" src={img} alt="project"></img>
    </div>
  );
}
