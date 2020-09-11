import React from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Anime from "@mollycule/react-anime";
import animejs from "animejs";
import { projects } from "../lib/data";

const ProjectGallery = ({ onNav }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Section
      title="Project Gallery"
      onNav={() => {
        onNav("projects")();
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
          {projects.map((project, i) => {
            return (
              <div className="col-lg-6 flex jc-center opacity-0" key={i}>
                <ProjectCard
                  img={project.img}
                  name={project.name}
                  github={project.github}
                  demo={project.demo}
                  website={project.website}
                  description={project.description}
                />
              </div>
            );
          })}
        </Anime>
      </div>
    </Section>
  );
};

export default ProjectGallery;
