import React from 'react'
import '../MainContent/MainContent.css'
import { LiaHandPointer } from "react-icons/lia";

const MapKey = () => {

  const calculateColor = (percentage, color1, color2) => {
    const r = Math.round(color1[0] + (color2[0] - color1[0]) * percentage);
    const g = Math.round(color1[1] + (color2[1] - color1[1]) * percentage);
    const b = Math.round(color1[2] + (color2[2] - color1[2]) * percentage);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Gradient colors
  const color1 = [239, 129, 199]; // secondaryColorLight
  const color2 = [151, 33, 108]; // secondaryColorDark
 
  // Number of circles
  const numCircles = 6; // Adjust as needed

  // Calculate circle colors
  const circleColors = [];
  for (let i = 0; i < numCircles; i++) {
    const percentage = i / (numCircles - 1);
    const color = calculateColor(percentage, color1, color2);
    circleColors.push(color);
  }


  return (
    <div className='MapKey'>
      <div className='key-items-container'>
        <div className='key-heading'>Penguin Map Key:</div>
        <div className='key-item'>
            <div className='key-item-marker-meaning'>Penguin Counts Gradient</div>
            <div className="color-gradiant-container">
              {/* Color gradient */}
              <div className="color-gradient">
                <div className='color-gradiant-label-low'>Low</div>
                <div className='color-gradiant-label-high'>High</div>
              </div>
              {/* Circles */}
              <div className="circle-container">
                {circleColors.map((color, index) => (
                  <div
                    key={index}
                    className="circle"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>         
        </div>
        <div className='key-item'>
            <div className='key-item-marker-meaning'>Penguin Counts 50,000+</div>
            <div className='key-item-marker-image-high'></div>          
        </div>
        <div className='key-item'>
            <div className='key-item-marker-meaning'>Penguin Counts 0</div>
            <svg className='key-item-marker-image-low' width="80" height="80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,15 65,40 40,65 15,40" fill="#FF0000" stroke="#000000" strokeWidth="1"/>
            </svg>
        </div>
        <div className='key-item-instruction'>
          <div className='key-item-instruction-symbol'><LiaHandPointer /></div>
          <div className='key-item-instruction-meaning'>Click a marker to see the penguin count at that location</div>
        </div>
      </div>
    </div>
  )
}

export default MapKey
