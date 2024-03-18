import React from 'react'
import CollectedPenguinCard from './CollectedPenguinCard';
import './CollectedPenguins.css'

const CollectedPenguinsComponent = ({data}) => {

  return (
    <div className='collected-penguins-comp'>

        {data.map((penguin, index) => (
            <CollectedPenguinCard key={index} name={penguin.penguin_name} count={penguin.collected_count} score={penguin.score}/>
        ))} 

    </div>
  )
}

export default CollectedPenguinsComponent
