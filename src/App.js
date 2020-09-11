import React from "react";
import ReactDOM from "react-dom";
import Splash from "./scenes/Splash";
import About from "./scenes/About";
import Skills from "./scenes/Skills";
import ProjectGallery from "./scenes/ProjectGallery";
import Navbar from "./components/Navbar";

const App = (props) => {
  const [nav, setNav] = React.useState(null);
  const onNav = (nav) => (e) => {
    setNav(nav);
  };
  console.log(nav);
  return (
    <>
      <Splash onNav={onNav} />
      <div className="bg-cello-800">
        <Navbar nav={nav} />
        <div className="max-w-lg mh-auto flex flex-col pt-18 ph-5 lg:ph-0">
          <About onNav={onNav} />
          <Skills onNav={onNav} />
          <ProjectGallery onNav={onNav} />
        </div>
      </div>
    </>
  );
};
const entryPoint = document.getElementById("react-app");
ReactDOM.render(<App />, entryPoint);
