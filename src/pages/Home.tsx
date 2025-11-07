import Hero from "../components/Home/Hero";
import Welcomepage from "../components/Home/Welcomepage";
import OurProduct from "../components/Home/OurProduct";
import Ourblog from "../components/Home/Ourblog";
import CoustmerSays from "../components/Home/CoustmerSays";
import Feature from "../components/Home/Feature";
import Certification from "../components/Home/Certification";



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
      
    </div>
  );
};

export default Home;
