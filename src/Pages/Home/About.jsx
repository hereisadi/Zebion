/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "./About.module.scss";

const About = () => {
  return (
    <div className={style.about} id="zebion">
      <h1>About Us</h1>
      <h2>
        Welcome to our website dedicated to climate and wildlife conservation! We are a
        group of passionate individuals who strongly believe that the preservation of our
        planet's natural resources is of utmost importance.
        <br />
        <br />
        Our website serves as a platform to raise awareness about the critical issues
        affecting our biosphere reserves. We provide up-to-date information and resources
        on climate change and the impact it has on wildlife and ecosystems around the
        world.
        <br />
        <br />
        We are committed to fostering a community of like-minded individuals who share our
        passion for the environment. We encourage you to join us in our mission to protect
        and conserve our planet's natural resources for future generations. Together, we
        can make a difference and create a sustainable future for all.
      </h2>
    </div>
  );
};

export default About;
