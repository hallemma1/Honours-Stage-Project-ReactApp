import './PagesStyles/Home.css'
import CarouselComp from '../Components/Carousel/CarouselComp'
import WelcomeComponent from '../Components/WelcomeBack/WelcomeComponent'
import About from '../Components/About/About'
import { usePenguinData } from '../Hooks/usePenguinData';
import React, { useEffect, useState } from 'react';


export default function Home({penguinDetails, scoreDetails}) {

return (
    <div className="Home-page">
        <div className='HomePage-content'>
            <WelcomeComponent penguinDetails={penguinDetails} scoreDetails={scoreDetails}/>
            <CarouselComp/>
            
            
        </div>
    </div>
    
)}