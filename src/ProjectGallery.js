import React from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import Anime from "@mollycule/react-anime";
import animejs from "animejs";

const ProjectGallery = ({ onNav }) => {
  const [show, setShow] = React.useState(false);
  const arr = [0, 0, 0, 0];
  return (
    <Section
      title="Project Gallery"
      onNav={() => {
        onNav("projects");
        setTimeout(() => setShow(true), 400);
      }}
      name="projects"
    >
      <div className="row ">
        <Anime
          in={show}
          appear
          enter
          mountOnEnter={false}
          unmountOnExit={false}
          onEntering={{
            translateY: ["20%", 0],
            opacity: [0, 1],
            duration: 400,
            delay: animejs.stagger(150),
          }}
          duration={500}
        >
          {arr.map((e, i) => {
            return (
              <div className="col-lg-6 flex jc-center opacity-0" key={i}>
                <ProjectCard />
              </div>
            );
          })}
        </Anime>
      </div>
    </Section>
  );
};

export default ProjectGallery;
