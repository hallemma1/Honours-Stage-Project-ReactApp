import React from 'react'
import '../MainContent/MainContent.css'
import GradientScale from '../../assets/MarkerKeys/gradient-scale.png'

const MapKey = () => {
  return (
    <div className='MapKey'>
      <div className='key-items-container'>
        <div className='key-heading'>Penguin Map Key:</div>
        <div className='key-item'>
            <div className='key-item-marker-meaning'>Penguin Counts Gradient</div>
            {/* <div className='key-item-marker-image'>{GradientScale}</div>  */}
            <img src={GradientScale} className='key-item-marker-image-gradient'></img>          
        </div>
        <div className='key-item'>
            <div className='key-item-marker-meaning'>Penguin Counts 50,000+</div>
            <div className='key-item-marker-image-high'></div>
           
        </div>
        <div className='key-item'>
            <div className='key-item-marker-meaning'>Penguin Counts 0</div>
            {/* <div className='key-item-marker-image-low'></div> */}
            <svg className='key-item-marker-image-low' width="80" height="80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,15 65,40 40,65 15,40" fill="#FF0000" stroke="#000000" stroke-width="1"/>
            </svg>
        </div>
      </div>
    </div>
  )
}

export default MapKey
