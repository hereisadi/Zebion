import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import style from "./Work.module.scss";
// eslint-disable-next-line import/no-unresolved
import "bootstrap/dist/css/bootstrap.min.css";
import Nationalparks from "./Nationalparks";
import Wildlifesanc from "./Wildlifesanc";
import Ramsar from "./Ramsar";
import Footer from "../../Components/Footer/Footer";
import Navbarother from "../../Components/Navbar/Navbarother";
import Temperaturerecords from "./Temperaturerecords";
import Riskmeter from "./Riskmeter";

const Work = () => {
  const [show, setShow] = useState("National Parks");
  const [show1, setShow1] = useState("Risk-o-meter");
  const [show2, setShow2] = useState("Temperature Record");
  const [active, setActive] = useState("National Parks");

  const [active1, setActive1] = useState("Risk-o-meter");

  const [active2, setActive2] = useState("Temperature Record");
  const handleClick = (e) => {
    // console.log(e);
    setActive(e);
    // setActive1(!active1)
    // setActive2(!active2)
    setShow1(!show1);
    setShow2(!show2);
  };

  const handleClick0 = (e) => {
    // console.log(e);
    setActive1(e);
    // setActive(!active)
    // setActive2(!active2)

    setShow(!show);
    setShow2(!show2);
  };

  const handleClick1 = (e) => {
    // console.log(e);
    setActive2(e);
    // setActive(!active)
    // setActive1(!active1)

    setShow1(!show1);
    setShow(!show);
  };

  useEffect(() => {
    document.title = "Our Work | Zebion";
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Navbarother />
      <div className={style.home}>
        <div className={style.hometop}>
          <h1>We Work for the Upliftment of Biosphere reserves and Climate.</h1>
          <h2>
            One Tap Dropdown gives the detailed analysis of every Biosphere reserve from
            the effect of Climate change to general info. For the Climate Activists with
            the layman.
          </h2>
        </div>

        <div className={style.dropdowndiv}>
          <div
            className={` ${show === "core" ? "active-link" : ""}`}
            onClick={() => setShow("core")}
          >
            <DropdownButton id="dropdown-custom-1" title={active} onSelect={handleClick}>
              <Dropdown.Item eventKey="National Parks">National Parks</Dropdown.Item>
              <Dropdown.Item eventKey="Wildlife Sanctuary">
                Wildlife Sanctuary
              </Dropdown.Item>
              <Dropdown.Item eventKey="Ramsar Sites">Ramsar Sites</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div className={style.dropdowndiv}>
          <div
            className={` ${show1 === "core" ? "active-link" : ""}`}
            onClick={() => setShow1("core")}
          >
            <DropdownButton
              id="dropdown-custom-1"
              title={active1}
              onSelect={handleClick0}
            >
              <Dropdown.Item eventKey="Risk-o-meter">Risk-o-meter</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div className={style.dropdowndiv} id={style.lastdrop}>
          <div
            className={` ${show2 === "core" ? "active-link" : ""}`}
            onClick={() => setShow2("core")}
          >
            <DropdownButton
              id="dropdown-custom-1"
              title={active2}
              onSelect={handleClick1}
            >
              <Dropdown.Item eventKey="Temperature Record">
                Temperature Record
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div className="tab_content">
          {show === "core" && active === "National Parks" && <Nationalparks />}
          {show === "core" && active === "Wildlife Sanctuary" && <Wildlifesanc />}
          {show === "core" && active === "Ramsar Sites" && <Ramsar />}
          {show1 === "core" && active1 === "Risk-o-meter" && <Riskmeter />}
          {show2 === "core" && active2 === "Temperature Record" && <Temperaturerecords />}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Work;
