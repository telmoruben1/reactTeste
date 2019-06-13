import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import CardsInformation from "./CardsInformation";
import Footer from "./Footer";


const HomePage = () => (
  <>
    <div style={{minHeight:'80%'}}>
      <ControlledCarousel></ControlledCarousel>
      <CardsInformation></CardsInformation>
    </div> 
    <Footer></Footer>
  </>
);

export default HomePage;
