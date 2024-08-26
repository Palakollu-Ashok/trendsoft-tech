import React from "react";
import data1 from "../../../Content/OurSolutions/DigitalAccessibility/IndesignAccessibility/Card.json";
import CommonCard from "../../Common/CommonCard";
import Img from "../../../assets/1.webp";
import BgImg from "../../../assets/Home/Home1.jpg";

import Empower from "../../Common/Empower";
import Banner from "../../Common/Banner";
import BredCrumb from "../../Common/BredCrumb";
export default function IndesignAccessibilitypage() {
  const data = [
    {
      text: "Home",
      link: "/",
      divide: "/",
    },

    {
      text: "In Design Accessibility",
      link: "#",
    },
  ];

  return (
    <>
      <Banner
        BgImg={BgImg}
        desc=" Website & In Design Accessibility Auditing Solutions"
        desc1=" A comprehensive suite of accessibility services that empower
            organizations to achieve digital inclusivity and compliance through
            auditing, governance, litigation support, managed services,
            pre-launch assessments, product evaluation, and training."
        bname="Speak with an Expert"
      />

      <div className="flex  md:px-6  xl:px-10 3xl:px-16 px-3">
        {data.map((d, i) => (
          <>
            <BredCrumb text={d.text} link={d.link} divide={d.divide} />
          </>
        ))}
      </div>
      <Empower
        heading="In Design Accessibility"
        img={Img}
        desc="Allyant is your trusted partner in achieving Web Content Accessibility Guidelines (WCAG) compliance, mandated by the Americans with Disabilities Act (ADA) and Section 508, to ensure your online presence and digital properties are inclusive to all users."
        desc1="Discover our comprehensive range of services tailored to meet the specific needs of organizations aiming to foster a more accessible and inclusive digital environment. Explore our offerings below and unlock the potential to attain compliance and accessibility excellence."
      />

      {/* <div className=" bg-gray-100 sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16  px-3 h-full">
        <div className="">
          <h2 className=" py-3 md:px-5 px-2">{data.title}</h2>
          <div className="grid lg:grid-cols-3 sm:pb-5 pb-2 md:px-5 px-2   sm:grid-cols-2  grid-cols-1 w-full gap-8 h-full ">
            {data.list.map((d, i) => (
              <CommonCard
                key={i}
                img={d.img}
                heading={d.heading}
                description={d.decscription}
                text={d.text}
                link={d.link}
              />
            ))}
          </div>
        </div>
      </div> */}

      <div className="md:px-6  xl:px-10 3xl:px-16 px-3">
        <div className="space-y-5 py-10">
          <h1 className="md:text-4xl text-center sm:text-2xl text-lg text-[rgb(12,35,70)]">
            {data1.title}
          </h1>
          <p>{data1.desc}</p>
        </div>
        <ul className="">
          {data1.list.map((d, i) => (
            <li className="pb-3 space-y-3" key={i}>
              <h2 className="text-[rgb(12,35,70)] md:text-[18px] sm:text-[16px] text-[12px]  font-semibold font-Nunito">
                {d.title}
              </h2>
              {d?.list1?.map((d2, i1) => (
                <div>
                  <p key={i1}>{d2.desc}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
