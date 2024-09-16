import logo from "../../assets/logoB.svg";

import { MdOutlineAttachEmail, MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div
      role="content info"
      className="bg-gray-50 font-Nunito md:px-6 xl:px-10 3xl:px-16 px-3 md:py-10 py-4"
    >
      <div className="md:flex gap-10  md:space-y-0 space-y-3 justify-between  md:pt-10 p-6">
        <div className="w-full space-y-4">
          <a href="/">
            <img
              src={logo}
              alt="Trendsoft technologies Logo"
              className="md:h-14 h-8 w-fit "
            />{" "}
          </a>
          <p className="sm:text-[15px] font-normal">
            Established in 2021, Pivotal Accessibility was formed with the sole
            purpose of making the Digital World more inclusive
          </p>
        </div>

        <div className="space-y-2 w-full">
          <h2
            className="md:text-[20px] text-[14px] font-normal"
            id="QuickLinks"
          >
            Quick Links
          </h2>
          <ul className="space-y-1" aria-labelledby="QuickLinks">
            <li className="">
              <a
                href="/TrendSoft/WhoWeServe"
                className="hover:text-red focus:text-red duration-300 md:text-[14px]  text-[10px]"
              >
                Who We Serve
              </a>
            </li>

            <li className="">
              <a
                href="/TrendSoft/Career"
                className="hover:text-red focus:text-red  duration-300 md:text-[14px]  text-[10px]"
              >
                Careers
              </a>
            </li>

            <li className="">
              <a
                href="/TrendSoft/AboutPage"
                className="hover:text-red focus:text-red duration-300 md:text-[14px]  text-[10px]"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="hover:text-red focus:text-red duration-300 md:text-[14px]  text-[10px]"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2 w-full">
          <h2
            className="md:text-[20px] text-[14px] font-normal"
            id="ContactInfo"
          >
            Contact Info
          </h2>
          <ul className="space-y-1" aria-labelledby="ContactInfo">
            <li className="">
              <a
                href="mailto:info@trendsofttech.com"
                className=" duration-300 md:text-[14px] flex items-center gap-2  text-[10px]"
              >
                <MdOutlineEmail className=" duration-300 text-xl text-[16px]" />
                info@trendsofttech.com
              </a>
            </li>

            <li className="">
              <a
                href="mailto:bdm.ts@trendsofttech.com"
                className=" duration-300 md:text-[14px] flex items-center gap-2  text-[10px]"
              >
                <MdOutlineAttachEmail className="text-xl  duration-300   text-[16px]" />
                bdm.ts@trendsofttech.com
              </a>
            </li>
          </ul>

          <h2 className="md:text-[20px] text-[14px] font-normal">Follow Us</h2>
          <ul className="flex gap-3 ">
            <li className="rounded-full p-2 shadow-xl">
              <a
                href="https://www.facebook.com/TrendsoftTechnologies "
                aria-label="Trendsoft Technologies Facebook"
                target="_blank"
              >
                <FaFacebook className="md:text-2xl text-xl text-dark  hover:text-opacity-90 hover:scale-105" />
              </a>
            </li>
            <li className="rounded-full p-2 shadow-xl">
              <a
                href="https://www.instagram.com/trendsoft_technologies/"
                aria-label="Trendsoft Technologies Instagram"
                target="_blank"
                className="hover:bg-opacity-60"
              >
                <RiInstagramLine className="md:text-2xl text-xl text-dark  hover:text-opacity-90 hover:scale-105" />
              </a>
            </li>
            <li className="rounded-full p-2 shadow-xl">
              <a
                href="https://in.linkedin.com/company/trendsoft-technologies-private-limited"
                aria-label="Trendsoft Technologies Linkedin"
                target="_blank"
              >
                <FaLinkedin className="md:text-2xl text-xl text-dark  hover:text-opacity-90 hover:scale-105" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center border-t border-black py-2">
        © Copyright {new Date().getFullYear()}{" "}
        <a
          href="/"
          target="_blank"
          className="md:text-[13px] text-[10px] text-paragraph-color tracking-wide font-bold  "
        >
          Trendsoft Technologies
        </a>{" "}
        All Rights Reserved
      </p>
    </div>
  );
}
