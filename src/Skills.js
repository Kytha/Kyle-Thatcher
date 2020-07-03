import React from "react";
import SectionTypography from "./SectionTypography";
import WordSphere from "./WordSphere";
import Section from "./Section";
import Anime from "@mollycule/react-anime";

const Skills = ({ onNav }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Section
      title="Skills & Tech"
      className="ai-center"
      onNav={() => {
        onNav("skills");
        setTimeout(() => setShow(true), 400);
      }}
      name="skills"
    >
      <div className="col-lg-6">
        <SectionTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nisi sem, consectetur ac tincidunt sit amet, tempus et lorem.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </SectionTypography>
        <SectionTypography className="text-white-500 word-spacing-loose">
          Tempus ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nisi sem, consectetur ac{" "}
          <a className="text-rose-500 underline">tincidunt</a> sit amet.
        </SectionTypography>
      </div>
      <div className="col-lg-6">
        <Anime
          in={show}
          appear
          enter
          mountOnEnter={false}
          unmountOnExit={false}
          onEntering={{
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
          }}
          delay={300}
        >
          <div className="opacity-0">
            <WordSphere />
          </div>
        </Anime>
      </div>
    </Section>
  );
};

export default Skills;
