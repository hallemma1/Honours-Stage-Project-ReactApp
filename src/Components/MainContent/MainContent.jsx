import Map from '../Map/Map';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import MapKey from '../MapKey/MapKey';
import './MainContent.css';

import React, { useEffect, useState } from 'react';
import SliderComp from '../Slider/SliderComp';
import { usePenguinData } from '../../Hooks/usePenguinData';


const MainContent = () => {

  const {getInitialData} = usePenguinData(); 

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await getInitialData();
      updateMapData(data);    
    };

    fetchInitialData();

  }, []);

  const [mapData, setMapData] = useState([]);
  const updateMapData = (newData) => {
    setMapData(newData);
  };

  const [selectedButton, setSelectedButton] = useState('');
  const updateSelectedButton = (newSelection) => {
    setSelectedButton(newSelection);
  };


  return (
    <>
    <div className="main-content-container">
      <div className='main-content-info'>
        {selectedButton == "pollution" ? (
        <div className='main-content-info'>
          Showing penguin populations increased by 20%!
        </div>): null}
        {selectedButton == "carbon" ? (
        <div className='main-content-info'>
          Showing penguin populations increased by 25%!
        </div>): null}
        {selectedButton == "overfishing" ? (
        <div className='main-content-info'>
          Showing penguin populations increased by 15%!
        </div>): null}
        {selectedButton == "" ? (
        <div className='main-content-info'>
          
        </div>): null}
      </div>
      <div className='main-content-container-top'>
        <MapKey/>
        <Map mapData={mapData} />
        <ButtonsPanel updateMapData={updateMapData} updateSelectedButton={updateSelectedButton}/>
      </div>
      <div className='main-content-container-bottom'>
        <SliderComp updateMapData={updateMapData} updateSelectedButton={updateSelectedButton}/>
      </div>
    </div>
    
    </>
  );
}

export default MainContent;