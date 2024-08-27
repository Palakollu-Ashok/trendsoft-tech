import React from "react";
import data from "../../Content/Home/AccessibilityJourney.json";
export default function AccessibilityJourney() {
  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3 space-y-8  md:py-24 py-12   bg-[#F7F7F7]">
      <div className="grid justify-center place-items-center md:space-y-14 space-y-7">
        <div className="space-y-3 ">
          <h2 className="md:text-[24px] text-[16px] text-center">{data.title}</h2>
          <p className="text-center">{data.desc}</p>
        </div>
        <div className="flex  justify-between md:gap-24 sm:gap-10 gap-5 ">
          {data?.list.map((d, i) => (
            <div
              key={i}
              className="grid justify-center place-items-center space-y-2"
            >
              <img src={d?.img} alt="" className="sm:w-20 sm:h-20 w-14 h-14" />

              <p className="text-center">{d?.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
