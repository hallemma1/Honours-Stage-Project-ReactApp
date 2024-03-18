import React from 'react'
import CollectedPenguinCard from './CollectedPenguinCard';
import './CollectedPenguins.css'

const CollectedPenguinsComponent = ({data}) => {

  return (
    <div className='collected-penguins-comp'>

        {data.map((penguin, index) => (
            <CollectedPenguinCard key={index} name={penguin.penguin_name} count={penguin.collected_count} score={penguin.score}/>
        ))} 
        <div className='collected-penguins-comp-key-container'>
            <div className='collected-penguins-comp-key'></div>
            <div className='collected-penguins-comp-key-meaning'>More than one collected</div>
        </div>
    </div>
  )
}

export default CollectedPenguinsComponent
