import Bg from "../../assets/Home/Whoweserve.jpg";
export default function WhoWeServe() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      >
        <div className="md:w-1/2 grid justify-start place-content-center h-full  md:px-6  xl:px-10 3xl:px-16 px-3">
          <h1 className="text-dark h-full  items-center">
            We Understand Your Needs
          </h1>
        </div>
      </div>
    </div>
  );
}
