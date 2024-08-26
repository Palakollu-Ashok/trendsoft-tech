import React from "react";
import PropTypes from "prop-types";

export default function Empower(props) {
  const { img, heading, desc, desc1 } = props;

  return (
    <div className="flex gap-2 py-3 xl:gap-10 justify-center items-center md:px-0 px-3">
      <img
        src={img}
        alt=""
        className="w-1/2 xl:h-[700px] h-full sm:block hidden"
      />
      <div className="md:w-1/2 h-full  sm:space-y-6 space-y-4 xl:px-10 md:px-4">
        <h2>{heading}</h2>

        <p className="tracking-wide">{desc}</p>
        <p className="tracking-wide">{desc1}</p>
      </div>
    </div>
  );
}
Empower.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  desc1: PropTypes.string.isRequired,
};
