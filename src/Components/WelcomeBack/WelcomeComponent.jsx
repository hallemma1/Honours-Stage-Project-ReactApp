import './WelcomeStyles.css'
import '../../Pages/PagesStyles/Home.css'
import PenguinCharacter from '../../assets/penguin-2.png'
import { useLocation } from 'react-router-dom';

export default function WelcomeComponent() {

    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const penguinName = params.get('penguinName') || 'Unknown Penguin';
    const score = params.get('score') || 'Unknown Score';




    return (
        <div className="welcome-component">
            <div className='WelcomeComponent-penguin-image-container'>
                <img src={PenguinCharacter} alt="penguin character image" className='WelcomeComponent-penguin-image'></img>
            </div>
            <div className='WelcomeComponent-welcome-message-container'>
                <h1 className='WelcomeComponent-h1'>Welcome back Player!</h1>
                <div className='WelcomeComponent-message-container'>
                    <h3 className='WelcomeComponent-h3'>You played as {penguinName} and caught {score} fish!</h3>
                </div>
            </div>
        </div>
        
    )}