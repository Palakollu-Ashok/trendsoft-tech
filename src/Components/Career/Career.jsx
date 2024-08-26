import React from "react";
import Img from "../../assets/Career.webp";
export default function Career() {
  const data = {};
  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3">
      <div className="  h-full">
        <h2 className="py-3 text-center md:pb-10 pb-5">Get In Touch</h2>

        <div className="lg:flex lg:gap-10 w-full h-full md:space-y-0 space-y-3 pb-5">
          <div className="lg:w-1/2 flex lg:grid w-full gap-3 p-0.5">
            <div className="h-full w-full">
              <img src={Img} alt="Image Not Found" />
            </div>
          </div>

          <div className="w-full lg:w-1/2  lg:px-5">
            <form action="" className="px-2">
              <div className="sm:grid grid-cols-2 md:gap-8 gap-3 sm:space-y-0 space-y-4 lg:py-0 py-3">
                <div className="grid space-y-2">
                  <label htmlFor="" className="px-1">
                    Name <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border py-2  border-gray-400  px-1 focus:outline-none focus:ring-1 focus:ring-red"
                  />
                </div>
                <div className="grid space-y-2">
                  <label htmlFor="" className="px-1">
                    Phone Number <span className="text-red">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="border py-2  px-1 border-gray-400  focus:outline-none focus:ring-1 focus:ring-red"
                  />
                </div>

                <div className="grid space-y-2">
                  <label htmlFor="" className="px-1">
                    Email <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    className="border py-2  px-1 border-gray-400 focus:outline-none focus:ring-1 focus:ring-red"
                  />
                </div>

                <div className="grid  space-y-2">
                  <label htmlFor="" className="px-1">
                    Experince/Fresher<span className="text-red">*</span>
                  </label>
                  <select
                    name=""
                    placeholder="Select"
                    id=""
                    className="border border-gray-400  py-2  px-1 focus:outline-none focus:ring-1 focus:ring-red"
                  >
                    <option value="Jobs" className="" disabled>
                      Select
                    </option>
                    <option value="Jobs" className="">
                      Fresher
                    </option>
                    <option value="Project Requriement" className="">
                      Experince
                    </option>
                  </select>
                </div>

                <div className="grid w-full col-span-2 space-y-2">
                  <label htmlFor="" className="px-1">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    className="border py-2 w- px-1 border-gray-400  focus:outline-none focus:ring-1 focus:ring-red"
                  />
                </div>

                <div className="grid w-full col-span-2 space-y-2 ">
                  <label htmlFor="" className="px-1">
                    Message:
                  </label>
                  <textarea
                    placeholder="Enter Your Message Here"
                    className="border border-gray-400 no-scrollbar py-2  px-1 h-24 focus:outline-none focus:ring-1 focus:ring-red"
                  />
                </div>
              </div>
              <button className="bg-blue py-3 rounded-full px-10 mt-5 text-white font-semibold tracking-wide uppercase hover:text-dark hover:bg-white hover:border-dark border duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
