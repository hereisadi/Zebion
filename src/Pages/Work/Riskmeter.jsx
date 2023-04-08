import React from "react";
import style from "./Riskmeter.module.scss";
const Riskmeter = () => {
  return (
    <div className={style.riskmain}>
      <div className={style.hding}>
        <h1>Kaziranga National Park</h1>
      </div>
      <div className={style.imhfit}>
        <img src="./images/mll.webp" alt="" />
      </div>

      <div className={style.status}>
        <h1>STATUS: UNDER CONTROL</h1>
      </div>
    </div>
  );
};

export default Riskmeter;
