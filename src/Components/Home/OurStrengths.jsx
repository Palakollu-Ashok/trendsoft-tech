import React from "react";
import data from "../../Content/Home/OurStrengths.json";
export default function OurStrengths() {
  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3">
      <h2 className="text-center md:pb-8 pb-4">{data.heading}</h2>
      <ul className="grid lg:grid-cols-3 grid-cols-2  justify-between md:gap-10 gap-5 md:py-6 py-3  ">
        {data.list.map((d, i) => (
          <li
            className="grid place-items-center md:space-y-4 group space-y-2"
            key={i}
          >
            <img
              src={d.img}
              alt=""
              className="sm:w-20 sm:h-20 w-8 h-8 group-hover:-translate-y-2 duration-300 "
            />
            <p className="text-blue/80  font-extrabold text-center">
              {d.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
