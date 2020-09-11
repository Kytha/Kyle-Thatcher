import React from "react";
import Section from "../components/Section";
import SectionTypography from "../components/SectionTypography";
import TraitCard from "../components/TraitCard";
import { traits } from "../lib/data";
import Chart from "../components/Chart";
import Anime from "@mollycule/react-anime";
import animejs from "animejs";

const About = ({ onNav }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Section
      className="ai-center mt-8"
      title="About Me"
      onNav={() => {
        onNav("about")();
        setTimeout(() => setShow(true), 400);
      }}
      name="about"
    >
      <Anime
        in={show}
        appear
        enter
        mountOnEnter={false}
        unmountOnExit={false}
        onEntering={{
          rotateY: ["180deg", 0],
          opacity: [0, 1],
          duration: 400,
          delay: animejs.stagger(150),
        }}
        duration={500}
      >
        {traits.map((trait, i) => (
          <div
            className="opacity-0 col-lg-3 col-md-6 flex ai-center flex-col mb-13"
            key={i}
          >
            <TraitCard trait={trait.name} iconClass={trait.iconClass} />
          </div>
        ))}
      </Anime>

      <div className="col-lg-6 flex flex-col ai-center">
        <h3 className="font-3xl text-white-500 mb-4">
          <span className="font-5xl text-rose-500 highlight-letter">S</span>
          trengths
        </h3>
        <Chart />
      </div>
      <div className="col-lg-6">
        <SectionTypography>
          I'm a computer engineering student with a passion for software
          development and web technologies. I enjoy creating new things and
          solving problems with elegant code. I believe my quick learning
          abilities and great communication skills would be an asset to any
          developer team!
        </SectionTypography>
        <SectionTypography>
          I'm most experience with frontend development, but also have
          experience and a passion for backend, game design, and machine
          learning.
        </SectionTypography>
      </div>
    </Section>
  );
};

export default About;
