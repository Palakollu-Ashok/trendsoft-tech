import PropTypes from "prop-types";

function Buttons(props) {
  const { button, link, target, arialabel } = props;
  return (
    <div className="h-full  pt-5">
      <a
        href={link}
        target={target}
        aria-label={arialabel}
        className="rounded-full   border   gap-1 sm:py-2 py-1  text-center w-fit bg-blue text-white px-5  hover:text-black hover:bg-light duration-300  focus:text-dark focus:bg-light"
      >
        {button}
      </a>
    </div>
  );
}

Buttons.propTypes = {
  button: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  arialabel: PropTypes.string.isRequired,
};

export default Buttons;
