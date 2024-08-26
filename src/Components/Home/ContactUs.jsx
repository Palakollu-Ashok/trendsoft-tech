import React from "react";

export default function ContactUs() {
  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3 pt-32 h-full">
      <h2 className="py-3 text-center md:pb-10 pb-5">Get In Touch</h2>

      <div className="lg:flex lg:gap-10 w-full h-full lg:space-y-0 space-y-3 sm:space-y-6 pb-5">
        <div className="lg:w-1/2 flex lg:grid w-full gap-3 p-0.5">
          <div className="lg:h-full h-[200px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3827.0413003580547!2d80.57439567466332!3d16.422728729878514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTrendsoft%20Technologies%20Pvt%20Ltd%2C%20%23301-302%2C%20NRT%20Tech%20Park%2C%20Mangalagiri%20Bypass%2C%20Amaravathi%2C%20Andhra%20Pradesh%20522503!5e0!3m2!1sen!2sin!4v1722507946520!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:h-full h-[200px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.8340835142151!2d78.40170932789304!3d17.491020900849563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91949a0322e3%3A0x42ea9c96fc8be8b8!2sMIG-37%2C%20K%20P%20H%20B%20Phase%201%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1722572636071!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full lg:w-1/2  lg:px-5 bg-gray-100 rounded-2xl xl:py-10 sm:py-5 py-7 ">
          <form action="" className="px-2">
            <div className="sm:grid grid-cols-2 md:gap-8 gap-3 sm:space-y-0 space-y-4 lg:py-0 py-3">
              <div className="grid space-y-2">
                <label htmlFor="" className="px-1">
                  Name <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  className="border py-2  border-gray-400  px-1 focus:outline-none focus:ring-1 focus:ring-red"
                />
              </div>
              <div className="grid space-y-2">
                <label htmlFor="" className="px-1">
                  Phone Number <span className="text-red">*</span>
                </label>
                <input
                  type="number"
                  className="border py-2  px-1 border-gray-400  focus:outline-none focus:ring-1 focus:ring-red"
                />
              </div>

              <div className="grid col-span-2 space-y-2">
                <label htmlFor="" className="px-1">
                  Email <span className="text-red">*</span>
                </label>
                <input
                  type="email"
                  className="border py-2  px-1 border-gray-400 focus:outline-none focus:ring-1 focus:ring-red"
                />
              </div>

              <div className="grid space-y-2">
                <label htmlFor="" className="px-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="border py-2  px-1 border-gray-400  focus:outline-none focus:ring-1 focus:ring-red"
                />
              </div>

              <div className="grid space-y-2">
                <label htmlFor="" className="px-1">
                  Site Url
                </label>
                <input
                  type="text"
                  className="border py-2  px-1 border-gray-400  focus:outline-none focus:ring-1 focus:ring-red"
                />
              </div>

              <div className="grid col-span-2 space-y-2">
                <label htmlFor="" className="px-1">
                  Select Purpose Of Contact<span className="text-red">*</span>
                </label>
                <select
                  name=""
                  id=""
                  className="border border-gray-400  py-2  px-1 focus:outline-none focus:ring-1 focus:ring-red"
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
              </div>

              <div className="grid w-full col-span-2 space-y-2 ">
                <label htmlFor="" className="px-1">
                  Message:
                </label>
                <textarea className="border border-gray-400 no-scrollbar py-2  px-1 h-24 focus:outline-none focus:ring-1 focus:ring-red" />
              </div>
            </div>
            <button className="bg-blue py-3 rounded-full px-10 mt-5 text-white font-semibold tracking-wide uppercase hover:text-dark hover:bg-white hover:border-dark border duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
