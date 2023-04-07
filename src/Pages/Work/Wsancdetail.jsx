import React from "react";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
import { wildlifesancdata } from "../../Components/Data/Dataset";
import style from "./Work.module.scss";
import Navbar from "../../Components/Navbar/Navbar";

const Wsancdetail = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      {wildlifesancdata
        .filter((item) => item.id === id)
        .map((item) => (
          <div className={style.detail} key={item.id}>
            <Helmet>
              <title>{item.title}</title>
            </Helmet>
            <div className={style.detailmain}>
              <h1>{item.title}</h1>
              <ul>
                <li>Located in {item.locn}</li>
                <li>Area of {item.Area}</li>
                <li>
                  <span className={style.bold}>Habitat:</span>
                  <br />
                  <br /> {item.habitat}
                </li>
                <li>
                  <span className={style.bold}>Issues due to Global Warming:</span>
                  <br />
                  <br />
                  {item.issuesfacing}
                </li>
                <li>
                  <span className={style.bold}>Weather:</span>
                  <br />
                  <br />
                  {item.weather}
                </li>
                <li>
                  <span className={style.bold}>
                    Endangered animals due to Climate irregularity:
                  </span>
                  <br />
                  <br />
                  {item.endangered}
                </li>
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};

export default Wsancdetail;
