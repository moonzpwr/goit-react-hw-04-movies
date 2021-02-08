import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (<ul className="nav-container">
        <li><NavLink to='/' className='navLink' activeClassName='navLink-active' exact>Home</NavLink></li>
        <li><NavLink to='/movies' className='navLink' activeClassName='navLink-active' >Movies</NavLink></li>
      </ul>)
    
}