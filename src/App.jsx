
import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const App = () => {
  const testimonialsData = [
    {
      name: 'John Doe1',
      position: 'CEO',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna vel tortor convallis bibendum. Aenean sed varius justo.',
      avatar: '/test1.png'
    },
    {
      name: 'Jane Smith2',
      position: 'Designer',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus libero vel lacus facilisis commodo.',
      avatar: '/test2.png'
    },
    {
      name: 'Bob Johnson3',
      position: 'Developer',
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mauris nec turpis commodo varius.',
      avatar: '/test1.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna vel tortor convallis bibendum. Aenean sed varius justo.',
      avatar: '/test2.png'
    },
    {
      name: 'Jane Smith',
      position: 'Designer',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus libero vel lacus facilisis commodo.',
      avatar: '/test1.png'
    },
    {
      name: 'Bob Johnson',
      position: 'Developer',
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mauris nec turpis commodo varius.',
      avatar: '/test2.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna vel tortor convallis bibendum. Aenean sed varius justo.',
      avatar: '/test2.png'
    },
    {
      name: 'Jane Smith',
      position: 'Designer',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus libero vel lacus facilisis commodo.',
      avatar: '/test1.png'
    },
    {
      name: 'Bob Johnson',
      position: 'Developer',
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mauris nec turpis commodo varius.',
      avatar: '/test2.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna vel tortor convallis bibendum. Aenean sed varius justo.',
      avatar: '/test2.png'
    },
    {
      name: 'Jane Smith',
      position: 'Designer',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus libero vel lacus facilisis commodo.',
      avatar: '/test1.png'
    },
    {
      name: 'Bob Johnson',
      position: 'Developer',
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mauris nec turpis commodo varius.',
      avatar: '/test2.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna vel tortor convallis bibendum. Aenean sed varius justo.',
      avatar: '/test2.png'
    },
    {
      name: 'Jane Smith',
      position: 'Designer',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus libero vel lacus facilisis commodo.',
      avatar: '/test1.png'
    },
    {
      name: 'Bob Johnson',
      position: 'Developer',
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mauris nec turpis commodo varius.',
      avatar: '/test2.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna vel tortor convallis bibendum. Aenean sed varius justo.',
      avatar: '/test2.png'
    },
    {
      name: 'Jane Smith',
      position: 'Designer',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus libero vel lacus facilisis commodo.',
      avatar: '/test1.png'
    },
    {
      name: 'Bob Johnson',
      position: 'Developer',
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel mauris nec turpis commodo varius.',
      avatar: '/test2.png'
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <TestimonialSlider testimonials={testimonialsData} />
    </div>
  );
};

export default App;
