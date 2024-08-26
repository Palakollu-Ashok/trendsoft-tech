import React from "react";
import BredCrumb from "../../Common/BredCrumb";
import Testing from "../../OurSolutions/Testing/Testing";
import SolutionsBanner from "../../Common/SolutionsBanner";

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
        title="Testing"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, beatae qui, tenetur quia possimus"
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
