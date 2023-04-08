import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link to="/">
        {" "}
        <h1>ZEBION</h1>
      </Link>
    </footer>
  );
};

export default Footer;
