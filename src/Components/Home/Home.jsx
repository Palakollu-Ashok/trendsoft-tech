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
    <div className="" ref={ref}>
      <div
        className="w-full  grid  place-content-center items-center  place-items-center  lg:h-[80vh] sm:h-[40vh] h-[30vh]"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="space-y-5 grid items-center w-ful h-full">
          <Fade fade delay={200} when={visible}>
            <h1 className="sm:w-[500px] w-[225px]  leading-2">
              Your Accessibility Partner
            </h1>
          </Fade>
          <Fade fade delay={250} when={visible}>
            <p className="md:w-1/2 font-medium">
              Trust - clear way to Accessibility and Cyber Security Trendsoft
              Technologies - We take off on our shoulders to Reduce compliance
              and security risk
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Home;
