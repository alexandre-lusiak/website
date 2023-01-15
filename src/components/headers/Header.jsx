import React from 'react'
import NavBar from '../navigation/NavBar'
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
const Header = () => {
  return (
  <div id="main">
  <NavBar/>
  <div style={{backgroundColor:'rgba(255,255,255,0.7)' }} className='name'>
    <h1 style={{color:'black'}}>ALexandre Lusiak <span>Developpeur</span> Web </h1>
    <p className='details'> Solution et services pour sites web et application mobile</p>
    <div className='header-btns'>
        <a href="https://github.com/alexandre-lusiak" className='cv-btn2'> <AiFillGithub color='purple' size={40}/></a>
        <a href="https://github.com/alexandre-lusiak" className='cv-btn1'><AiFillLinkedin color='purple' size={40}/></a>
    </div>
  </div>
  </div>
  )
}

export default Header