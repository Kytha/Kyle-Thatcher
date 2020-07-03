import React from "react";
import { useViewport } from "./lib/hooks";
import Particles from "react-particles-js";
import canvasParams from "./config/canvasParams.json";
import { Waypoint } from "react-waypoint";

const Splash = ({ onNav }) => {
  const { height } = useViewport();
  const canvasHeight = height - 56;
  return (
    <Waypoint
      onEnter={() => {
        onNav("splash")();
      }}
      topOffset="40%"
      bottomOffset="40%"
    >
      <div className="relative">
        <div className="title flex jc-center ai-center flex-col">
          <h1 className="text-center font-5xl lg:font-6xl text-white-500 mb-10 ">
            <span className="font-6xl text-rose-500 highlight-letter">K</span>
            yle{" "}
            <span className="text-rose-500 font-6xl highlight-letter">T</span>
            hatcher
          </h1>
          <h3 className=" lg:font-xl text-white-500 text-center font-lg">
            Computer Engineering Student
          </h3>
          <span className="text-center font-3xl text-rose-500">•</span>
          <h3 className="text-center lg:font-xl text-white-500 font-lg">
            Web Developer
          </h3>
        </div>

        <Particles
          className="bg-cello-700 sm:border-b-none border-b-white-500"
          height={canvasHeight}
          params={canvasParams}
        />
      </div>
    </Waypoint>
  );
};

export default Splash;
