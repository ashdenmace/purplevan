import React, { useState, useEffect } from "react";
import "../styles/ImageSlider.css"; 

function ImageSlider({ images = [], interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="image-slider">
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Slide ${idx}`}
          className={`slide ${idx === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
