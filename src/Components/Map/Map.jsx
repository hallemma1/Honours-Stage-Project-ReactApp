

import './Map.css'
import '../MainContent/MainContent.css'

import ActualMap from './ActualMap';

const Map = (penguinData) => {

  return (
     <div className='map-container'>
      <div className='map-container-box-shadow'>
        <div className='actual-map'>
          <ActualMap penguinData={penguinData}/>
        </div>
      </div>
    </div>
  
  )
};

export default Map;
