import React, { useState } from "react";

export default function Testing() {
  const tabs = [
    {
      id: "1",
      label: "Functional Testing",

      Route: "/TrendSoft/oursolutions/Testing/FunctionalTesting",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam veritatis magnam soluta! Neque itaque quas vero laudantium similique,",
      link1: "learn more",
      link2: "Get A Quote",
    },
    {
      id: "2",
      label: "Performance Testing",
      Route: "/TrendSoft/oursolutions/Testing/PerformanceTesting",

      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam veritatis magnam soluta! Neque ",
      link1: "learn more",
      link2: "Get A Quote",
    },
    {
      id: "3",
      label: "Usability Testing",
      Route: "/TrendSoft/oursolutions/Testing/UsabilityTesting",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam veritatis magnam soluta! Neque itaque quas vero laudantium similique, rerum quaerat fugiat quasi laboriosam nihil ipsa alias esse perferendis atque!",

      link1: "learn more",
      link2: "Get A Quote",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Function to handle tab click
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs-container  md:px-6 xl:px-10 3xl:px-16 px-3">
      <h2 className="text-blue md:text-2xl text-xl  md:py-4 py-2">
        Solutions We Offer
      </h2>
      <div className="flex py-3 md:gap-10 gap-2 md:p-2 h-full  md:py-10 ">
        <div className="w-1/3 sticky top-14 h-full   md:block hidden">
          {tabs.map((tab) => (
            <div className="h-full grid">
              <button
                key={tab.id}
                className={`tab-button  sm:py-4 py-3 space-y-4 border-r border-blue   h-full  w-full md:text-center    md:text-[16px] text-[8px]    sm:px-8 ${
                  activeTab === tab.id
                    ? "active md:border-r-4 shadow-sm   bg-gray-50 border-blue text-dark font-semibold tracking-wide"
                    : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full flex-grow md:p-4 md: p-2   ">
          <div className="lg:block hidden">
            {tabs.map((tab) =>
              activeTab === tab.id ? (
                <div key={tab.id}>
                  <h3 className="text-blue pb-3">{tab.label}</h3>
                  <p>{tab.content}</p>

                  <div className="flex justify-start sm:gap-3 gap-2   pt-5">
                    <a
                      href={tab.Route}
                      className="rounded-full md:text-[14px] text-[8px] border w-fit flex items-center justify-center gap-1  md:text-center bg-blue text-white  p-2 hover:text-black hover:bg-light duration-300 "
                    >
                      {tab.link1}
                    </a>
                    <a
                      href="#"
                      className="rounded-full  md:text-[14px] text-[8px] border  w-fit flex items-center justify-center gap-1  text-center  hover:bg-blue hover:text-white px-5 p-2 text-black bg-light duration-300 "
                    >
                      {tab.link2}
                    </a>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="lg:hidden block  space-y-4">
            {tabs.map((tab, id) => (
              <div key={id} className="">
                <h3 className="text-blue pb-3">{tab.label}</h3>
                <p>{tab.content}</p>

                <div className="flex justify-start sm:gap-3 gap-2   pt-5">
                  <a
                    href={tab.Route}
                    className="rounded-full md:text-[14px] text-[8px] border w-fit flex items-center justify-center gap-1  md:text-center bg-blue text-white  p-2 hover:text-black hover:bg-light duration-300 "
                  >
                    {tab.link1}
                  </a>
                  <a
                    href="#"
                    className="rounded-full  md:text-[14px] text-[8px] border  w-fit flex items-center justify-center gap-1  text-center  hover:bg-blue hover:text-white px-5 p-2 text-black bg-light duration-300 "
                  >
                    {tab.link2}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
