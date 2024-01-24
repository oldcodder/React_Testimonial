// TestimonialSlider.js
import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import './TestimonialSlider.css'; // Import the CSS file for animations

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerSlideMobile = 1;
  const testimonialsPerSlideDesktop = 3;
  const laptopScreenWidth = 1024;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    const newTestimonialsPerSlide = screenWidth >= laptopScreenWidth ? testimonialsPerSlideDesktop : testimonialsPerSlideMobile;
    setCurrentIndex(0);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto mt-8 relative">
      <div className="flex absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="text-xl text-gray-600 focus:outline-none">
          &lt;
        </button>
      </div>
      <div className="flex absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={nextSlide} className="text-xl text-gray-600 focus:outline-none">
          &gt;
        </button>
      </div>
      <div className="flex justify-center items-center">
        {testimonials.slice(currentIndex, currentIndex + (window.innerWidth >= laptopScreenWidth ? testimonialsPerSlideDesktop : testimonialsPerSlideMobile)).map((testimonial, index) => (
          <div key={index} className={window.innerWidth >= laptopScreenWidth ? 'mx-4 testimonial-item' : 'mb-4 testimonial-item'}>
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
