import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CommonCard(props) {
  const { heading, description, link, img, text } = props;

  return (
    <div className="w-full   font-Nunito my-2 hover:shadow-md duration-300  bg-light h-full">
      <img src={img} className="sm:h-[250px] h-[200px] w-full " />

      <div className="md:p-5 p-2">
        <div className=" font-Nunito space-y-4 ">
          <div className="h-full space-y-2">
            <h3>{heading}</h3>
            <p>{description}</p>
          </div>
        </div>
        <a
          href={link}
          className=" w-fit h-full self-end grid justify-end place-items-center"
        >
          <ul className="pt-2 hover:text-red text-blue  w-fit hover:underline duration-300 font-normal">
            {text}
          </ul>
        </a>
      </div>
    </div>
  );
}

CommonCard.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default CommonCard;
