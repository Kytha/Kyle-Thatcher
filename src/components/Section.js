import React from "react";
import SectionTitle from "./SectionTitle";
import { Waypoint } from "react-waypoint";

const Section = ({ className, children, title, onNav, name }) => {
  const [onScreen, setOnScreen] = React.useState(false);
  return (
    <Waypoint
      onEnter={() => {
        setOnScreen(true);
        onNav();
      }}
      onLeave={() => {
        setOnScreen(false);
      }}
      topOffset="40%"
      bottomOffset="40%"
    >
      <section className="mt-15 flex flex-col ai-center section relative">
        <a id={name} className="section-anchor"></a>
        <SectionTitle title={title} onScreen={onScreen} />
        <div className={`row ${className} mb-15`}>{children}</div>
      </section>
    </Waypoint>
  );
};

export default Section;
