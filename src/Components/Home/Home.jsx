import React from "react";
import BgImg from "../../assets/Home/Home1.jpg";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

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
      <div
        className="w-full lg:h-[80vh] sm:h-[40vh] h-[30vh]"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="space-y-5  md:w-1/2 grid justify-start place-content-center h-full md:px-6  xl:px-10 3xl:px-16 px-3">
          <h1 className="leading-2">Your Accessibility Partner</h1>

          <p className="font-medium">
            Trust - clear way to Accessibility and Cyber Security Trendsoft
            Technologies - We take off on our shoulders to Reduce compliance and
            security risk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
