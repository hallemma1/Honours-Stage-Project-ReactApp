import '../MainContent/MainContent.css'
import Button from './Button'


export default function ButtonsPanel({labels}) {

    // const labels = ['emma', 'grace', 'hall', 'jack'];

return (
    <div className="buttons-panel-container"> 
        <div className='buttons-container'>
            {labels.map((label, index) => (
                <Button key={index} label={label}></Button>
            ))} 
        </div>
    </div>
    
)}