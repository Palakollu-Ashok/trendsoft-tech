import Bg from "../../assets/Careers/Careers.jpg";
export default function CareersBanner() {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
      }}
    >
      <div className="md:w-1/2 grid justify-start place-content-center h-full text-white md:px-6 space-y-5  xl:px-10 3xl:px-16 px-3">
        <h1 className=" h-full  items-center font-semibold text-gray-600">
          Careers
        </h1>
        <p className="text-gray-600">Looking for bright minds to join us</p>
      </div>
    </div>
  );
}
