import React, { useState } from "react";

export default function CyberSecurity() {
  const tabs = [
    {
      id: "1",
      label: "Web App Security",
      content:
        "Trendsoft Technologies web application security is all about keeping businesses up and running time keeping your number of potential risks as low as possible. Taking a multi-layered approach to application security, we blend your apps to stay secure while offering utmost user-friendly experiences.",

      link1: "learn more",
      link2: "Get A Quote",
      Route: "/TrendSoft/oursolutions/CyberSecurity/WebAccess",
    },

    {
      id: "2",
      label: "Mobile App Security",
      content: "Trendsoft services analyze and identify vulnerabilities in applications used with mobile platforms (iOS, Android, and Windows 10 Mobile) during or post-development. Many dissimilarities and impressions of techniques exist.",
      link1: "learn more",
      link2: "Get A Quote",
      Route: "/TrendSoft/oursolutions/CyberSecurity/MobileAccess",
    },
    {
      id: "3",
      label: "API Security",
      content: "Trendsoft technologies provide continual safety of all APIs using deep discovery and classification of sensitive data to detect all public, private, and shadow APIs to authorize security teams to execute a positive security model.",
      link1: "learn more",
      link2: "Get A Quote",
      Route: "/TrendSoft/oursolutions/CyberSecurity/DocumentAccess",
    },
    {
      id: "4",
      label: "Thick Client Security",
      content: "Our Thick Client Security Assessment services will focus on identifying the security flaws in our client’s thick client applications. Our assessments start with two approaches like",
      link1: "learn more",
      link2: "Get A Quote",
      Route: "/TrendSoft/oursolutions/CyberSecurity/ThickClientPage",
    },
    {
      id: "5",
      label: "Secure code review",
      content: "Security code review (SCR) is a structured and security examination of the application source code and its software. We examine the loopholes and bugs that may have been overlooked or rooted during application and software development.",
      link1: "learn more",
      link2: "Get A Quote",
      Route: "/TrendSoft/oursolutions/CyberSecurity/SecureCodePage",
    },
    {
      id: "6",
      label: "Database Security",
      content: "Ensuring compliance, modern technologies, and Reliable protection data masking can be Static or dynamic determining role-base and location-aware sensitive data.",
      link1: "learn more",
      link2: "Get A Quote",
      Route: "/TrendSoft/oursolutions/CyberSecurity/DataBaseSecurityPage",
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
