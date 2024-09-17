import { GoArrowRight } from "react-icons/go";
import data from "../../Content/Career/AbouteCreer.json";
export default function AboutCareer() {
  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3  py-10">
      <div className="lg:flex space-y-5 lg:space-y-0  w-full h-full lg:gap-10">
        {data.list1.map((d, i) => (
          <div key={i} className="space-y-2 lg:w-1/2 h-full">
            <h2>{d.title}</h2>
            <p>{d.desc}</p>
            <ul className="grid sm:grid-cols-2 md:gap-10">
              {d?.list?.map((d1, i1) => (
                <li key={i1} className="bg-gray-200 p-4 space-y-5 rounded-md">
                  <h3 className="text-blue">{d1.heading}</h3>
                  <p>{d1.role}</p>
                  <p>{d1.location}</p>
                  <a
                    href={d1.Route}
                    className="flex gap-2 items-center text-sm hover:text-red "
                  >
                    More Details <GoArrowRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
