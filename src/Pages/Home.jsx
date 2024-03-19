import './PagesStyles/Home.css'
import CarouselComp from '../Components/Carousel/CarouselComp'
import WelcomeComponent from '../Components/WelcomeBack/WelcomeComponent'
import About from '../Components/About/About'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAboutText } from '../Components/Utility/FileReader';
import PenguinCharacter from '../assets/penguin-2.png';

export default function Home({penguinDetails, scoreDetails}) {

    const [text, setText] = useState("");

    useEffect(() => {
      async function fetchText() {
        const text = await fetchAboutText();
        setText(text);
      }
  
      fetchText();
      console.log(text);
    }, []);

return (
    <>
        <div className="Home-page">
            <div className='HomePage-content'>
                <WelcomeComponent penguinDetails={penguinDetails} scoreDetails={scoreDetails}/>
                <div className='HomePage-lower-section'>
                    <CarouselComp/> 
                    <div className='HomePage-lower-section-right-side'>
                        <div className='HomePage-lower-section-right-top'>
                        <Link to="/Pages/ViewPenguinsPage">
                            <button className='HomePage-Buttons-penguins'>View My Penguins</button>
                        </Link>
                        <Link to="/Pages/MapPage">
                            <button className='HomePage-Buttons-map'>Explore Penguin Map</button>
                        </Link>
                        </div>
                        <About text={text}/>                     
                    </div>
                </div>        
            </div>
        </div>
        <div className='Home-page-mobile'>
            <div className='home-page-mobile-penguin-image'>
                <img src={PenguinCharacter} alt="penguin character image" className='mobile-penguin-image' />
            </div>
            <div className='home-page-mobile-welcome-text'>You played as {penguinDetails} and caught {scoreDetails} fish!</div>
            <div className='home-page-mobile-transfer-text'>Transfer to laptop or desktop:</div>
        </div>
    </>
)}