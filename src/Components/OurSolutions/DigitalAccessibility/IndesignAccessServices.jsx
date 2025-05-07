import data1 from "../../../Content/OurSolutions/DigitalAccessibility/IndesignAccessibility/Card.json";

export default function IndesignAccessServices() {
  return (
    <div className="md:px-6  xl:px-10 3xl:px-16 px-3 ">
      <div className="space-y-5 py-10">
        <h1 className="md:text-4xl text-center sm:text-2xl text-lg text-[rgb(12,35,70)]">
          {data1.title}
        </h1>
        <p>{data1.desc}</p>
      </div>
      <ul className="grid grid-cols-2 gap-10">
        {data1.list.map((d, i) => (
          <li className="pb-3 space-y-3 border-t  border-gray-600 " key={i}>
            <h2 className="text-[rgb(12,35,70)] md:text-[18px] sm:text-[16px] text-[12px] mt-4   font-semibold font-Nunito">
              {d.title}
            </h2>
            {d?.list1?.map((d2, i1) => (
              <div key={i1}>
                <p>{d2.desc}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
