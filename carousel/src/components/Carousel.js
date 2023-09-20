import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    if (slide === data.slides.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  const prevSlide = () => {
    if (slide === 0) {
      setSlide(data.slides.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.slides.map((item, idx) => {
        return (
          <img
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
            src={item.src}
            alt={item.alt}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
