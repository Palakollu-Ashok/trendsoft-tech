import { useState, useEffect, useRef } from "react";
import { TbMenu2 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/logoB.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Disclosure, Popover } from "@headlessui/react";
import image from "../../assets/DigitalAccessibility/MobAccess.png";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const menuRef = useRef(null);
  const lastFocusableRef = useRef(null);

  const [activeTab, setActiveTab] = useState("DigtalAccessibilityServices");

  const content = {
    DigtalAccessibilityServices: {
      mainpath: "/DigitalAccessibility",
      services: [
        {
          id: 1,
          title: "Web Accessibility",
          path: "/TrendSoft/oursolutions/WebAccess-DigitalAccessibility",
        },
        {
          id: 2,
          title: "Mobile Accessibility",
          path: "/TrendSoft/oursolutions/Mobile-Acessibility",
        },
        {
          id: 3,
          title: "In Design Accessibility",
          path: "/TrendSoft/oursolutions/IndesignAccessibilitypage",
        },
      ],
    },
    TestingServices: {
      mainpath: "/TrendSoft/oursolutions/Testing",
      services: [
        {
          id: 1,
          title: "Functional Testing",
          path: "/TrendSoft/oursolutions/WebAccess-DigitalAccessibility",
        },
        {
          id: 2,
          title: "Performance Testing",
          path: "/TrendSoft/oursolutions/Mobile-Acessibility",
        },
        {
          id: 3,
          title: "Usability Accessibility",
          path: "/TrendSoft/oursolutions/IndesignAccessibilitypage",
        },
      ],
    },
    CyberSecurity: {
      mainpath: "/TrendSoft/oursolutions/CyberSecurity",

      services: [
        {
          id: 1,
          title: "Web App Security",
          path: "/TrendSoft/oursolutions/WebAccess-DigitalAccessibility",
        },
        {
          id: 2,
          title: "Mobile App Security",
          path: "/TrendSoft/oursolutions/Mobile-Acessibility",
        },
        {
          id: 3,
          title: "Api Security",
          path: "/TrendSoft/oursolutions/IndesignAccessibilitypage",
        },
        {
          id: 1,
          title: "Thick Client Security",
          path: "/TrendSoft/oursolutions/WebAccess-DigitalAccessibility",
        },
        {
          id: 2,
          title: "Secure Code Review",
          path: "/TrendSoft/oursolutions/Mobile-Acessibility",
        },
        {
          id: 3,
          title: "Database Security",
          path: "/TrendSoft/oursolutions/IndesignAccessibilitypage",
        },
      ],
    },
  };

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

  useEffect(() => {
    if (opened && lastFocusableRef.current) {
      lastFocusableRef.current.focus();
    }
  }, [opened]);

  const handleNav = () => {
    setOpened(!opened);
  };

  const handleLastItemKeyDown = (e, close, nextSelector) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      close();
      setOpened(false);
      const nextElement = document.querySelector(nextSelector);
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-light bg-yellow-50 w-full duration-500">
      <div className="flex gap-5 justify-between items-center md:py-10 md:p-2 h-[12vh] md:px-6 xl:px-10 3xl:px-16 px-3">
        <div>
          <a href="/" className="flex gap-0.5 justify-center items-center">
            <img
              src={logo}
              alt="Template logo"
              className="md:h-14 h-10 w-full"
            />
          </a>
        </div>

        <div className="flex justify-end items-center w-full">
          <div className="md:block hidden w-full">
            <ul className="flex justify-end gap-4">
              <li className="flex items-center">
                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button
                        className="inline-flex items-center focus:border-2 focus:rounded-md focus:border-dark text-sm/6 text-dark shadow-inner shadow-white/10 focus:outline-none"
                        aria-expanded={open}
                      >
                        <span className="sr-only">menu</span>
                        <p className="flex items-center md:text-[12px] text-[14px] lg:text-[16px] py-1">
                          Our Solutions
                          <MdKeyboardArrowDown
                            className={`text-2xl ${open ? "rotate-180" : ""}`}
                          />
                        </p>
                      </Popover.Button>

                      <Popover.Panel
                        transition
                        anchor="bottom end"
                        className="absolute flex gap-5 top-full mt-6 left-0 w-full bg-gray-200 origin-top-right rounded-xl border border-white/5 p-5 text-sm/6 transition duration-100 ease-out z-50"
                      >
                        <div className="w-1/2">
                          <h2 className="mb-5">Our Services</h2>
                          <hr className="border-black" />
                          <ul className="list-none w-full grid grid-cols-2 gap-10">
                            <li>
                              <a
                                tabIndex={0}
                                className="group relative flex items-center gap-2 rounded-lg py-1.5 cursor-pointer"
                                onClick={() =>
                                  setActiveTab("DigtalAccessibilityServices")
                                }
                              >
                                <img
                                  src={image}
                                  alt="Images"
                                  className="w-[250px] h-[150px] object-cover rounded-xl"
                                />
                                <p className="absolute bottom-5 flex items-center  text-white font-semibold">
                                  Digital Accessibility Services
                                  <IoArrowForwardCircleOutline />
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                tabIndex={0}
                                className="group relative flex items-center gap-2 rounded-lg py-1.5 cursor-pointer"
                                onClick={() => setActiveTab("TestingServices")}
                              >
                                <img
                                  src={image}
                                  alt="Images"
                                  className="w-[250px] h-[150px] object-cover rounded-xl"
                                />
                                <p className="absolute bottom-5 flex items-center  text-white font-semibold">
                                  Testing Services
                                  <IoArrowForwardCircleOutline />
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                tabIndex={0}
                                className="group relative flex items-center gap-2 rounded-lg py-1.5 cursor-pointer"
                                onClick={() => setActiveTab("CyberSecurity")}
                              >
                                <img
                                  src={image}
                                  alt="Images"
                                  className="w-[250px] h-[150px] object-cover rounded-xl"
                                />
                                <p className="absolute bottom-5 flex items-center text-white font-semibold">
                                  Cyber Security
                                  <IoArrowForwardCircleOutline />
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="w-1/2 ">
                          <div className="flex justify-between items-center mb-5">
                            <h2>We Offer</h2>
                            <a
                              href={content[activeTab]?.mainpath}
                              className="text-dark font-semibold flex items-center"
                            >
                              All Services{" "}
                              <span className="text-lg">
                                <HiOutlineArrowSmallRight />
                              </span>
                            </a>
                          </div>
                          <hr className="border-black" />
                          <ul className="grid grid-cols-3 mt-5 ">
                            {activeTab &&
                              content[activeTab].services.map(
                                ({ id, title, path }) => (
                                  <li key={id} className="py-1 mt-5">
                                    <a href={path} className="text-dark">
                                      {title}
                                    </a>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </li>

              <li className="flex items-center">
                <a
                  href="/TrendSoft/WhoWeServe"
                  className="flex items-center text-[12px] lg:text-[16px]"
                  ref={lastFocusableRef}
                >
                  Who we Serve
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
                  href="/TrendSoft/about-Us"
                  className="text-[12px] lg:text-[16px] flex items-center"
                >
                  About
                </a>
              </li>
              <li className="flex items-center border-2 p-1 border-red">
                <a
                  href="/TrendSoft/ContactUs"
                  className="text-[12px] lg:text-[16px]"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden md:ml-4">
            <button
              onClick={handleNav}
              aria-label={opened ? "Close menu" : "Open menu"}
              className="text-light flex bg-[rgb(12,28,56)]"
            >
              {opened ? (
                <RxCross2 className="md:h-14 h-10 w-8 p-1" />
              ) : (
                <TbMenu2 size={32} className="md:h-14 h-10 p-1 w-8" />
              )}
            </button>
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
            className="fixed top-0 z-50 left-0 w-full pt-5 p-2 h-screen md:hidden block bg-[rgb(12,28,56)] text-lg space-y-6"
          >
            <div className="flex justify-between  text-light px-2  font-Nunito">
              <div>
                <div className="mb-5">
                  <a href="/" className="gap-0.5">
                    <img src={logo} alt="Template logo" className="h-14" />
                  </a>
                </div>
                <ul className="[&_li]:text-light space-y-4">
                  <li>
                    <a href="/TrendSoft/WhoWeServe" ref={lastFocusableRef}>
                      <span className="text-[14px]">Who we Serve</span>
                    </a>
                  </li>

                  <li>
                    <a href="/TrendSoft/Career">
                      <span className="text-[14px]">Careers</span>
                    </a>
                  </li>

                  <li>
                    <a href="/TrendSoft/about-Us">
                      <span className="text-[14px]">About</span>
                    </a>
                  </li>

                  <li>
                    <a href="/TrendSoft/ContactUs">
                      <span className="text-[14px]">Get Started</span>
                    </a>
                  </li>

                  <li className="w-full">
                    <Disclosure>
                      {({ close }) => (
                        <>
                          <Disclosure.Button className="flex w-fit">
                            <li className="flex items-center">
                              <span className="sr-only">menu </span>
                              <a className=" flex items-center  md:text-[12px] text-[14px] lg:text-[16px] py-1">
                                Our Solutions
                                <MdKeyboardArrowDown className="text-3xl group-hover:rotate-180" />
                              </a>
                            </li>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 text-white space-y-1">
                            <li className="list-none">
                              <a
                                href="/DigitalAccessibility"
                                className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3"
                              >
                                Digital Accessibility Services
                              </a>
                            </li>
                            <li className="list-none">
                              <a
                                href="/TrendSoft/oursolutions/Testing"
                                className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3"
                              >
                                Testing Services
                              </a>
                            </li>
                            <li className="list-none">
                              <a
                                href="/TrendSoft/oursolutions/CyberSecurity"
                                className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3"
                                onKeyDown={(e) =>
                                  handleLastItemKeyDown(
                                    e,
                                    close,
                                    '[href="/TrendSoft/WhoWeServe"]'
                                  )
                                }
                              >
                                Cyber Security
                              </a>
                            </li>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </li>
                </ul>
              </div>

              <div className="md:hidden md:ml-4">
                <button
                  onClick={handleNav}
                  aria-label={opened ? "Close menu" : "Open menu"}
                  className="text-light flex border-2 border-light focus:border focus:border-red bg-[rgb(12,28,56)]"
                >
                  {opened ? (
                    <RxCross2 className="md:h-14 h-10 w-8 p-1" />
                  ) : (
                    <TbMenu2 size={32} className="md:h-14 h-10 p-1 w-8" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
