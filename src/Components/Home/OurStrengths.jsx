import data from "../../Content/Home/OurStrengths.json";
export default function OurStrengths() {
  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3 md:py-36 py-12">
      <h2 className="text-center md:pb-8 pb-4">{data.heading}</h2>
      <ul className="md:flex grid sm:grid-cols-3 grid-cols-2 justify-center md:gap-28 sm:gap-14 gap-6 md:py-6 py-3  ">
        {data.list.map((d, i) => (
          <li
            className="grid place-items-center md:space-y-4 group space-y-2"
            key={i}
          >
            <img
              src={d.img}
              alt=""
              className="md:w-20 md:h-20 w-12 h-12 group-hover:-translate-y-2 duration-300 "
            />
            <p className="text-blue/80  font-extrabold text-center">
              {d.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
