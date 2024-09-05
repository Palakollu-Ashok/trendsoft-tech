import DigitalAccessibility from "../../OurSolutions/DigitalAccessibility/DigitalAccessibility";
import BredCrumb from "../../Common/BredCrumb";
import SolutionsBanner from "../../Common/SolutionsBanner";
import images from "../../../assets/DigitalAccessibility/BreadCrumb.png";
export default function OurSolutionsPage() {
  const data = [
    {
      text: "Home",
      link: "/",
      divide: "/",
    },
    {
      text: "Our Solutions",
      link: "#",
      divide: "/",
    },
    {
      text: "Digital Accessibility",
      link: "#",
    },
  ];
  return (
    <>
      <SolutionsBanner
        BgImg={images}
        title="Digital Accessibility"
        desc="Digital accessibility ensures that digital content and tools are usable by everyone, including people with disabilities."
      />
      <div className="flex  md:px-6  xl:px-10 3xl:px-16 px-3 ">
        {data.map((d) => (
          <>
            <BredCrumb text={d.text} link={d.link} divide={d.divide} />
          </>
        ))}
      </div>
      <DigitalAccessibility />
    </>
  );
}
