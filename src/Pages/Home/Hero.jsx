import React from "react";
import Typed from "react-typed";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={style.herotop}>
      <div className={style.homestrt}>
        <h1 className={style.herotxt}>ZEBION</h1>

        <h1 className={style.typewiter}>
          <Typed
            className="typewriter-hero"
            style={{ userSelect: "none" }}
            strings={[
              "We're Working on Climate Action Innovation.",
              "“Climate shakes hand with wildlife”",
              "For the Actists and layman.",
              "For the Mother Earth!",
            ]}
            typeSpeed={50}
            backSpeed={20}
            loop
          />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
