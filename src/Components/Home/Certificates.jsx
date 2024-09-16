import Button from "../Common/Button";
import button from "../../Content/Home/Buttons.json";
import Bgimg from "../../assets/Home/background.png";

export default function Certificates() {
  return (
    <div
      style={{
        backgroundImage: `url(${Bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:px-6 xl:px-10 3xl:px-16  md:space-y-4 space-y-2  md:py-32 py-3    h-full ">
        <h2 className="text-center text-light">Certifications</h2>

        <ul className="md:flex gap-3 md:justify-center md:py-10 sm:py-5 py-3 xl:gap-28 md:gap-14 space-y-8 md:space-y-0">
          {button.list.map((d, i) => (
            <li key={i}>
              <Button
                key={i}
                button={d.button}
                link={d.link}
                Img={d.img}
                target={d.target ? d.target : "_self"}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// <div className="">
//       <div className="relative    ">
//         <img src={Bgimg} alt="" className="h-[50vh] w-full" />

//         <div className="absolute top-[30%] w-full  h-full">
//           <div>
//             <h2 className="text-center text-light">Certifications</h2>
//             <ul className="md:flex gap-3 md:justify-center xl:gap-28 md:gap-14 space-y-8 md:space-y-0">
//               {button.list.map((d, i) => (
//                 <li key={i}>
//                   <Button key={i} button={d.button} link={d.link} Img={d.img} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
