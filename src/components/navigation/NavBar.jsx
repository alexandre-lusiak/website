import React from "react";
import { Link } from "react-scroll";
import logo from '../../assets/ladev.png'
const NavBar =() => {
return (
    <div>
        <nav>
        <Link to='main' className ="logo">
            <img  src={logo} alt ="logo" />
        </Link>
        <ul className="menu">
            <li>
                <Link to='features' className="active" offset={-180}  duration={500}>A Propos</Link>
            </li>
            <li>
                <Link to='services' offset={-180} duration={500}  >Services</Link>
            </li>
            <li>
                <Link to='services' offset={-150}  duration={500} >Projets</Link>
            </li>
            <li>
                <Link to='contact'offset={-180}  duration={500}  >Contact</Link>
            </li>
        
        </ul>
        </nav>
    </div>
)
}


export default NavBar