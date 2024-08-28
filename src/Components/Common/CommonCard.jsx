import PropTypes from "prop-types";

function CommonCard(props) {
  const { heading, description, link, img, text, color } = props;

  return (
    <li className="w-full  grid place-items-center justify-center lg:p-5 sm:p-3 p-2 bg-light space-y-4 font-Nunito my-2 hover:shadow-md duration-300   h-full">
      <img src={img} className="sm:h-[250px] h-[200px] w-full object-cover" />

      <div className="w-full grid h-full ">
        <div className=" font-Nunito space-y-4 h-full">
          <div className="h-full space-y-2 grid justify-center place-items-center">
            <h3 className="text-dark text-center">{heading}</h3>
            <p className="text-center text-dark">{description}</p>
          </div>
        </div>
      </div>
      <div className=" h-fit grid">
        {link && text ? (
          <a
            href={link}
            className="rounded-full w-full  p-3 lg:px-5 px-3  group flex items-center bg-blue    border border-blue  hover:text-blue text-light  hover:bg-light  duration-300 focus:bg-light focus:text-blue"
          >
            {text}
          </a>
        ) : null}
      </div>
    </li>
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
