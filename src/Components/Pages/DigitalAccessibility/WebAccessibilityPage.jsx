import React from "react";
import CoommonCard from "../../Common/CommonCard";
import Img from "../../../assets/1.webp";
import BgImg from "../../../assets/Home/Home1.jpg";
import data1 from "../../../Content/OurSolutions/DigitalAccessibility/WebAccessibility/Card.json";
import Empower from "../../Common/Empower";
import Banner from "../../Common/Banner";
import BredCrumb from "../../Common/BredCrumb";
export default function WebAccessibilityPage() {
  const data = [
    {
      text: "Home",
      link: "/",
      divide: "/",
    },

    {
      text: "Web Accessibility",
      link: "#",
    },
  ];

  return (
    <>
      <Banner
        BgImg={BgImg}
        desc=" Website Accessibility Auditing Solutions"
        desc1=" A comprehensive suite of accessibility services that empower
            organizations to achieve digital inclusivity and compliance through
            auditing, governance, litigation support, managed services,
            pre-launch assessments, product evaluation, and training."
        bname="Speak with an Expert"
      />

      <div className="flex  md:px-6  xl:px-10 3xl:px-16 px-3">
        {data?.map((d, i) => (
          <>
            <BredCrumb text={d?.text} link={d.link} divide={d.divide} />
          </>
        ))}
      </div>
      <Empower
        heading="Web Accessibility"
        img={Img}
        desc="Allyant is your trusted partner in achieving Web Content Accessibility Guidelines (WCAG) compliance, mandated by the Americans with Disabilities Act (ADA) and Section 508, to ensure your online presence and digital properties are inclusive to all users."
        desc1="Discover our comprehensive range of services tailored to meet the specific needs of organizations aiming to foster a more accessible and inclusive digital environment. Explore our offerings below and unlock the potential to attain compliance and accessibility excellence."
      />
      <div className="md:px-6 xl:px-20 3xl:px-16 px-3">
        <div className="space-y-5 py-10">
          <h1 className="md:text-4xl text-center sm:text-2xl text-lg text-[rgb(12,35,70)]">
            {data1?.title}
          </h1>
          <p>{data1?.desc}</p>
        </div>
        <div className="">
          {data1.list.map((d, i) => (
            <div className="pb-3 md:space-y-3 space-y-3" key={i}>
              <h2 className="text-[rgb(12,35,70)] md:text-[18px] sm:text-[16px] text-[12px]  font-semibold font-Nunito">
                {d.title}
              </h2>
              {d?.list1 && (
                <ul className="space-y-1.5">
                  {d?.list1?.map((d2, i1) => (
                    <>
                      <li
                        key={i1}
                        className="md:text-[15px] text-[10px] text-paragraph-color tracking-wide  font-Nunito"
                      >
                        {d2?.desc}
                      </li>
                    </>
                  ))}
                </ul>
              )}
              <div>
                <img src="" alt="" />
              </div>
              <div className="space-y-1.5 pb-2">
                {d?.list2?.map((d2, i1) => (
                  <>
                    <p
                      key={i1}
                      className="md:text-[15px] text-[10px] text-paragraph-color tracking-wide  font-Nunito"
                    >
                      {d2?.desc}
                    </p>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
