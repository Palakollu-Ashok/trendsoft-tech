import data1 from "../../../Content/OurSolutions/DigitalAccessibility/WebAccessibility/Card.json";

export default function FAQ() {
  return (
    <div className="flex flex-col md:flex-row items-center py-10 bg-[#1F4BA0]">
      <div className="md:w-1/2 flex justify-center items-center p-8 py-16  h-full">
        <div className="rounded-full overflow-hidden w-[400px] h-[400px] flex justify-center items-center bg-white">
          <img
            src={data1.faq.image}
            alt="FAQ Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="md:w-1/2  text-white px-10 py-16 h-full flex flex-col justify-center">
        <h2 className="text-4xl font-semibold mb-6  text-white">
          {data1.faq.title}
        </h2>
        <ul className="space-y-6">
          {data1.faq.list1.map((value, id) => (
            <li
              key={id}
              className="text-lg flex justify-between items-center  text-white "
            >
              {value.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
