import data from "../../Content/Home/AccessibilityJourney.json";

import Bgimg from "../../assets/Home/banner2.png";
export default function AccessibilityJourney() {
  return (
    <div
      className="md:px-6 xl:px-10 3xl:px-16 px-3 space-y-8  md:py-36 py-12   "
      style={{
        backgroundImage: `url(${Bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid justify-center place-items-center md:space-y-14 space-y-7">
        <div className="space-y-3 ">
          <h2 className="md:text-[24px] text-[16px] text-center text-light">
            {data.title}
          </h2>
          <p className="text-center text-light">{data.desc}</p>
        </div>
        <div className="justify-between md:gap-24 sm:gap-10 gap-5 ">
          <ul className="grid sm:grid-cols-3 grid-cols-1  justify-between xl:gap-20 gap-5 ">
            {data?.list.map((d, i) => (
              <li
                key={i}
                className="grid justify-center place-items-center rounded-2xl p-3 space-y-2 bg-light"
              >
                <img
                  src={d?.img}
                  alt=""
                  className="sm:w-20 sm:h-20 w-14 h-14"
                />

                <p className="text-center">{d?.headline}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
