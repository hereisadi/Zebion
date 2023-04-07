import React from "react";
import { Link } from "react-router-dom";
import style from "./Work.module.scss";
import { wildlifesancdata } from "../../Components/Data/Dataset";

const Wildlifesanc = () => {
  return (
    <div className={style.park}>
      <h1>Wildlife Sanctuary</h1>

      <div className={style.displayallpark}>
        {wildlifesancdata.map((item) => {
          return (
            <div key={item.id} className={style.ntionprk}>
              <ul>
                <Link to={`/wildlife sancuary/${item.id}`}>
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

export default Wildlifesanc;
