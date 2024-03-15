import './WelcomeStyles.css';
import '../../Pages/PagesStyles/Home.css';
import PenguinCharacter from '../../assets/penguin-2.png';
import { useState, useEffect } from 'react';


export default function WelcomeComponent() {


  return (
    <div className="welcome-component">
      <div className='WelcomeComponent-penguin-image-container'>
        <img src={PenguinCharacter} alt="penguin character image" className='WelcomeComponent-penguin-image' />
      </div>
      <div className='WelcomeComponent-welcome-message-container'>
        <h1 className='WelcomeComponent-h1'>Welcome back Player!</h1>
        <div className='WelcomeComponent-message-container'>
          <h3 className='WelcomeComponent-h3'>
            You played as  and caught  fish!
          </h3>
        </div>
      </div>
      <div className='WelcomeComponent-button-container'>
        <button>View Collected Penguins</button>
      </div>
    </div>
  );
}
