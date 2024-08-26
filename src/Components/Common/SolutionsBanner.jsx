import React from "react";
import PropTypes from "prop-types";

export default function SolutionsBanner(props) {
  // Destructure the props to get BgImg, title, and desc
  const { BgImg, title, desc } = props;

  // Define the background style conditionally based on BgImg
  const backgroundStyle = BgImg
    ? {
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <div style={backgroundStyle}>
      <div className="space-y-2 bg-gray-50">
        <div className="w-full place-items-center h-full md:px-6 xl:px-10 3xl:px-16 px-3">
          <div className="space-y-4 md:py-10 py-7">
            <h1 className="sm:w-[470px] font-serif w-full md:leading-[50px]">
              {title}
            </h1>
            <p className="md:w-1/2 font-medium">{desc}</p>
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
