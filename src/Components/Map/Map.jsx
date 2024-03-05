

import './Map.css'
import '../MainContent/MainContent.css'

import ActualMap from './ActualMap';

const Map = () => {

  return (
     <div className='map-container'>
      <div className='map-container-box-shadow'>
        <div className='actual-map'>
          <ActualMap />
        </div>
      </div>
    </div>
  
  )
};

export default Map;
