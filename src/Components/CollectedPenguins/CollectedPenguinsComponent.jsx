import React from 'react'
import CollectedPenguinCard from './CollectedPenguinCard';
import './CollectedPenguins.css'

const CollectedPenguinsComponent = ({data}) => {

    const collectedPenguins =[
        {name:'Kyla', count:'1'},
        {name:'Diane', count:'0'},
        {name:'Viola', count:'0'},
        {name:'Rapha', count:'1'},
        {name:'Kyla', count:'1'},
        {name:'Diane', count:'0'},
        {name:'Viola', count:'0'},
        {name:'Rapha', count:'1'},
        {name:'Kyla', count:'1'},
        {name:'Diane', count:'0'},
        {name:'Viola', count:'0'},
        {name:'Rapha', count:'1'},
        {name:'Rapha', count:'1'},
    ];

  return (
    <div className='collected-penguins-comp'>

        {data.map((penguin, index) => (
            <CollectedPenguinCard key={index} name={penguin.penguin_name} count={penguin.collected_count}/>
        ))} 

    </div>
  )
}

export default CollectedPenguinsComponent
