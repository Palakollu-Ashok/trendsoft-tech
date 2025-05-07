import data1 from "../../../Content/OurSolutions/DigitalAccessibility/WebAccessibility/Card.json";

export default function WebAccessServices() {
  return (
    <div className="gap-5 md:px-6  xl:px-10 3xl:px-16 px-3">
      <div className=" ">
        <div className=" space-y-5 py-10">
          <h1 className="md:text-4xl text-center sm:text-2xl text-lg text-[rgb(12,35,70)]">
            {data1?.title}
          </h1>
          <p>{data1?.desc}</p>
        </div>
        <div className=" grid grid-cols-2 gap-5">
          {data1.list1.map((d, i) => (
            <div
              className="pb-3 md:space-y-3 space-y-3 border-t-2 border-gray-800"
              key={i}
            >
              <h2 className="text-[rgb(12,35,70)] mt-5 md:text-[18px] sm:text-[16px] text-[12px]  font-semibold font-Nunito">
                {d.title}
              </h2>
              {d?.list1 && (
                <ul className="space-y-1.5 ">
                  {d?.list1?.map((d2, i1) => (
                    <>
                      <li
                        key={i1}
                        className="md:text-[15px] text-[10px] text-paragraph-color tracking-wide font-Nunito"
                      >
                        {d2?.desc}
                      </li>
                    </>
                  ))}
                </ul>
              )}

              <div className="space-y-1.5 pb-2">
                {d?.list2?.map((d2, i1) => (
                  <>
                    <p
                      key={i1}
                      className="md:text-[15px] text-[10px] text-paragraph-color tracking-wide  font-Nunito"
                    >
                      {d2?.desc}
                    </p>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
