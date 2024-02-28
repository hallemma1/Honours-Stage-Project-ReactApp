import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from './CarouselImage';
import './CarouselStyles.css'
import JumpingGentoo from '../../assets/jumping-gentoo.jpeg';
import LandscapePenguins from '../../assets/landscape-penguins.jpeg'
import PenguinEating from '../../assets/penguin-eating.jpeg'
import PenguinRunning from '../../assets/penguin-running.jpeg'
import UnderwaterSwimming from '../../assets/underwater-swimming.jpeg'
import { useState } from 'react';
import '../../Pages/PagesStyles/Home.css'


function CarouselComp() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-container'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage text="First slide" imagePath={JumpingGentoo}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="First slide" imagePath={LandscapePenguins}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="First slide" imagePath={PenguinEating}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComp;

    // <div className='CarouselComp-carousel-container'>
    //   <Carousel>
    //   <Carousel.Item>
    //     <CarouselImage text="First slide" imagePath={JumpingGentoo}/>
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <CarouselImage text="Second slide" imagePath={PenguinEating}/>
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <CarouselImage text="Third slide" imagePath={PenguinRunning}/>
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <CarouselImage text="Fourth slide" imagePath={LandscapePenguins}/>
    //     <Carousel.Caption>
    //       <h3>Fourth slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <CarouselImage text="Fifth slide" imagePath={UnderwaterSwimming}/>
    //     <Carousel.Caption>
    //       <h3>Fifth slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   </Carousel>
    // </div>

{/* <div className="carousel-container">
<Carousel interval={4000}>
  {carouselItems.map((item, index) => (
    <CarouselItemComp key={index} text={item.text} imagePath={item.imagePath} caption={item.caption} />
  ))}
</Carousel>
</div> */}

