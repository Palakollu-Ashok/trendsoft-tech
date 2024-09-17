import PropTypes from "prop-types";
import Buttons from "./Buttons";

export default function JoinTeam({ name }) {
  return (
    <div className="2xl:px-[160px] md:[80px] sm:px-[50px] px-[10px] md:pt-10 pt-5">
      <div className="bg-[#2A3966] flex items-center justify-between md:p-8 p-4 ">
        <h3 className="text-white">{name}</h3>
        <a href="/contact-us">
          <Buttons button="Contact Us" />
        </a>
      </div>
    </div>
  );
}
JoinTeam.propTypes = {
  name: PropTypes.string.isRequired,
};
