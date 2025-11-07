import React from "react";
import Hero from "../components/Home/Hero";
import Welcomepage from "../components/Home/Welcomepage"
import OurProduct from "../components/Home/OurProduct";
import Ourblog from "../components/Home/Ourblog.tsx";
import CoustmerSays from "../components/Home/CoustmerSays.tsx";
import Feature from "../components/Home/Feature.tsx";
import Certification from "../components/Home/Certification.tsx";
import Footer from "../components/Footer.tsx";



const Home = () => {
  return (
    <div>
      <Hero />
      <Welcomepage/>
      <OurProduct/>
      <Ourblog/>
      <CoustmerSays/>
      <Feature/>
      <Certification/>
      <Footer/>
      
    </div>
  );
};

export default Home;
