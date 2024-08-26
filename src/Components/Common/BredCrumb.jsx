import React from "react";
import PropTypes from "prop-types";
export default function BredCrumb(props) {
  const { link, text, divide } = props;
  return (
    <div className="md:py-5 py-2">
      <nav className="">
        <ol className=" w-fit">
          <li className="flex items-center px-1 gap-1 text-blue">
            <a href={link} className="text-orange font-semibold">{text}</a>
            {divide}
          </li>
        </ol>
      </nav>
    </div>
  );
}
BredCrumb.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  divide: PropTypes.string.isRequired,
};
