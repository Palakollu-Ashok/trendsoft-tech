import React from "react";
import Career from "../Career/Career";
import AboutCareer from "../Career/AboutCareer";
import Banner from "../Common/Banner";
import img from "../../assets/Home/Home1.jpg";
import SolutionsBanner from "../Common/SolutionsBanner";
export default function CareerPage() {
  return (
    <>
      <SolutionsBanner
        title="Careers"
        desc="Looking for bright minds to join us"
        BgImg={img}
      />
      <AboutCareer />
      <Career />
    </>
  );
}
