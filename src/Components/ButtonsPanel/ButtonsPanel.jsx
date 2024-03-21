import '../MainContent/MainContent.css'
import Button from './Button'
import { usePenguinData } from '../../Hooks/usePenguinData';
import { useEffect } from 'react';

const ButtonsPanel = ({updateMapData, updateSelectedButton}) => {

    const {getPollutionChangeData} = usePenguinData(); 
    const {getCarbonEmissionsChangeData} = usePenguinData(); 
    const {getOverfishingChangeData} = usePenguinData();    
    const {getInitialData} = usePenguinData(); 

    const handlePollutionButtonClick = async () => {
        const data = await getPollutionChangeData();
        updateMapData(data);
        console.log("pollution:", data);
        updateSelectedButton('pollution');
      };
    
      const handleCarbonEmissionsButtonClick = async () => {
        const data = await getCarbonEmissionsChangeData();
        updateMapData(data);
        console.log("carbon:", data);
        updateSelectedButton('carbon');
      };
    
      const handleOverfishingButtonClick = async () => {
        const data = await getOverfishingChangeData();
        updateMapData(data);
        console.log("overfishing:", data);
        updateSelectedButton('overfishing');
      };

      const handleResetButtonClick = async () => {
        const data = await getInitialData();
        updateMapData(data);
        console.log("reset:", data);
        updateSelectedButton('');
      };

return (
    <div className="buttons-panel-container"> 
        <div className='buttons-container'>
            <Button className="change-button" onClick={handlePollutionButtonClick} updateMapData={updateMapData} label={'Reduce Pollution by 10%'}></Button>
            <Button className="change-button" onClick={handleCarbonEmissionsButtonClick} updateMapData={updateMapData} label={'Reduce Carbon Emissions by 10%'}></Button>
            <Button className="change-button" onClick={handleOverfishingButtonClick} updateMapData={updateMapData} label={'Reduce Overfishing by 10%'}></Button>
            <Button className="reset-button" onClick={handleResetButtonClick} updateMapData={updateMapData} label={'Reset'}></Button>
        </div>
    </div>
    
)}
export default ButtonsPanel;