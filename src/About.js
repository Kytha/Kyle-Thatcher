import React from "react";
import Section from "./Section";
import SectionTypography from "./SectionTypography";
import TraitCard from "./TraitCard";
import { traits } from "./config/traits";
import Chart from "./Chart";
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nisi sem, consectetur ac tincidunt sit amet, tempus et lorem.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </SectionTypography>
        <SectionTypography>
          Tempus ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nisi sem, consectetur ac{" "}
          <a className="text-rose-500 underline">tincidunt</a> sit amet.
        </SectionTypography>
      </div>
    </Section>
  );
};

export default About;
