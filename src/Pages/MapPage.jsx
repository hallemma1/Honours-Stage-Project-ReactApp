import Slider from '../Components/Slider/SliderComp.jsx'
import MainContent from '../Components/MainContent/MainContent.jsx';
import './PagesStyles/MapPage.css'
import { GetPenguinData } from '../Hooks/GetPenguinData.jsx';

export default function MapPage() {

const penguinData =  GetPenguinData();

return (
    <div className="MapPage">
        {/* <Slider/> */}
        <MainContent penguinData={penguinData}/>
    </div>
    
)}