import React from "react";
import data from "../../Content/Home/About.json";
import Button from "../Common/Buttons";
function About() {
  return (
    <div className="md:flex  md:px-6 xl:px-10 3xl:px-16 px-3    md:gap-8 md:my-16  my-8 md:space-y-0 space-y-2">
      <img src={data.img} alt="" className=" md:w-1/3 w-full md:h-[400px] " />

      <div className=" flex flex-1 justify-end">
        <div className="">
          <h2 className="text-blue font-semibold">{data.Title}</h2>
          {data?.list.map((d, i) => (
            <p key={i} className="leading-1 py-1.5 ">
              {d.description}
            </p>
          ))}
          <div className="flex w-fit gap-4 text-center">
            {data.list2.map((d, i) => (
              <>
                <Button button={d.learn} link={d.link} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
