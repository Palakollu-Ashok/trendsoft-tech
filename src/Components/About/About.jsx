import React from "react";
import s1 from "../../assets/About/Aboutus.jpg";
import About1 from "../../assets/About/OurMission.svg";
import S2 from "../../assets/About/Choose1.png";
import BgImg from "../../assets/About/Wave1.png";
function About() {
  const data = [
    {
      Img: About1,
      title: "Our Vission And Mission",
      desc: "Trendsoft has proven accessibility for web, mobile, and software and cyber security services to clear critical pathways in data shelter. We want to make accessibility a basic Human right that can’t be ignored with a safer digital world enabling Secured data and Accessibility. Partner with us for excellence and expertise future craving world.",
    },
  ];

  const data1 = [
    {
      title: "Most answered Questions by Trendsoft",

      list1: [
        {
          desc: "Where should I Start?",
        },

        {
          desc: "What do I need to classify?",
        },
        {
          desc: "What are the best ways to reduce risk and Cost?",
        },
        {
          desc: "How does Accessibility support business growth?",
        },
        {
          desc: "Why Data should be safeguarded?",
        },
      ],
    },
    {
      title: "Value Building",
      list1: [
        {
          desc: "We build maturity in reaching high levels of digital accessibility and cybersecurity with top-down executive support and grassroots initiatives that vanish changing compliance requirements and evolving technologies all intimidate regression.",
        },
      ],
    },
    {
      title: "End-to-End Testing",
      list1: [
        {
          desc: "Cyber security and digital accessibility are now mandated for legal compliance, customer reach, competitive advantage, and market success so our unique approach to testing for accessibility and Cyber security is supported by our methodology and our technology. Our experts understand the agile principles of flow and feedback and integrate them into your existing test practices.",
        },
      ],
    },
  ];
  return (
    <div className="">
      <div>
        <img
          src={s1}
          alt=""
          className="h-[60vh] object-cover w-full object-bottom"
        />
        <div className="h-full  xl:px-[100px] lg:px-[40px] sm:px-[18px]  px-5 xl:-translate-y-30 md:-translate-y-24 -translate-y-14">
          <div className="w-full   rounded-2xl  bg-[rgb(25,20,65)] text-light  xl:px-40 lg:px-5  xl:p-10 md:p-8 p-3 shadow-xl">
            <div className="space-y-2 py-5 ">
              <h2 className="text-center text-light">About TrendSoft</h2>
              <p className="text-center text-light">
                We are named as a global leader by one of the leading B2B
                ratings, and review platform, clutch. We are addressed by large
                brands in the world that rely on Trendsoft technologies for
                digital accessibility, software testing, and cyber security
                services which demonstrates how good our teams are.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" xl:px-[200px] md:px-6 px-3  3xl:px-[230px] py-4">
        {data.map((d, i) => (
          <div
            key={i}
            className="md:flex lg:gap-10 md:gap-3 justify-center items-center h-full space-y-4"
          >
            <img src={d.Img} alt="" className="md:w-1/3 h-full " />

            <div className="h-full lg:space-y-5 space-y-2">
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-4 h-[105vh] ">
        <div
          style={{
            backgroundImage: `url(${BgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="md:flex lg:gap-10 md:gap-3 justify-center items-center h-full space-y-4"
        >
          <div className="grid justify-center w-full h-1/2 md:py-20 py-48  lg:space-y-5 space-y-2">
            <div className="md:flex items-center space-y-6 md:space-y-0 gap-10 xl:px-44  md:px-6 px-3">
              <div className="md:space-y-4  space-y-2">
                <h2>Why us ?</h2>

                <p>One-stop solution for Audit+ Compliance + Security</p>

                <p className="font-bold  md:text-lg text-blue">
                  Solutions Overview
                </p>
                <p>
                  With many technologies and changing guidelines, creating and
                  maintaining secured data in your security and accessibility
                  pathways is a difficult way, hence businesses face significant
                  challenges as you build digital accessibility into your web,
                  mobile applications, digital assets and processes here are.
                </p>
              </div>

              <img
                src={S2}
                alt=""
                className="md:w-1/2  h-1/2 md:h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3  xl:px-10 md:px-6 px-3  3xl:px-16 lg:py-10 py-4">
        {data1.map((d1, i1) => (
          <div className="space-y-2">
            <h2 className="md:text-[18px] sm:text-[15px] text-[12px]">
              {d1.title}
            </h2>
            <div>
              {d1.list1.map((d2, i2) => (
                <p>{d2.desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
