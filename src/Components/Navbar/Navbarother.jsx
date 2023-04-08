import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbarother = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 768) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeToggle);
  return (
    <nav
      className={toggle ? "navbar1 expanded" : "navbar1"}
      style={{ userSelect: "none" }}
    >
      <Link to="/">
        <img
          className="brand-logo logo"
          // src="https://res.cloudinary.com/dp92qug2f/image/upload/v1680858820/zebion/Screenshot_2023-04-07_142729_akaves.webp"
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1680859081/zebion/Screenshot_2023-04-07_142729-removebg-preview_cl2qco.webp"
          alt=""
        />
      </Link>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <ImCross size={20} /> : <GiHamburgerMenu size={25} />}
      </div>
      <ul className="links-nav">
        <li>
          {" "}
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <a href="/#zebion">ABOUT US</a>
        </li>
        <li>
          <a href="/#motto">MOTTO</a>
        </li>
        <li>
          {" "}
          <NavLink to="/work">WORK</NavLink>
        </li>
        <li>
          <NavLink to="/resource">RESOURCE</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarother;
