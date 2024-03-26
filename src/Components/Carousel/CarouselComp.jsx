import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from './CarouselImage';
import JumpingGentoo from '../../assets/jumping-gentoo.jpeg';
import PenguinPebble from '../../assets/penguin-pebble.jpg';
import PenguinEating from '../../assets/penguin-eating.jpeg';
import PenguinShallowWater from '../../assets/penguins-shallow-water.jpeg';
import '../../Pages/PagesStyles/Home.css';
import { MdOutlinePause } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";

function CarouselComp() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div className='carousel-container'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={isPaused}>
        <Carousel.Item>
          <CarouselImage text="First slide" imagePath={JumpingGentoo} />
          <Carousel.Caption>
            <h3>Gentoo Penguin Diving into Water</h3>
            <p>gentoo penguins are the fastest swimmers at 22mph</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="First slide" imagePath={PenguinPebble} />
          <Carousel.Caption>
            <h3>Gentoo Penguin Preparing for Courtship</h3>
            <p>some penguins offer pebbles to mates to try and impress them.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="First slide" imagePath={PenguinEating} />
          <Carousel.Caption>
            <h3>Penguin feeding young chick</h3>
            <p>
              Adult penguins forage for their chicks to provide food for them
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Fourth slide" imagePath={PenguinShallowWater} />
          <Carousel.Caption>
            <h3>Two penguins running through water</h3>
            <p>
              gentoo penguins can stay under water for roughly 7 minutes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className='carousel-buttons-container'>
        <div className='carousel-button' onClick={handlePause}><MdOutlinePause /></div>
        <div className='carousel-button' onClick={handleResume}><MdPlayArrow /></div>
      </div> */}
    </div>
  );
}

export default CarouselComp;
