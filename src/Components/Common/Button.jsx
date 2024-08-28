import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { button, link, Img } = props;
  return (
    <div className="grid h-full  md:px-0 md:pt-8   xl:px-0 px-3 mx-auto max-w-8xl">
      <a
        href={link}
        target="_blank"
        className="rounded-full w-full xl:text-[16px] sm:text-[12px] text-[10px]  border   flex items-center justify-center gap-1  text-center hover:text-light  bg-light text-black px-5 md:py-3 py-1 hover:bg-[#6989e7] duration-300 focus:bg-[#6989e7]  focus:text-light"
      >
        {button}
        <img src={Img} alt="" className="w-6 mb-1 " />
      </a>
    </div>
  );
}

Button.propTypes = {
  button1: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  Img: PropTypes.string.isRequired,
};

export default Button;
