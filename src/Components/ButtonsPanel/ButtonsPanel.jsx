import '../MainContent/MainContent.css'
import Button from './Button'
import { usePenguinData } from '../../Hooks/usePenguinData';
import { useEffect } from 'react';

const ButtonsPanel = ({updateMapData}) => {
    //labels

    const {getPollutionChangeData} = usePenguinData(); 
    const {getCarbonEmissionsChangeData} = usePenguinData(); 
    const {getOverfishingChangeData} = usePenguinData(); 
  
    const handlePollutionButtonClick = async () => {
        const data = await getPollutionChangeData();
        updateMapData(data);
        console.log("pollution:", data);
      };
    
      const handleCarbonEmissionsButtonClick = async () => {
        const data = await getCarbonEmissionsChangeData();
        updateMapData(data);
        console.log("carbon:", data);
      };
    
      const handleOverfishingButtonClick = async () => {
        const data = await getOverfishingChangeData();
        updateMapData(data);
        console.log("overfishing:", data);
      };

//

return (
    <div className="buttons-panel-container"> 
        <div className='buttons-container'>
            <Button onClick={handlePollutionButtonClick} updateMapData={updateMapData} label={'Pollution'}></Button>
            <Button onClick={handleCarbonEmissionsButtonClick} updateMapData={updateMapData} label={'Carbon Emissions'}></Button>
            <Button onClick={handleOverfishingButtonClick} updateMapData={updateMapData} label={'Overfishing'}></Button>
            {/* {labels.map((label, index) => (
                <Button key={index} label={label} handleButtonSelect={handleButtonSelect}></Button>
            ))}  */}
        </div>
    </div>
    
)}
export default ButtonsPanel;