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
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, beatae qui, tenetur quia possimus"
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
