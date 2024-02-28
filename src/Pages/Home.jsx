import './PagesStyles/Home.css'
import CarouselComp from '../Components/Carousel/CarouselComp'
import WelcomeComponent from '../Components/WelcomeBack/WelcomeComponent'

export default function Home() {
return (
    <div className="Home-page">
        <div className='HomePage-content'>
            <WelcomeComponent/>
            <CarouselComp/>
            
        </div>
    </div>
    
)}