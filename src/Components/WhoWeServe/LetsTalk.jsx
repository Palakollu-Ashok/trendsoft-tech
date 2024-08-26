import React from "react";
import Bg from "../../assets/contact.jpg";
export default function LetsTalk() {
  return (
    <div
      className="  md:py-16 py-3 h-full bg-opacity-70"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full  xl:px-[300px] md:px-[100px] sm:px-[40px] px-3 lg:space-y-12 sm:space-y-6 space-y-3">
        <div className="">
          <h2>Let's Talk About Your Project.</h2>
          <p>
            We are a full-service IT and digital marketing firm. We believe that
            successful projects are the result of working collaboratively and
            transparently with our clients. Are you looking for a better user
            experience for your website or application? Need an experienced
            database architect or business analyst? Let’s talk!
          </p>
        </div>
        <form action="" className="">
          <div className="md:grid md:grid-cols-2 md:gap-8 gap-3 md:space-y-0 space-y-4 lg:py-0 py-3">
            <div className="grid space-y-2">
              <label htmlFor="" className="px-1 text-[12px] sm:text-[16px]">
                Full Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="border py-2 focus:ring-1 border-gray-400  px-1 focus:outline-none  focus:ring-red"
              />
            </div>

            <div className="grid space-y-2">
              <label htmlFor="" className="px-1  text-[12px] sm:text-[16px]">
                Company Name
              </label>
              <input
                type="text"
                className="border py-2 focus:ring-1 px-1 border-gray-400  focus:outline-none  focus:ring-red"
              />
            </div>

            <div className="grid space-y-2">
              <label htmlFor="" className="px-1 text-[12px] sm:text-[16px]">
                Email <span className="text-red">*</span>
              </label>
              <input
                type="email"
                className="border py-2 focus:ring-1 px-1 border-gray-400 focus:outline-none  focus:ring-red"
              />
            </div>
            <div className="grid space-y-2">
              <label htmlFor="" className="px-1  text-[12px] sm:text-[16px]">
                Phone Number <span className="text-red">*</span>
              </label>
              <input
                type="number"
                className="border py-2 focus:ring-1 px-1 border-gray-400  focus:outline-none  focus:ring-red"
              />
            </div>

            <div className="grid w-full col-span-2 space-y-2 ">
              <label htmlFor="" className="px-1  text-[12px] sm:text-[16px]">
                Message
              </label>
              <textarea className="border border-gray-400 no-scrollbar py-2 focus:ring-1 px-1 h-24 focus:outline-none  focus:ring-red" />
            </div>
          </div>
          <button className=" py-3 rounded-full px-10 mt-5 text-dark font-semibold bg-light tracking-wide uppercasebg-whit ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
