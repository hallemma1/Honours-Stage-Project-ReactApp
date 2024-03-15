import React from 'react'
import './CollectedPenguins.css'
import PenguinImage from '../../assets/penguin-2.png'

const CollectedPenguinCard = ({name, count}) => {
  return (
    <div className='collected-penguin-card'>
      <div className='card-container'>
        <div className='card-heading'>{name}</div>
        {/* <div className='penguin-image'></div> */}
        {/* Conditionally render the image */}
        {count > 0 ? (
          <div className='penguin-image'>
            {/* Replace 'image_url_here' with the URL of your penguin image */}
            <img src={PenguinImage} alt='Penguin' />
          </div>
        ) : null}
        <div className='collected-count'>{count}</div>
      </div>
    </div>
  )
}

export default CollectedPenguinCard
