import React from "react";
import data1 from "../../../Content/OurSolutions/CyberSecurity/Securecodereview/Card.json";

export default function Securecodereview() {
  return (
    <div className="md:px-6  xl:px-10 3xl:px-16 px-3 ">
      <div className="space-y-5 py-10">
        <h1 className="md:text-4xl text-center sm:text-2xl text-lg text-[rgb(12,35,70)]">
          {data1.title}
        </h1>
        {data1?.list3?.map((d3, i3) => (
          <>
            <p key={i3}>{d3.desc}</p>
          </>
        ))}
      </div>

      <div>
        <img src={data1.img} alt="" />
      </div>
      <div className="">
        {data1.list.map((d, i) => (
          <div className="pb-3 space-y-3" key={i}>
            <h2 className="text-[rgb(12,35,70)] md:text-[18px] sm:text-[16px] text-[12px]  font-semibold font-Nunito">
              {d.title}
            </h2>
            {d?.list1?.map((d2, i1) => (
              <div>
                <p key={i1}>{d2.desc}</p>
              </div>
            ))}

            {d?.list2 && (
              <ul className="space-y-1.5">
                {d?.list2?.map((d2, i1) => (
                  <>
                    <li
                      key={i1}
                      className="md:text-[15px] text-[10px] text-paragraph-color tracking-wide  font-Nunito"
                    >
                      {d2?.desc}
                    </li>
                  </>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
