import React from "react";
import "./AboutHero.css";

function AboutHero() {
  return (
    <div className="aboutContainer">
      <img
        src="media/images/About.png"
        alt="AboutHero"
        width="500"
        height="800"
      ></img>
      <h1>about</h1>
      <p>online platform for stockx</p>
      <button>Signup Now</button>
    </div>
  );
}

export default AboutHero;
