import React, { useState } from 'react';

const CarouselImage = ({ text, imagePath }) => {

return(
  <div className='CarouselImage-image-container'>
    <div className='CarouselImage-image' style={{ backgroundImage: `url(${imagePath})`, backgroundSize: 'cover' }}></div>
  </div>

)};

export default CarouselImage;
