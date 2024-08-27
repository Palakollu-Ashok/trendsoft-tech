import React from "react";

import data1 from "../../../Content/OurSolutions/DigitalAccessibility/DocumentAccess/Card.json";
export default function DocumentServices() {
  return (
    <div className=" bg-gray-100 sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16 px-3 h-full">
      <div className="">
        <h2 className=" py-3 md:px-5 px-2">{data.title}</h2>
        <ul className="grid lg:grid-cols-3 sm:pb-5 pb-2 md:px-5 px-2   sm:grid-cols-2  grid-cols-1 w-full gap-8 h-full ">
          {data1.list.map((d, i) => (
            <CommonCard
              key={i}
              img={d.img}
              heading={d.heading}
              description={d.decscription}
              text={d.text}
              link={d.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
