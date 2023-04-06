import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Error.module.scss";

const Error = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <div className={style.error}>
      <h1 className={style.ntfndh1}> 404 | Page Not Found</h1>
      <button className={style.gohome}>
        <Link to="/">Go To Home</Link>
      </button>
    </div>
  );
};

export default Error;
