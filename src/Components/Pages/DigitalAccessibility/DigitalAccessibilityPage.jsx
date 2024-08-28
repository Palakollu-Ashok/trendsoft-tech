import React from "react";
import DigitalAccessibility from "../../OurSolutions/DigitalAccessibility/DigitalAccessibility";
import BredCrumb from "../../Common/BredCrumb";
import SolutionsBanner from "../../Common/SolutionsBanner";

export default function OurSolutionsPage() {
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
      text: "Content Production",
      link: "#",
    },
  ];
  return (
    <>
      <SolutionsBanner
        title="Digital Accessibility"
        desc="Digital accessibility ensures that digital content and tools are usable by everyone, including people with disabilities."
      />
      <div className="flex  md:px-6  xl:px-10 3xl:px-16 px-3 ">
        {data.map((d, i) => (
          <>
            <BredCrumb text={d.text} link={d.link} divide={d.divide} />
          </>
        ))}
      </div>
      <DigitalAccessibility />
    </>
  );
}
