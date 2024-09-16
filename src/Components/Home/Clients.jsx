import data from "../../Content/Home/Clients.json";
export default function Clients() {
  return (
    <div className="md:py-36 py-5  md:px-6 xl:px-10 3xl:px-16 px-3">
      <h2 className="text-center md:pb-10 md:py-3 pb-3">{data.heading}</h2>
      <ul className="grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center  mx-auto md:gap-10 gap-5">
        {data.list.map((d, i) => (
          <li key={i}>
            <img src={d.img} key={i} alt={d.alt} className="md:w-28 w-20    " />
          </li>
        ))}
      </ul>
    </div>
  );
}
