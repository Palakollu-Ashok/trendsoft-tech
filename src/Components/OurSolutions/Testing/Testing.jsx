import React, { useState } from "react";
import Button1 from "../../Common/Buttons";
export default function Testing() {
  const tabs = [
    {
      id: "1",
      label: "Functional Testing",

      Route: "/TrendSoft/oursolutions/Testing/FunctionalTesting",
      content:
        "Automated Functional testing for upgrade quality and speedy go-to-market. In success or failure, Customer experience plays a vital role, we focus on performing end-to-end functional and non-functional testing for your mobile, web, and e-commerce, applications or for enterprise solutions such as CRM, ERP, and more.",
      link1: "learn more",
      link2: "Get A Quote",
    },
    {
      id: "2",
      label: "Performance Testing",
      Route: "/TrendSoft/oursolutions/Testing/PerformanceTesting",

      content:
        "A comprehensive suite of accessibility services that empower organizations to achieve digital inclusivity and compliance through auditing, governance, litigation support, managed services, pre-launch assessments, product evaluation, and training.",
      link1: "learn more",
      link2: "Get A Quote",
    },
    {
      id: "3",
      label: "Usability Testing",
      Route: "/TrendSoft/oursolutions/Testing/UsabilityTesting",
      content:
        "Moderated testing is to guide the users physically or virtually to participate in answering questions may have ask-follow up questions and record observations during the test. Unmoderated test is the use of usability tools to record their actions and responses. These two different approaches help your business for better reach to a real-end audience and their preferences in using your product.",

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

                  <div className="w-fit h-fit">
                    <Button1 link={tab.Route} button={tab.link1} />
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

                <div className="w-fit h-fit">
                  <Button1 link={tab.Route} button={tab.link1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
