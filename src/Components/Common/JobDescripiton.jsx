import PropTypes from "prop-types";

export default function JobDescripiton({ title, subheading, data }) {
  return (
    <div>
      <div className="md:px-6 xl:px-10 3xl:px-16 px-3  py-10 space-y-5">
        <h2 className="text-blue">{title}</h2>
        <h3 className="text-red">{subheading}</h3>
        <ul className="space-y-5">
          {data.map((value, id) => (
            <li key={id}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
JobDescripiton.propTypes = {
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};
