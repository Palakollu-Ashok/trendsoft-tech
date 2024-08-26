import React from "react";
import data from "../../../Content/OurSolutions/DigitalAccessibility/MobileAccessibility/Card.json";
import CommonCard from "../../Common/CommonCard";
import Img from "../../../assets/1.webp";
import BgImg from "../../../assets/Home/Home1.jpg";

import Empower from "../../Common/Empower";
import Banner from "../../Common/Banner";
import BredCrumb from "../../Common/BredCrumb";
export default function MobileAccessPage() {
  const data = [
    {
      text: "Home",
      link: "/",
      divide: "/",
    },

    {
      text: "Mobile App Security",
      link: "#",
    },
  ];

  return (
    <>
      <Banner
        BgImg={BgImg}
        desc="Mobile App Security  Auditing Solutions"
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
        heading="Mobile App Security"
        img={Img}
        desc="Allyant is your trusted partner in achieving Web Content Accessibility Guidelines (WCAG) compliance, mandated by the Americans with Disabilities Act (ADA) and Section 508, to ensure your online presence and digital properties are inclusive to all users."
        desc1="Discover our comprehensive range of services tailored to meet the specific needs of organizations aiming to foster a more accessible and inclusive digital environment. Explore our offerings below and unlock the potential to attain compliance and accessibility excellence."
      />

      <div className=" bg-gray-100 sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16  px-3 h-full">
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
      </div>
    </>
  );
}
