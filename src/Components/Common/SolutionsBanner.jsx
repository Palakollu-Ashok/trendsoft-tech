import PropTypes from "prop-types";

export default function SolutionsBanner(props) {
  // Destructure the props to get BgImg, title, and desc
  const { BgImg, title, desc } = props;

  return (
    <div
      className="w-full  h-[30vh]  "
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="space-y-2 ">
        <div className="w-full place-items-center h-full md:px-6 xl:px-10 3xl:px-16 px-3">
          <div className="space-y-4 md:py-10 py-7">
            <h1 className="sm:w-[470px] font-serif w-full md:leading-[50px]  text-white">
              {title}
            </h1>
            <p className="md:w-1/2 font-medium text-white">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
SolutionsBanner.propTypes = {
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  BgImg: PropTypes.string,
};
