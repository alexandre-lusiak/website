import { ActionIcon, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';
import './navigation.css'
import LOGO from '../../assets/ladev.png'
const Navigation = () => {
    const [opened2, setOpened2] = useState(false);
    const clipboard = useClipboard({timeout: 300});
    return (
        <>
        <nav className='navigation-container'>
         <img style={{width:'100px' ,height:'50px'}} src={LOGO}/>
        <ul>
           <li className='item-navigation'>  <a  href="#about" >A propos</a></li>
           <li className='item-navigation'>  <a  href="#techno" >Mes Technologies</a></li>
           <li className='item-navigation'>  <a  href="#skills" >Mes Compétences</a></li>
           <li className='item-navigation'>  <a  href="#project" >Mes projets</a></li>
           <li className='item-navigation'>  <a  href="#contact" >Contact</a></li>
      </ul>
        </nav>
    <div style={{color:'red',zIndex:10}}>
    {/* <Tooltip 
   
   wrapLines
   withArrow
   transition="fade"
   transitionDuration={200}
   label="Copier ?"
     >
   <Tooltip 
   delay={300}
   position="left"
   label="Copié !"
   opened={opened2}
   >
     <ActionIcon
       component="button"
       onClick={() => {
         clipboard.copy('alexandre.lusiak@gmail.com');
         setOpened2((o) => !o);
       }}
     >
       <p  style={{position:'relative',top:100}}>EMAIL: alexandre.lusiak@gmail.com</p>
   </ActionIcon>
</Tooltip>
         </Tooltip> */}
    </div>
       
        </>
    )
}

export default Navigation;