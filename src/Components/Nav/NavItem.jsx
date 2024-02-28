import './NavBar.css'


const NavItem = ({name}) => {
return (
    <div className="NavItem-container">
        <div className='NavItem-container-text'>{name}</div>
    </div>
    
)};
export default NavItem;