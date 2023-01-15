import React, { useState, useEffect } from 'react';

import { Menu, Button, Text, Burger } from '@mantine/core';
import './burger.css'
import { GrContactInfo } from 'react-icons/gr';
import {  FaRegHandshake } from 'react-icons/fa';

function Burgers() {
    const [opened, setOpened] = useState(false);
    
    return (
        <>
      <Burger
       style={{backgroundColor:'rgb(255,140,0)',position:'absolute',top:50 ,right:10}}
       size={'xl'}
       opened={opened}
       onClick={() => setOpened((o) => !o)}
       
     />
      { opened && 
      <div className='dropdown'>
        <a className='burger-item'   href="#about" >A PROPOS</a>
        <a className='burger-item' href="#skills" >MES SERVICES</a>
        <a className='burger-item' href="#project" >EXPERIENCES</a>
        <a className='burger-item' href="#contact" >CONTACT</a>
             
         </div>
      }   
         </>
    // <Menu offset={30} style={{marginLeft:'8rem' }} closeOnItemClick={false} openDelay={100}  width={300}>
    //   <Menu.Target>
    //   <Burger
    //   style={{backgroundColor:'blue'}}
    //   size={'xl'}
    //   opened={opened}
    //   onClick={() => setOpened((o) => !o)}
      
    // />
    //   </Menu.Target>

    //   <Menu.Dropdown className='dropdown' >
    //     <Menu.Item className='burger-item-container' ><a className='burger-item'   href="#about" >A PROPOS</a></Menu.Item>
    //     <Menu.Item className='burger-item-container' ><a className='burger-item' href="#skills" >MES SERVICES</a></Menu.Item>
    //     <Menu.Item  className='burger-item-container'><a className='burger-item' href="#project" >EXPERIENCES</a></Menu.Item>
    //     <Menu.Item className='burger-item-container' ><a className='burger-item' href="#contact" >CONTACT</a></Menu.Item>
    //   </Menu.Dropdown>
    // </Menu>
  );
}

export default Burgers;