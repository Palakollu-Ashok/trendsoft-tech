import DigitalAccessibility from "../../OurSolutions/DigitalAccessibility/DigitalAccessibility";
import BredCrumb from "../../Common/BredCrumb";
import SolutionsBanner from "../../Common/SolutionsBanner";
import images from "../../../assets/DigitalAccessibility/BreadCrumb.png";
import { MetaTags } from "react-meta-tags";
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
      <MetaTags>
        <title>Trendsoft | Digital Accessibility Page</title>
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
