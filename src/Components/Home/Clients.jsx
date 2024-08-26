import React from "react";
import data from "../../Content/Home/Clients.json";
export default function Clients() {
  return (
    <div className="py-10  md:px-6 xl:px-10 3xl:px-16 px-3">
      <h2 className="text-center md:pb-10 md:py-3 pb-3">{data.heading}</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols- sm:grid-cols-3 grid-cols-2 place-items-center  mx-auto gap-5">
        {data.list.map((d, i) => (
          <>
            <img src={d.img} key={i} alt="" className="md:w-32 w-20    shadow-md scale-105" />
          </>
        ))}
      </div>
    </div>
  );
}
