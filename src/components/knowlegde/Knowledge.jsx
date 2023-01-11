import React, { useState, useEffect } from 'react';

import LOGONODEJS from '../..//assets/logonodejs.png'
import MYSQL from '../../assets/mysqllogo.png'
import HTML from '../../assets/logohtml.png'
import SASS from '../../assets/logosass.png'
import SYMFONY from '../../assets/symfonylogo.png'
import REACT from '../../assets/logo192.png'
import TYPESCRIPT from '../../assets/ts.png'
import PHP from '../../assets/logo-php.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { IoPlanetSharp } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { FaSymfony } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import './knowledge.css'
import { Modal } from '@mantine/core';
const Knowledge = () => {

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div className='knowledge-container' >
                {/* <IoPlanetSharp size={200} /> */}
                    <div style={{display:'flex' ,flexDirection:'column'}}>
                    <img src={SASS} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />
                    <img src={HTML} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />
                    <img src={REACT} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />
                    <img src={TYPESCRIPT} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />
                    </div>
                    <div style={{display:'flex' ,flexDirection:'column'}}>
                    <img src={PHP} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />
                    <img src={SYMFONY} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />
                    <img src={MYSQL} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />
                    <img src={LOGONODEJS} className='route' style={{ widht: 100, height: 100 }} alt="logo-tech" />

                </div>

            </div>




            {/* <ul>
      <img src={SASS} style={{widht:100,height:100}} alt="logo-tech"/>
      <img src={HTML} style={{widht:100,height:100}} alt="logo-tech"/>
      <img src={REACT} style={{widht:100,height:100}} alt="logo-tech"/>
      <img src={TYPESCRIPT} style={{widht:100,height:100}} alt="logo-tech"/>
      <img src={PHP} style={{widht:100,height:100}} alt="logo-tech"/>
      <img src={SYMFONY} style={{widht:100,height:100}} alt="logo-tech"/>
      <img src={MYSQL} style={{widht:100,height:100}} alt="logo-tech"/>
      <img src={LOGONODEJS} style={{widht:100,height:100}} alt="logo-tech"/>

    </ul> */}
                    </div>
    )
}

export default Knowledge