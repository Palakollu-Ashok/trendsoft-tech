import React from "react";
import WhoWeServe from "../WhoWeServe/WhoWeServe";
import CoommonCard from "../Common/CommonCard";
import data from "../../Content/WhoWeServe/Card.json";

import data1 from "../../Content/Home/Clients.json";

import LetsTalk from "../WhoWeServe/LetsTalk";
export default function WhoWeServePage() {
  return (
    <>
      <WhoWeServe />

      <div className="px-3 bg-gray-100 sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16 ">
        <div className="">
          <h2 className=" py-3 md:px-5 px-2">{data.title}</h2>
          <div className="grid lg:grid-cols-3 sm:pb-5 pb-2 md:px-5 px-2   sm:grid-cols-2 grid-cols-1 w-full gap-8 ">
            {data.list.map((d, i) => (
              <CoommonCard
                img={d?.img}
                heading={d.heading}
                description={d.decscription}
              />
            ))}
          </div>
        </div>
      </div>

      <LetsTalk />

      <div className="py-10  md:px-6 xl:px-10 3xl:px-16 px-3">
        <h2 className="text-center md:pb-10 md:py-3 pb-3">{data1.heading}</h2>
        <div className="grid lg:grid-cols-4  sm:grid-cols-3 grid-cols-2 place-items-center  mx-auto gap-5">
          {data1.list.map((d, i) => (
            <>
              <img
                key={i}
                src={d.img}
                alt=""
                className="md:w-32 w-20    shadow-md scale-105"
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
