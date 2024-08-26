import PropTypes from "prop-types";
import Buttons from "./Buttons";
export default function Banner(props) {
  const { BgImg, desc, desc1, bname, link } = props;
  return (
    <div className=" space-y-2 bg-gray-50 ">
      <div
        className="w-full grid  place-items-center h-full  md:px-6  xl:px-10 3xl:px-16 px-3"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="space-y-4 md:py-10 py-7">
          <h1 className="sm:w-[470px] font-serif w-full  md:leading-[55px]">
            {desc}
          </h1>

          <p className="md:w-1/2 font-medium">{desc1}</p>
          <Buttons button={bname} link={link} />
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  BgImg: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  desc1: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bname: PropTypes.string.isRequired,
};
