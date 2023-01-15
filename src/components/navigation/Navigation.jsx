import { ActionIcon, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';
import './navigation.css'
import LOGO from '../../assets/ladev.png'
import Burgers from '../burger/burder';
import useResize from '../../hook/useResize';
import Typewriter  from 'typewriter-effect';
import SlowText from '../helpers/SlowText';
const Navigation = () => {
    const [opened2, setOpened2] = useState(false);
    const clipboard = useClipboard({timeout: 300});
    let size = useResize()
    const [see, setSee] = useState(false);
const [seeOne, setSeeOne] = useState(false);
const [seeTwo, setSeeTwo] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setSee(true)
      }, 1200);

      setTimeout(() => {
        setSeeOne(true)
      }, 3200);

      setTimeout(() => {
        setSeeTwo(true)
      }, 5500);
    }, [see,seeOne]);
    console.log(see);

    return (
      <header>
         <img className='logo-nav' src={LOGO}/>
         <div style={{marginLeft:'5rem'}}>
    </div>
  
         {  size?.width < 760 ?   <Burgers/>  : 
         
         <nav className='navigation-container'>
           <ul className='nav'>
             <li className='item-navigation'>  
                 <a className='link-nav'  href="#about" >
              <SlowText speed={150} text={"A PROPOS"} />
                </a>
               </li>
             <li className='item-navigation'>
                  <a className='link-nav' href="#skills" > 
                {
              see && <SlowText speed={150} text={"MES SERVICES"} />
             }   </a>
                </li>
            <li className='item-navigation'>
                <a className='link-nav' href="#project" >
                {seeOne  &&      <SlowText speed={150} text={"MON EXPERIENCES"} /> }</a>
                </li>
            <li className='item-navigation'>
                <a className='link-nav' href="#contact" >
                {seeTwo  &&   <SlowText speed={150} text={"CONTACT"} /> 
                }
                </a>
                </li>
          </ul>
        </nav> 
         
      }
       </header>
    )
}

export default Navigation;