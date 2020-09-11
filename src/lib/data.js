import React from "react";
import athenaPromo from "../../public/img/athena-promo.jpg";
import scribejsPromo from "../../public/img/scribe-promo.jpg";
import anubisPromo from "../../public/img/anubis-promo.jpg";
import aurumPromo from "../../public/img/aurum-promo.jpg";
import preprPromo from "../../public/img/prepr-promo.jpg";

export const traits = [
  { name: "Quick Learner", iconClass: "fas fa-bolt" },
  { name: "Resourceful", iconClass: "fas fa-tools" },
  { name: "Team Player", iconClass: "fas fa-users" },
  { name: "Passionate", iconClass: "fas fa-fire" },
];

export const projects = [
  {
    name: "Athena",
    img: athenaPromo,
    github: "https://github.com/Kytha/athena",
    website: "https://athena-css.com",
    description: "A utility-first CSS framework",
  },
  {
    name: "Aurum",
    img: aurumPromo,
    github: "https://github.com/Kytha/aurum",
    demo: "https://kytha.github.io/aurum",
    description: "Cryptocurrency blockchain demo",
  },
  {
    name: "Prepr Hackathon",
    img: preprPromo,
    github: "https://github.com/Kytha/prepr-labs",
    demo: "https://youtu.be/nLyn6MQfuSg",
    description: "Full stack web project",
  },
  {
    name: "Scribe JS",
    img: scribejsPromo,
    github: "https://github.com/Kytha/scribe-js",
    demo: "https://kytha.github.io/scribe-js-demo",
    description: "A web-based rich text editor",
  },
];

export const canvasParams = {
  particles: {
    number: {
      value: 45,
    },
    color: "#fc5185",
    size: {
      value: 3,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
  },
};
