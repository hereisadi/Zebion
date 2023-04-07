import React from "react";
import { Link } from "react-router-dom";
import style from "./Work.module.scss";
import { ramsardata } from "../../Components/Data/Dataset";
const Ramsar = () => {
  return (
    <div className={style.ramsars}>
      <div className={style.park}>
        <h1>Ramsar Sites</h1>

        <div className={style.displayallpark}>
          {ramsardata.map((item) => {
            return (
              <div key={item.id} className={style.ntionprk}>
                <ul>
                  <Link to={`/ramsar sites/${item.id}`}>
                    {" "}
                    <li>{item.title}</li>
                  </Link>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ramsar;
