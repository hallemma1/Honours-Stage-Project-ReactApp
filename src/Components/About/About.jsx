import './About.css'

export default function About({text}) {
    return (
        <div className="AboutComponent">
            <h3 className="AboutComponent-heading">About</h3>
            <div className="AboutComponent-paragraph">
                {text}
            </div>
        </div>
        
    )}