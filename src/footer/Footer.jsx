import React, { useState } from 'react'
import './footer.css'
import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { FaRegCaretSquareDown } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import LOGO from '../assets/ladev.png'
import { ActionIcon } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
const Footer = () => {
    const [opened2, setOpened2] = useState(false);
    const clipboard = useClipboard({timeout: 300});
    const [seeArrow , setSeeArrow] = useState(false)
  return (
    <footer className='footer'>

    <img src={LOGO} className='map' alt ="map"/>
    <div className='footer-item'>
      <p className='footer-item-p'>DÉVELOPPEUR INFORMATIQUE INDÉPENDANT 3ans d'experience</p>
      <p className='footer-item-p'>
        Développeur front-end & back-end freelance,
        je suis à votre disposition pour répondre à tout type de projets de création de sites internet,
        de développement spécifique ou d'applications web.
        Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.
      </p>
    </div>
    <div>
      <p><FaUserAlt style={{marginRight:'10px'}}/> Alexandre lusiak</p>
    
      <p><AiFillMail style={{marginRight:'10px'}}/>Alexandre.lusiak@gmail.com</p>
     
      <p><FaMapMarkerAlt style={{marginRight:'10px'}}/> Lille, 59000</p>
    </div>
    
    </footer>
  )
}

export default Footer