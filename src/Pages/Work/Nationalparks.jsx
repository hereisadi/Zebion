import React from "react";
import { Link } from "react-router-dom";
import style from "./Work.module.scss";
import { nationalpark } from "../../Components/Data/Dataset";
const Nationalparks = () => {
  return (
    <div className={style.park}>
      <h1>National Parks</h1>

      <div className={style.displayallpark}>
        {nationalpark.map((item) => {
          return (
            <div key={item.id} className={style.ntionprk}>
              <ul>
                <Link to={`/nationalpark/${item.id}`}>
                  {" "}
                  <li>{item.title}</li>
                </Link>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nationalparks;
