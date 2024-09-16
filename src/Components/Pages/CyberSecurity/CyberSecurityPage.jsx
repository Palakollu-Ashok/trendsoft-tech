import BredCrumb from "../../Common/BredCrumb";
import CyberSecurity from "../../OurSolutions/CyberSecurity/CyberSecurity";
import SolutionsBanner from "../../Common/SolutionsBanner";
import images from "../../../assets/DigitalAccessibility/BreadCrumb.png";
import { MetaTags } from "react-meta-tags";
export default function CyberSecurityPage() {
  const data = [
    {
      text: "Home",
      link: "/",
      divide: "/",
    },
    {
      text: "Our Solutions ",
      link: "#",
      divide: "/",
    },
    {
      text: "Cyber Security",
      link: "#",
    },
  ];
  return (
    <>
      <MetaTags>
        <title>Trendsoft | Cyber Security Page</title>
        {/* <meta name="description" content="This is my page description." />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta
          property="og:description"
          content="This is the Open Graph description."
        /> */}
      </MetaTags>
      <SolutionsBanner
        BgImg={images}
        title="Cyber Security "
        desc="Cybersecurity involves protecting digital systems, networks, and data from attacks, breaches, and unauthorized access."
      />
      <div className="flex  md:px-6  xl:px-10 3xl:px-16 px-3">
        {data.map((d, i) => (
          <>
            <BredCrumb text={d.text} link={d.link} divide={d.divide} />
          </>
        ))}
      </div>
      <CyberSecurity />
    </>
  );
}
