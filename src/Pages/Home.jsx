import './PagesStyles/Home.css'
import CarouselComp from '../Components/Carousel/CarouselComp'
import WelcomeComponent from '../Components/WelcomeBack/WelcomeComponent'
import About from '../Components/About/About'

export default function Home() {
return (
    <div className="Home-page">
        <div className='HomePage-content'>
            <WelcomeComponent/>
            <CarouselComp/>
            
            
        </div>
    </div>
    
)}