import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./Work.module.scss";
// eslint-disable-next-line import/no-unresolved
import "bootstrap/dist/css/bootstrap.min.css";
import Nationalparks from "./Nationalparks";
import Wildlifesanc from "./Wildlifesanc";
import Ramsar from "./Ramsar";

const Work = () => {
  const [show, setShow] = useState("National Parks");
  const [active, setActive] = useState("National Parks");

  const handleClick = (e) => {
    // console.log(e);
    setActive(e);
  };

  useEffect(() => {
    document.title = "Our Work | Zebion";
  }, []);
  return (
    <>
      <Navbar />
      <div className={style.home}>
        <div className={style.hometop}>
          <h1>We Work for the Upliftment of Biosphere reserves.</h1>
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

        <div className="tab_content">
          {show === "core" && active === "National Parks" && <Nationalparks />}
          {show === "core" && active === "Wildlife Sanctuary" && <Wildlifesanc />}
          {show === "core" && active === "Ramsar Sites" && <Ramsar />}
        </div>
      </div>
    </>
  );
};

export default Work;
