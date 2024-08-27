import React from "react";
import Button from "../Common/Button";
import button from "../../Content/Home/Buttons.json";
export default function Certificates() {
  return (
    <div>
      <div className="md:px-6 xl:px-10 3xl:px-16 py-16 space-y-4 bg-[#F7F7F7]    h-full ">
        <h2 className="text-center">Certifications</h2>
        <ul className="md:flex gap-3 md:justify-center xl:gap-28 md:gap-14 space-y-8 md:space-y-0">
          {button.list.map((d, i) => (
            <li key={i}>
              <Button key={i} button={d.button} link={d.link} Img={d.img} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
