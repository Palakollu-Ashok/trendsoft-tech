import { useRef, useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import image1 from "../../assets/Home/Cyber.jpg";
import image2 from "../../assets/Home/DatabaseSecurity.jpg";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 because of cloned slides
  const [slidesToShow, setSlidesToShow] = useState(1); // Number of slides visible at a time
  const [isTransitioning, setIsTransitioning] = useState(false); // Track if transition is happening
  const slidesContainerRef = useRef(null);

  const slides = [
    {
      id: 1,
      img: image1,
      title: "Trust - clear way to Accessibility and Cyber Security.",
      page: "/contactUs/",
      slidescount: "1 of 4",
      CTA: "Contact",
    },
    {
      id: 2,
      img: image2,
      title: "Accessibility Audits and Compliance.",
      page: "/services/webAccessibility-service-india/",
      slidescount: "2 of 4",
      CTA: "Learn More",
    },
    {
      id: 3,
      img: image1,
      title: "End-to-end QA and software testing services.",
      page: "/services/testing/",
      slidescount: "3 of 4",
      CTA: "Learn More",
    },
    {
      id: 4,
      img: image2,
      title: "Experience the simplified innovative Digital safety world.",
      page: "/services/cyberSecurity/webAppSecurity/",
      slidescount: "4 of 4",
      CTA: "Learn More",
    },
  ];

  // Create clones of the first and last slides
  const slidesWithClones = [
    slides[slides.length - 1], // Clone of the last slide at the beginning
    ...slides,
    slides[0], // Clone of the first slide at the end
  ];

  const prevSlide = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition

    setIsTransitioning(true);
    const isAtFirstSlide = currentIndex === 0;
    const newIndex = isAtFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition

    setIsTransitioning(true);
    const isAtLastSlide = currentIndex === slidesWithClones.length - 1;
    const newIndex = isAtLastSlide ? slides.length : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Adjust the number of slides to show based on window width
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSlidesToShow(3); // Show 3 slides for large screens
      } else if (window.innerWidth > 768) {
        setSlidesToShow(2); // Show 2 slides for medium screens
      } else {
        setSlidesToShow(1); // Show 1 slide for small screens
      }
    };

    handleResize(); // Call initially to set the initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Handle transition end to switch from clone slide to the real slide
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setCurrentIndex(slides.length); // Jump to the last slide (actual)
      } else if (currentIndex === slidesWithClones.length - 1) {
        setCurrentIndex(1); // Jump to the first slide (actual)
      }
    };

    // Attach transition end event listener
    const container = slidesContainerRef.current;
    container.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      container.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

  return (
    <div
      className="relative group w-full h-[60vh] flex items-center justify-center overflow-hidden"
      aria-roledescription="carousel"
      role="region"
    >
      {/* Left Arrow */}
      <button
        className="absolute top-[50%] z-10 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full md:p-2 p-[0.5px] bg-white text-black cursor-pointer"
        onClick={prevSlide}
        aria-label="Previous Slide"
        tabIndex={0}
        disabled={isTransitioning}
      >
        <BsChevronCompactLeft className="md:text-[30px] text-[14px]" />
      </button>

      <div className="w-full h-full relative" ref={slidesContainerRef}>
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isTransitioning ? "" : "duration-0"
          }`}
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / slidesWithClones.length
            }%)`,
          }}
        >
          {slidesWithClones.map((slide, index) => (
            <div
              key={index}
              className={`w-full h-full flex-shrink-0 ${
                slidesToShow > 1 ? "px-2" : ""
              }`}
              style={{ flexBasis: `${100 / slidesToShow}%` }}
            >
              <div className="relative ">
                <img
                  src={slide.img}
                  alt={`Slide Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full md:p-2 p-[0.5px] bg-white text-black cursor-pointer"
        disabled={isTransitioning}
      >
        <BsChevronCompactRight className="md:text-[30px] text-[14px]" />
      </button>
    </div>
  );
}
