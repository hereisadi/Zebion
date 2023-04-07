import React from "react";
import style from "./Motto.module.scss";
import { mottodb } from "../../Components/Data/Mottodata";
const Motto = () => {
  return (
    <div className={style.motto} id="motto">
      <h1>Motto</h1>

      <div className={style.mottocont}>
        {mottodb.map((item) => {
          return (
            <div className={style.indicard} key={item.id}>
              <div className={style.imgholder}>
                <img src={item.img} alt="" />
              </div>

              <div className={style.mottodic}>
                <h3>{item.cont}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Motto;
