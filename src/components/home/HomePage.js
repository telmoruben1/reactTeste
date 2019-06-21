import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import CardsInformation from "./CardsInformation";
import Footer from "./Footer";
import ManageLoginForms from "../login/ManageLoginForms";


const HomePage = () => (
  <>
    <div style={{minHeight:'80%'}}>
      <ControlledCarousel></ControlledCarousel>
      <ManageLoginForms></ManageLoginForms>
      <CardsInformation></CardsInformation>
    </div> 
  </>
);

export default HomePage;
