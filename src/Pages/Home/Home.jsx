import { useEffect } from "react";
// import style from "./Home.module.scss";
import Hero from "./Hero";
import Navbar from "../../Components/Navbar/Navbar";
import About from "./About";
import Motto from "./Motto";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Motto />
    </>
  );
};

export default Home;
