import React from "react";
import Bg from "../../assets/Home/Home1.jpg";
export default function WhoWeServe() {
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
      <h1 className="text-dark h-full flex justify-center items-center">We Understand Your Needs</h1>
    </div>
  );
}
