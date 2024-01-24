// Testimonial.js
import React from 'react';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600">{testimonial.message}</p>
      <div className="mt-4 flex items-center">
        <img
          src={testimonial.avatar}
          alt={`Avatar of ${testimonial.name}`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-800 font-semibold">{testimonial.name}</p>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
