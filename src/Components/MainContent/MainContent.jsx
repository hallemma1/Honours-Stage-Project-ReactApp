import Map from '../Map/Map';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import './MainContent.css';
import { fetchLabels } from '../Utility/FileReader';
import React, { useEffect, useState } from 'react';
import SliderComp from '../Slider/SliderComp';

const MainContent = () => {

    const [labels, setLabels] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const lines = await fetchLabels();
        setLabels(lines);
      }
  
      fetchData();
    }, []);


  return (
    <>
    <div className="main-content-container">
      <div className='main-content-container-top'>
        <Map />
        <ButtonsPanel labels={labels}/>
      </div>
      <div className='main-content-container-bottom'>
        <SliderComp/>
      </div>
    </div>
    
    </>
  );
}

export default MainContent;