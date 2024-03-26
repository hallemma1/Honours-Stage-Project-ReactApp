
import '../MainContent/MainContent.css'

import ActualMap from './ActualMap';

const Map = ({mapData}) => {

  return (
     <div className='map-container'>
      <div className='map-container-box-shadow'>
        <div className='actual-map'>
          <ActualMap mapData={mapData} />
        </div>
      </div>
    </div>
  
  )
};

export default Map;
