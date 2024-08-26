import React from "react";
import data from "../../Content/Career/AbouteCreer.json";
export default function AboutCareer() {
  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3  py-10">
      <div className="lg:flex space-y-5 lg:space-y-0  w-full h-full lg:gap-10">
        {data.list1.map((d, i) => (
          <div key={i} className="space-y-2 lg:w-1/2 h-full">
            <h2>{d.title}</h2>
            <p>{d.desc}</p>
            {d?.list?.map((d1, i1) => (
              <div key={i1} className="h-full">
                <a
                  href=""
                  className="hover:underline underline-offset-2 text-blue"
                >
                  {d1?.link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
