import React from "react";
import BredCrumb from "../../Common/BredCrumb";
import Testing from "../../OurSolutions/Testing/Testing";
import SolutionsBanner from "../../Common/SolutionsBanner";
import images from "../../../assets/DigitalAccessibility/BreadCrumb.png";
export default function TestingPage() {
  const data = [
    {
      text: "Home",
      link: "/",
      divide: "/",
    },
    {
      text: "Our Solutions ",
      link: "#",
      divide: "/",
    },
    {
      text: "Testing",
      link: "#",
    },
  ];
  return (
    <>
      <SolutionsBanner
        BgImg={images}
        title="Testing"
        desc="Digital accessibility testing involves evaluating websites and applications to ensure they meet accessibility standards and guidelines, such as WCAG."
      />
      <div className="flex  md:px-6  xl:px-10 3xl:px-16 px-3">
        {data.map((d, i) => (
          <>
            <BredCrumb text={d.text} link={d.link} divide={d.divide} />
          </>
        ))}
      </div>
      <Testing />
    </>
  );
}
