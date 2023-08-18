import gif1 from "./image/gif1.png"
import gif2 from "./image/gif2.png"
import gif3 from "./image/gif3.png"
import React, { useState, useEffect } from 'react';

const Carousel = () => {
    
    const images = [
        gif1,
        gif2,
        gif3
   ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="slide-container">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide-item">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;