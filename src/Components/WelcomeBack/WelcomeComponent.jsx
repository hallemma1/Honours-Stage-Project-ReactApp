import './WelcomeStyles.css';
import '../../Pages/PagesStyles/Home.css';
import PenguinCharacter from '../../assets/penguin-2.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function WelcomeComponent() {
//   const [penguinDetails, setPenguinDetails] = useState('Unknown Penguin');
//   const [scoreDetails, setScoreDetails] = useState('Unknown Score');
//   const { search } = useLocation();
//   const params = new URLSearchParams(search);
//   const navigate = useNavigate();


//   useEffect(() => {
//     const penguinName = params.get('penguinName') || 'Unknown Penguin';
//     setPenguinDetails(penguinName);

//     const score = params.get('score') || 'Unknown Score';
//     setScoreDetails(score);

//     navigate(`/penguinName=${penguinName}&score=${score}`);
//   }, [params]);

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
    </div>
  );
}
