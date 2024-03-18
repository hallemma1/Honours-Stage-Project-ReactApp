import './PagesStyles/Home.css'
import CarouselComp from '../Components/Carousel/CarouselComp'
import WelcomeComponent from '../Components/WelcomeBack/WelcomeComponent'
import About from '../Components/About/About'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAboutText } from '../Components/Utility/FileReader';

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
    
)}