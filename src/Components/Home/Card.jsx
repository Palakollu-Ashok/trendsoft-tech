import React from "react";
import CoommonCard from "../Common/CommonCard";
import data from "../../Content/Home/Card.json";

export default function Card() {
  return (
    <div
      style={{
        backgroundImage: `url(${data.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "",
      }}
    >
      <div className="my-10  grid px-3 sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16 ">
        <div className=" lg:py-0 py-5 ">
          <div className="md:py- py-5  space-y-2 lg:pb-20 sm:pb-10 pb-5">
            <h2 className=" py-3 text-light md:px-5 px-2 md:text-[20px] sm:text-[16px] text-[12px] tracking-wide font-serif">
              {data.title}
            </h2>
            <div className="space-y-1">
              {data?.list1.map((d, i) => (
                <>
                  <p className="text-light md:text-[28px] sm:text-[20px] text-[15px] md:px-5 px-2">
                    {d.desc}
                  </p>
                </>
              ))}
            </div>
          </div>
          <ul className="grid lg:grid-cols-3 sm:pb-5 pb-2 md:px-5 px-2    sm:grid-cols-2  grid-cols-1 w-full gap-8 ">
            {data.list.map((d, idx) => (
              <div className="">
                <CoommonCard
                  img={d.img}
                  heading={d.heading}
                  description={d.decscription}
                  text={d.text}
                  link={d.link}
                  key={idx}
                  color="#5B1FF4"
                  textColor="#ffffff"
                  textColor2="#ffffff"
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
