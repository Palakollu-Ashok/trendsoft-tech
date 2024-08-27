import React from "react";
import CoommonCard from "../Common/CommonCard";
import data from "../../Content/WhoWeServe/Card.json";
export default function Card() {
  return (
    <div>
      <div className="px-3 bg-gray-100 sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16 ">
        <div className="">
          <h2 className=" py-3 md:px-5 px-2">{data.title}</h2>
          <ul className="grid lg:grid-cols-3 sm:pb-5 pb-2 md:px-5 px-2   sm:grid-cols-2 grid-cols-1 w-full gap-8 ">
            {data.list.map((d, i) => (
              <CoommonCard
                img={d?.img}
                heading={d.heading}
                description={d.decscription}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
