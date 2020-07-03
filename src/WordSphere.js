import React, { useEffect } from "react";
import { words, counts, options, createWordSphere } from "./lib/wordSphere";

const WordSphere = (props) => {
  useEffect(() => {
    const canvas = document.getElementById("word-sphere-canvas");
    createWordSphere(canvas, words, counts, options);
  }, []);
  return (
    <canvas
      id="word-sphere-canvas"
      className="text-white-500 md:mt-0 mt-8"
    ></canvas>
  );
};

export default WordSphere;
