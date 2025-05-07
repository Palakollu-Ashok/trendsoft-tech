import React from "react";
import Home from "../Home/Home";
import About from "../Home/About";

import OurStrengths from "../Home/OurStrengths";
import Clients from "../Home/Clients";

import ContactUs from "../Home/ContactUs";
import Certificates from "../Home/Certificates";
import Card from "../Home/Card";
import AccessibilityJourney from "../Home/AccessibilityJourney";
// import Slider from "../Home/Slider";
function Homepage() {
  return (
    <>
      <Home />
      <About />

      <Card />
      <OurStrengths />
      {/* <Carousel /> */}
      {/* <Slider /> */}
      <AccessibilityJourney />
      <Clients />
      <Certificates />

      <ContactUs />
    </>
  );
}

export default Homepage;
