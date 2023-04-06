import { useEffect } from "react";
import style from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return <h1 className={style.home}>This is home</h1>;
};

export default Home;
