import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import style from "./Casestudy.module.scss";
const Casestudy = () => {
  return (
    <>
      <Navbar />
      <div className={style.casestudy}>
        <h1>Case Study of Kaziranga National Park</h1>
        {/* <img src="https://api.mapbox.com/styles/v1/weather/cja1hk6znafpv2sqp1c3z63wb/tiles/8/194/108?access_token=pk.eyJ1Ijoid2VhdGhlciIsImEiOiJjamxncnYwMmYxYXgxM3BzNWEyNHUzbmhhIn0.UqrZwn6qTa6WJwdHjPVUfA" alt="" /> */}
        <div className={style.ulhlder}>
          <ul className={style.kazipoints}>
            <li>
              Climate change has one of the worst impact on Kaziranga National Forest.
            </li>
            <li>
              Kaziranga National Park in Assam, home to the largest-population of the
              one-horned rhinoceros in the world, is releasing more carbon than it is
              absorbing.
            </li>
            <li>
              Every year due to global warming and irregular and heavy rainfall and poor
              managemnt of flood, Kaziranga floods every year making it difficult for
              different species of flora and fauna to flourish.
            </li>
            <li>
              We on the behalf of Team Zebion request Forest and GoI officials to take
              relvant steps to reduce Net Carbon emission and aim carbon free by 2070
              creating hygenic environment for all living beings.
            </li>
          </ul>

          <h2 className={style.headingann}>Weather map of Kaziranga National Forest:</h2>

          <div className={style.mapholder}>
            <div className={style.imgholdermap}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1680861896/kaziranga1_y0nho1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Casestudy;
