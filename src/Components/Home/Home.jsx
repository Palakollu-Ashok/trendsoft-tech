

import React from "react";
import BgImg from "../../assets/Home/banner1.png";
import BgImg1 from "../../assets/Home/banner2.png";

import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
import Button from "../Common/Button";
import Buttons from "../Common/Buttons";
function Home() {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div className="" ref={ref} id="mainContent" role="main">
      <div className="relative">
        <img src={BgImg} alt="" className="md:block hidden h-[80vh] w-full" />

        <img src={BgImg1} alt="" className="md:hidden block  w-full" />

        <div className="md:space-y-5 space-y-2  absolute top-0 md:w-1/2 grid justify-start place-content-center h-full md:px-6  xl:px-10 3xl:px-16 px-3 ">
          <h1 className="leading-2 text-light ">Your Accessibility Partner</h1>
          <p className="font-medium text-light">
            Trust - clear way to Accessibility and Cyber Security Trendsoft
            Technologies - We take off on our shoulders to Reduce compliance and
            security risk
          </p>
          <Buttons button="Request For a Demo" link="#" />
        </div>
      </div>
    </div>
  );
}

export default Home;
