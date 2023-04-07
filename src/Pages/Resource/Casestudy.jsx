import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import style from "./Casestudy.module.scss";

// eslint-disable-next-line import/no-unresolved
import "bootstrap/dist/css/bootstrap.min.css";
import April6 from "./April6";
import April5 from "./April5";
import April4 from "./April4";
import April3 from "./April3";
import April2 from "./April2";

const Casestudy = () => {
  useEffect(() => {
    document.title = "Case Study";
  }, []);

  const [show11, setShow11] = useState("06-04-23");

  const [active3, setActive3] = useState("06-04-23");
  const handleClick0 = (e) => {
    // console.log(e);
    setActive3(e);
  };
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
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1680866249/kaziranga2_s8tt6e.webp"
                alt=""
              />
            </div>
          </div>

          <div className={style.last5day}>
            <h2>Last 5 Day Weather Forecast</h2>
          </div>

          <div className={style.dropdowndiv} id={style.dropdowncasestudyhj}>
            <div
              className={` ${show11 === "core" ? "active-link" : ""}`}
              onClick={() => setShow11("core")}
            >
              <DropdownButton
                id="dropdown-custom-1"
                title={active3}
                onSelect={handleClick0}
              >
                <Dropdown.Item eventKey="06-04-23">06-04-23</Dropdown.Item>
                <Dropdown.Item eventKey="05-04-23">05-04-23</Dropdown.Item>
                <Dropdown.Item eventKey="04-04-23">04-04-23</Dropdown.Item>
                <Dropdown.Item eventKey="03-04-23">03-04-23</Dropdown.Item>
                <Dropdown.Item eventKey="02-04-23">02-04-23</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div className="tab_content">
            {show11 === "core" && active3 === "06-04-23" && <April6 />}
            {show11 === "core" && active3 === "05-04-23" && <April5 />}
            {show11 === "core" && active3 === "04-04-23" && <April4 />}
            {show11 === "core" && active3 === "03-04-23" && <April3 />}
            {show11 === "core" && active3 === "02-04-23" && <April2 />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Casestudy;
