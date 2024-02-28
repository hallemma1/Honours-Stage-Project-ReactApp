import './WelcomeStyles.css'
import '../../Pages/PagesStyles/Home.css'
import PenguinCharacter from '../../assets/penguin-2.png'

export default function WelcomeComponent() {
    return (
        <div className="welcome-component">
            <div className='WelcomeComponent-penguin-image-container'>
                <img src={PenguinCharacter} alt="penguin character image" className='WelcomeComponent-penguin-image'></img>
            </div>
            <div className='WelcomeComponent-welcome-message-container'>
                <h1 className='WelcomeComponent-h1'>Welcome back Player!</h1>
                <div className='WelcomeComponent-message-container'>
                    <h3 className='WelcomeComponent-h3'>You played as Leo and helped him catch 15 fish!</h3>
                </div>
            </div>
        </div>
        
    )}