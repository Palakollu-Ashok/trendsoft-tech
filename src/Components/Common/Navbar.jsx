import { useState, useEffect, useRef } from "react";
import { TbMenu2 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2, RxCrosshair2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logoB.avif";
import { MdKeyboardArrowDown } from "react-icons/md";
import OurSolutions from "./OurSolutions";
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
    <div className="sticky top-0 z-50 bg-light  bg-yellow-50   w-full  duration-500">
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
                <OurSolutions />
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

              
              {/* <li className="flex items-center">
                <a href="/" className="text-[12px] lg:text-[16px]">
                  Certifications
                </a>
              </li> */}
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
          {/* <div className="relative">
            <p className="absolute grid place-content-center bg-red  text-[24px]  -top-1 left-3  text-light rounded-full w-[80%] h-[80%] text-xs"></p>
          </div> */}
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
            <div className="flex text-light bg-pinklight p-2 justify-end w-full font-Nunito">
              {/* <button>Menu</button> */}
            </div>
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
              {/* <NavLink to="/contact">Contact Us</NavLink> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const currentPath = typeof window === "undefined" ? "/" : location?.pathname;

  return (
    <a href={to}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        className={`${
          currentPath === to && " !text-secondary rounded-md"
        }  hover:!text-secondary font-semibold text-light uppercase `}
      >
        {children}
      </motion.p>
    </a>
  );
};

export default Navbar;
