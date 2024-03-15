import './PagesStyles/ViewPenguinsPage.css'
import CollectedPenguinsComponent from '../Components/CollectedPenguins/CollectedPenguinsComponent'
import { usePenguinData } from '../Hooks/usePenguinData';
import React, { useEffect, useState } from 'react';



export default function ViewPenguinsPage() {

    const [collectedPenguinsData, setCollectedPenguinsData] = useState([]);
    const updateCollectedPenguinsData = (newData) => {
        setCollectedPenguinsData(newData);
    };

    const {getCollectedPenguinsData} = usePenguinData();

    useEffect(() => {

        const fetchCollectedPenguinsData = async () => {
          const data = await getCollectedPenguinsData();
          updateCollectedPenguinsData(data);    
        };
    
        fetchCollectedPenguinsData();
    
      }, []);

return (
    <div className="ViewPenguinPage">
        <CollectedPenguinsComponent data={collectedPenguinsData}/>
    </div>
    
)}