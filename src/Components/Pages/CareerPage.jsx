import Career from "../Career/Career";
import AboutCareer from "../Career/AboutCareer";
import CareersBanner from "../Career/CareersBanner";

export default function CareerPage() {
  return (
    <>
      {/* <SolutionsBanner
        title="Careers"
        desc="Looking for bright minds to join us"
        BgImg={img}
      /> */}
      <CareersBanner />
      <AboutCareer />
      <Career />
    </>
  );
}
