import React from 'react';
import './CarouselStyles.css';

const CarouselImage = ({ text, imagePath }) => (
  <div className='CarouselImage-image-container'>
    <div className='CarouselImage-image' style={{ backgroundImage: `url(${imagePath})`, backgroundSize: 'cover' }}></div>
  </div>
);

export default CarouselImage;
