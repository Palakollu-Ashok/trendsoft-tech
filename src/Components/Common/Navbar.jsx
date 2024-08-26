import { useState, useEffect, useRef } from "react";
import { TbMenu2 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/logoB.avif";
import { MdKeyboardArrowDown } from "react-icons/md";
import OurSolutions from "./OurSolutions";
import { Popover } from "@headlessui/react";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpened(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleNav = () => {
    setOpened(!opened);
  };

  return (
    <div className="sticky top-0 z-40 bg-light  bg-yellow-50   w-full  duration-500">
      <div className="flex gap-5 justify-between items-center md:py-10 md:p-2 h-[12vh]  md:px-6 xl:px-10 3xl:px-16 px-3 ">
        <div>
          <a href="/" className="flex gap-0.5 justify-center items-center  ">
            <img
              src={logo}
              alt="Template logo"
              className="md:h-14 h-10 w-full "
            />
          </a>
        </div>

        <div className="flex justify-end items-center    w-full   ">
          <div className="md:hidden md:ml-4">
            <button
              onClick={handleNav}
              className="text-light flex bg-[rgb(12,28,56)]"
            >
              {opened ? (
                <RxCross2 className=" md:h-14 h-10 w-8 p-1 " />
              ) : (
                <TbMenu2 size={32} className="md:h-14 h-10 p-1 w-8 " />
              )}
            </button>
          </div>

          <div className=" md:block hidden  w-full">
            <ul className="flex  justify-end  gap-4 ">
              <li className="flex items-center">
                <Popover className="relative">
                  <Popover.Button className="inline-flex items-center text-sm/6  text-white shadow-inner shadow-white/10 focus:outline-none   data-[focus]:outline-1 data-[focus]:outline-white">
                    <li className="flex items-center">
                      <span className="sr-only">menu </span>
                      <a
                        href="/"
                        className=" flex items-center  md:text-[12px] text-[14px] lg:text-[16px] py-1"
                      >
                        Our Solutions
                        <MdKeyboardArrowDown className="text-3xl group-hover:rotate-180" />
                      </a>
                    </li>
                  </Popover.Button>

                  <ul className="list-none w-full">
                    <Popover.Panel
                      transition
                      anchor="bottom end"
                      className=" md:z-50 z-50 bg-white text-dark  origin-top-right rounded-xl border border-white/5  p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 absolute"
                    >
                      <li className="list-none">
                        <a
                          href="/DigitalAccessibility"
                          className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3 "
                        >
                          Digital Accessibility Services
                        </a>
                      </li>
                      <li className="list-none">
                        <a
                          href="/TrendSoft/oursolutions/Testing"
                          className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3 "
                        >
                          Testing Services
                        </a>
                      </li>
                      <li className="list-none">
                        <a
                          href="/TrendSoft/oursolutions/CyberSecurity"
                          className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3 "
                        >
                          Cyber Security
                        </a>
                      </li>
                    </Popover.Panel>
                  </ul>
                </Popover>
              </li>

              <li className="flex items-center">
                <a
                  href="/TrendSoft/WhoWeServe"
                  className=" flex items-center  text-[12px] lg:text-[16px]"
                >
                  Who we Serve
                  <MdKeyboardArrowDown className="text-3xl group-hover:rotate-180" />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="/TrendSoft/Career"
                  className="text-[12px] lg:text-[16px]"
                >
                  Careers
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="/TrendSoft/AboutPage"
                  className="text-[12px] lg:text-[16px]  flex items-center   "
                >
                  About
                  <MdKeyboardArrowDown className="text-3xl group-hover:rotate-180" />
                </a>
              </li>
              <li className="flex items-center border-2 p-1 border-red ">
                <a
                  href="/TrendSoft/ContactUs"
                  className="text-[12px] lg:text-[16px]"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {opened && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ stiffness: 200, damping: 20 }}
            className="fixed top-0 z-50 left-0 w-2/3 h-screen md:hidden block  bg-[rgb(12,28,56)] text-lg  space-y-6"
          >
            <div className="flex flex-col text-light  px-2  space-y-4 font-Nunito">
              <ul className="[&_li]:text-light">
                <li>
                  <a href="/TrendSoft/WhoWeServe">
                    <span className="  text-[14px]">Who we Serve</span>
                  </a>
                </li>

                <li>
                  <a href="/TrendSoft/Career" className="">
                    <span className=" text-[14px]">Careers</span>
                  </a>
                </li>

                <li>
                  <a href="/TrendSoft/AboutPage">
                    <span className="  text-[14px]">About</span>
                  </a>
                </li>

                <li>
                  <a href="/TrendSoft/ContactUs" className="">
                    <span className=" text-[14px]">Get Started</span>
                  </a>
                </li>

                <li className="flex items-center w-full">
                  <OurSolutions />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
