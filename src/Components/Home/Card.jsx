import React from "react";
import CoommonCard from "../Common/CommonCard";
import data from "../../Content/Home/Card.json";

export default function Card() {
  return (
    <div>
      <div className="my-10 px-3 bg-[#155C93] sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16 ">
        <div className="md:py-10 py-5">
          <h2 className=" py-3 text-light md:px-5 px-2">{data.title}</h2>
          <ul className="grid lg:grid-cols-3 sm:pb-5 pb-2 md:px-5 px-2   sm:grid-cols-2 md:grid-cols-3 grid-cols-1 w-full gap-8 ">
            {data.list.map((d, idx) => (
              <CoommonCard
                img={d.img}
                heading={d.heading}
                description={d.decscription}
                text={d.text}
                link={d.link}
                key={idx}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
