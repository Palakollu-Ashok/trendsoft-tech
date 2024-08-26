import React from "react";
import Home from "../Home/Home";
import About from "../Home/About";
import CoommonCard from "../Common/CommonCard";
import data from "../../Content/Home/Card.json";
import OurStrengths from "../Home/OurStrengths";
import Clients from "../Home/Clients";
import Button from "../Common/Button";
import button from "../../Content/Home/Buttons.json";
import ContactUs from "../Home/ContactUs";
function Homepage() {
  return (
    <>
      <Home />
      <About />

      <div className="my-10 px-3 bg-gray-100 sm:py-4 py-2 md:px-6 xl:px-10 3xl:px-16 ">
        <div className="">
          <h2 className=" py-3 md:px-5 px-2">{data.title}</h2>
          <div className="grid lg:grid-cols-3 sm:pb-5 pb-2 md:px-5 px-2   sm:grid-cols-2 md:grid-cols-3 grid-cols-1 w-full gap-8 ">
            {data.list.map((d, i) => (
              <CoommonCard
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
      <OurStrengths />
      {/* <Carousel /> */}
      <Clients />
      <div className="md:px-6 xl:px-10 3xl:px-16 pt-10    space-y-10 h-full ">
        <h2 className="text-center">Certifications</h2>
        <div className="md:flex gap-3 md:justify-between space-y-8 md:space-y-0">
          {button.list.map((d, i) => (
            <>
              <Button key={i} button={d.button} link={d.link} Img={d.img} />
            </>
          ))}
        </div>
      </div>

      <ContactUs />
    </>
  );
}

export default Homepage;
