// src/Carousel.js

import React, { useState } from "react";
import item from "../../Content/Home/Clients.json"; // Make sure the path is correct
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 4;

  const images = item.list; // Assuming item.list is an array of image URLs

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? images.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <img src={image.img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
