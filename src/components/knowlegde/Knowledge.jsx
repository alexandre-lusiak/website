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
       
                <div className='knwoledge-container'>
                   <p><SiPhp color='' className='route' size={50} /></p>
                   <p><FaSymfony className='route' size={50}/></p>
                   <p><SiMysql className='route' size={50} /></p>
                   <p><SiMongodb className='route' size={50} /></p>
                   <p><IoLogoNodejs className='route' size={50}/></p>
                   <p><FaReact className='route' size={50}/></p>
                   <p><SiTypescript className='route' size={50} /></p>
                </div>
                  
    )
}

export default Knowledge