import PropTypes from "prop-types";

export default function Empower(props) {
  const { img, heading, desc, desc1 } = props;

  return (
    <div className="md:flex gap-2 py-3 xl:gap-10 lg:pb-14  md:px-6  xl:px-10 3xl:px-16 px-3">
      <img src={img} alt="" className="md:w-1/3 h-[300px] w-full  " />
      <div className="w-full grid  h-full  sm:space-y-4 space-y-4 xl:px-10 md:px-4">
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
