import { Button } from "@headlessui/react";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Button1 from "../../Common/Buttons";
export default function DigitalAccessibility() {
  const tabs = [
    {
      id: "1",
      label: "Web Accessibility",
      content:
        "With web accessibility service Trendsoft ensures that your web content is accessible for every user. Our practice of making websites usable for all users including those with disabilities, impairments, and limitations. We make sure that people who experience difficulties or limitations have the same or similar experience as those who do not. We deliver your website – and its content – more user-friendly and easier to understand for all visitors.",
      Route: "/TrendSoft/oursolutions/WebAccess-DigitalAccessibility",
      link1: "learn more",
    },
    {
      id: "2",
      label: "Mobile Accessibility",
      content:
        "A comprehensive suite of accessibility services that empower organizations to achieve digital inclusivity and compliance through auditing, governance, litigation support, managed services, pre-launch assessments, product evaluation, and training.",
      Route: "/TrendSoft/oursolutions/Mobile-Acessibility",
      link1: "learn more",
    },
    // {
    //   id: "3",
    //   label: "Document Access",

    //   content:
    //     "yes PDFs also need to be accessible so that people with disabilities using screen reader, speech to text technology or braille displayer get equal access.",
    //   Route: "/TrendSoft/oursolutions/DocumentAccessibilityPage",
    //   link1: "learn more",
    //   link2: "Get A Quote",
    // },

    {
      id: "4",
      label: "In Design Accessibility",
      content:
        "Trendsoft supports accessible cross-media platforms, allowing to export of InDesign documents to PDF, HTML, XHTML, and XML.We also allow you to add tags and alternative text attributes to InDesign documents that support the accessible production foregoing exported formats.",
      Route: "/TrendSoft/oursolutions/IndesignAccessibilitypage",
      link1: "learn more",
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
