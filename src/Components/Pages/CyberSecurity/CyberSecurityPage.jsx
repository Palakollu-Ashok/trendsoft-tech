import BredCrumb from "../../Common/BredCrumb";
import CyberSecurity from "../../OurSolutions/CyberSecurity/CyberSecurity";
import SolutionsBanner from "../../Common/SolutionsBanner";
import images from "../../../assets/DigitalAccessibility/BreadCrumb.png";
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
