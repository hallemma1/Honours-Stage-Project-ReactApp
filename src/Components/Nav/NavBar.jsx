import './NavBar.css';
import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/penguin-logo.png'

export default function NavBar({ navItems}) {

  return (
    <>
      <div className="NavBar">
      <div className="NavBar-heading">
        <img src={logo} alt="alternatetext" className="NavBar-heading-icon"></img>
        <div className='NavBar-heading-text'>Penguins</div>
      </div>
      <div className="NavBar-items">
        {navItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="navlink"
          >
            <NavItem name={item.name}></NavItem>
          </NavLink>
        ))}
      </div>
    </div>

    <div className='NavBar-mobile'>
      <div className="NavBar-heading">
          <img src={logo} alt="alternatetext" className="NavBar-heading-icon"></img>
          <div className='NavBar-heading-text'>Penguins</div>
      </div>
      <div className='NavBar-items'>
        <NavLink
          to={'/'}
          className="navlink">
            <NavItem name={'Home'}></NavItem>
        </NavLink>
      </div>
    </div>

    </>
  );
}
