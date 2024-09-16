import Career from "../Career/Career";
import AboutCareer from "../Career/AboutCareer";
import CareersBanner from "../Career/CareersBanner";
import { MetaTags } from "react-meta-tags";

export default function CareerPage() {
  return (
    <>
      {/* <SolutionsBanner
        title="Careers"
        desc="Looking for bright minds to join us"
        BgImg={img}
      /> */}
      <MetaTags>
        <title>Trendsoft | Careers Page</title>
        {/* <meta name="description" content="This is my page description." />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta
          property="og:description"
          content="This is the Open Graph description."
        /> */}
      </MetaTags>
      <CareersBanner />
      <AboutCareer />
      <Career />
    </>
  );
}
