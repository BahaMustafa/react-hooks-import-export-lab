

import React from "react";
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am passionate about web development and always eager to learn more.</p>
      <img src={image} alt="A representation of me" />
    </div>
  );
}

export default About;
