import React from "react";
import CommonCard from "../../Common/CommonCard";
import BgImg from "../../../assets/Home/Home1.jpg";
import Img from "../../../assets/1.webp";
import Banner from "../../Common/Banner";
import Empower from "../../Common/Empower";
import BredCrumb from "../../Common/BredCrumb";
import DocumentServices from "../../OurSolutions/DigitalAccessibility/DocumentServices";
export default function DocumentAccessibilityPage() {
  const data = [
    {
      text: "Home",
      link: "/",
      divide: "/",
    },

    {
      text: "Document Accessibility",
      link: "#",
    },
  ];

  return (
    <>
      <Banner
        BgImg={BgImg}
        desc=" Website & Document Accessibility Auditing Solutions"
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
        heading="Document Accessibility"
        img={Img}
        desc="Allyant is your trusted partner in achieving Web Content Accessibility Guidelines (WCAG) compliance, mandated by the Americans with Disabilities Act (ADA) and Section 508, to ensure your online presence and digital properties are inclusive to all users."
        desc1="Discover our comprehensive range of services tailored to meet the specific needs of organizations aiming to foster a more accessible and inclusive digital environment. Explore our offerings below and unlock the potential to attain compliance and accessibility excellence."
      />

      <DocumentServices />
    </>
  );
}
