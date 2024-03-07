import Map from '../Map/Map';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import './MainContent.css';
import { fetchLabels } from '../Utility/FileReader';
import React, { useEffect, useState } from 'react';
import SliderComp from '../Slider/SliderComp';
import { usePenguinData } from '../../Hooks/usePenguinData';


const MainContent = () => {
  useEffect(() => {
    const  fetchData = async() => {
      const lines = await fetchLabels();
      setLabels(lines);
    }
    const fetchInitialData = async () => {
      const data = await getInitialData();
      updateMapData(data);
      
      // Handle the updated data as needed
    };

    fetchData();
    fetchInitialData();
  }, []);

  const [mapData, setMapData] = useState([]);

  const updateMapData = (newData) => {
    setMapData(newData);
  };
  const {getInitialData} = usePenguinData(); 

  // const fetchInitialData = async () => {
  //   const data = await getInitialData();
  //   updateMapData(data);
    
  //   // Handle the updated data as needed
  // };

    const [labels, setLabels] = useState([]);



    console.log("intial dtaa inside main content:", mapData);
  return (
    <>
    <div className="main-content-container">
      <div className='main-content-container-top'>
        <Map mapData={mapData} />
        <ButtonsPanel labels={labels}/>
      </div>
      <div className='main-content-container-bottom'>
        <SliderComp updateMapData={updateMapData} />
      </div>
    </div>
    
    </>
  );
}

export default MainContent;