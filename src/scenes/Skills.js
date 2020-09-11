import React from "react";
import SectionTypography from "../components/SectionTypography";
import WordSphere from "../components/WordSphere";
import Section from "../components/Section";
import Anime from "@mollycule/react-anime";

const Skills = ({ onNav }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Section
      title="Skills & Tech"
      className="ai-center"
      onNav={() => {
        onNav("skills")();
        setTimeout(() => setShow(true), 400);
      }}
      name="skills"
    >
      <div className="col-lg-6">
        <SectionTypography>
          I'm well versed in a wide variety of languages, libraries, and
          frameworks for modern web applications. Specifically, I have
          experience creating applications using WAMP, MERN, and Django stacks
          in combination with state management libraries such as Redux and
          Apollo.
        </SectionTypography>
        <SectionTypography className="text-white-500 word-spacing-loose">
          If you'd like to see more of my skills, check out my{" "}
          <a
            className="text-rose-500 underline"
            href="https://github.com/Kytha"
          >
            github
          </a>{" "}
          to see all the projects I am working on :)
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
