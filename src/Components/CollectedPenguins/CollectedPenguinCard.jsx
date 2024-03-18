import React from 'react'
import './CollectedPenguins.css'
import PenguinImage from '../../assets/penguin-2.png'

const CollectedPenguinCard = ({name, count, score}) => {
  return (
    <div className='collected-penguin-card'>
      <div className='card-container'>
        <div className='card-heading'>{name}</div>

        {/* Conditionally render the image */}
        {count > 0 ? (
          <div className='penguin-image'>
            <img src={PenguinImage} alt='Penguin' />
          </div>
        ) : null}
        {count > 1 ? (
          <div className='collected-count'></div>
        ): null}
        {count > 0 ? (
          <>
          <div className='collected-penguin-score-container'>
            <div className='collected-penguin-score-word'>score:</div>
            <div className='collected-penguin-score-value'>{score}</div>
          </div>
          </>
        ) : null }
      </div>
    </div>
  )
}

export default CollectedPenguinCard
