import Map from '../Map/Map';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import MapKey from '../MapKey/MapKey';
import './MainContent.css';
import { fetchLabels } from '../Utility/FileReader';
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


  return (
    <>
    <div className="main-content-container">
      <div className='main-content-container-top'>
        <MapKey/>
        <Map mapData={mapData} />
        <ButtonsPanel updateMapData={updateMapData}/>
      </div>
      <div className='main-content-container-bottom'>
        <SliderComp updateMapData={updateMapData} />
      </div>
    </div>
    
    </>
  );
}

export default MainContent;