import React, { useEffect, useState } from 'react';
import '../slider/homeSlider.css';

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/img/slide1.png', heading: 'iam slide heading', content: 'Content for Slide 1' },
    { src: '/img/slide2.png', heading: 'iam slide heading', content: 'Content for Slide 2' },
    { src: '/img/slide3.png', heading: 'iam slide heading', content: 'Content for Slide 3' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 9000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="homeSlider">
      <div className="home">
        <div className="sliderContainer">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="slideContent container">
               <div className="leftContent">
               <h2>{slide.heading}</h2>
               <p>{slide.content}</p>
               </div>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&lt;</button>
        <button className="next" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default HomeSlider;
