import React from "react";

import s1 from "../../assets/Home/Home1.jpg";
export default function GetStart() {
  return (
    <div>
      <img src={s1} alt="" className="md:h-[70vh] h-[40vh] object-cover" />
      <div className="h-full  xl:px-[330px] lg:px-[150px] sm:px-[28px] md:px-[50px] px-5 xl:-translate-y-30 md:-translate-y-24 -translate-y-14">
        <div className="w-full   rounded-2xl  bg-white md:p-10 sm:p-5 p-3 shadow-xl">
          <div className="space-y-2 py-5 pb-20">
            <h2 className="text-center">Contact GrackleDocs</h2>
            <p className="text-center">We'd love to hear from you!</p>
          </div>
          <form action="" className="px-2 space-y-4">
            <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 md:space-y-0 space-y-4 lg:py-0 py-3">
              <div className="grid space-y-2">
                <label htmlFor="" className="px-1 ">
                  Full Name{" "}
                  <span className="font-serif font-semibold tracking-wide">
                    (Requried)
                  </span>
                </label>
                <input
                  type="text"
                  className="border py-2  border-dark px-1 focus:outline-none focus:ring-2 focus:ring-red"
                />
              </div>
              <div className="grid space-y-2">
                <label htmlFor="" className="px-1">
                  Phone Number{" "}
                  <span className="font-serif font-semibold tracking-wide">
                    (Requried)
                  </span>
                </label>
                <input
                  required
                  type="number"
                  className="border py-2  px-1 border-dark  focus:outline-none focus:ring-2 focus:ring-red"
                />
              </div>

              <div className="grid  space-y-2">
                <label htmlFor="" className="px-1">
                  E-mail{" "}
                  <span className="font-serif font-semibold tracking-wide">
                    (Requried)
                  </span>
                </label>
                <input
                  type="email"
                  required
                  className="border py-2  px-1 border-dark focus:outline-none focus:ring-2 focus:ring-red"
                />
              </div>

              <div className="grid space-y-2">
                <label htmlFor="" className="px-1">
                  Your Oraganization{" "}
                  <span className="font-serif font-semibold tracking-wide">
                    (Requried)
                  </span>
                </label>
                <input
                  type="text"
                  required
                  className="border py-2  px-1 border-dark  focus:outline-none focus:ring-2 focus:ring-red"
                />
              </div>

              <div className="grid space-y-2 col-span-2">
                <label htmlFor="" className="px-1">
                  Site Url (Optional)
                </label>
                <input
                  type="text"
                  className="border py-2  px-1 border-dark  focus:outline-none focus:ring-2 focus:ring-red"
                />
              </div>

              {/* <div className="grid col-span-2 space-y-2">
                <label htmlFor="" className="px-1">
                  Select Purpose Of Contact{" "}
                  <span className="font-serif font-semibold tracking-wide">
                    (Requried)
                  </span>
                </label>
                <select
                  name=""
                  id=""
                  required
                  className="border border-dark  py-2  px-1 focus:outline-none focus:ring-2 focus:ring-red"
                >
                  <option value="Jobs" className="" disabled>
                    Select
                  </option>
                  <option value="Jobs" className="">
                    Jobs
                  </option>
                  <option value="Project Requriement" className="">
                    Project Requriement
                  </option>
                </select>
              </div> */}

              <div className="grid w-full col-span-2 space-y-2 ">
                <label htmlFor="" className="px-1">
                  Your Message (Optional)
                </label>
                <textarea className="border border-dark no-scrollbar py-2  px-1 h-24 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />

              <p>
                I agree to the <a href="/TrendSoft/Privacy-Policy" className="underline">Privacy policy</a>.trendSofttech will
                never sell your information to third parties.
              </p>
            </div>

            <button className="bg-blue py-3 rounded-full px-10 md:mt-5 text-white font-semibold tracking-wide uppercase hover:text-dark hover:bg-white hover:border-dark border duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
