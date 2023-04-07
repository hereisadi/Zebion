import { useEffect } from "react";
// import style from "./Home.module.scss";
import Hero from "./Hero";
import Navbar from "../../Components/Navbar/Navbar";
import About from "./About";
import Motto from "./Motto";
import Footer from "../../Components/Footer/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
