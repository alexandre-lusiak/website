import React, { useState, useEffect } from 'react';


import './App.css';
import Navigation from './components/navigation/Navigation';
import LOGONODEJS from './assets/logonodejs.png'
import MYSQL from './assets/mysqllogo.png'
import HTML from './assets/logohtml.png'
import SASS from './assets/logosass.png'
import SYMFONY from './assets/symfonylogo.png'
import REACT from './assets/logo192.png'
import TYPESCRIPT from './assets/typescriptlogo.png'
import PHP from './assets/logo-php.png'
import PICTURE  from './assets/picture.jpg'

import CSS from './assets/logonodejs.png'
import MONGODB from './assets/logonodejs.png'
import Knowledge from './components/knowlegde/Knowledge';
import Skills from './components/skills/Skills';
import { IoIosCopy } from 'react-icons/io';
import { Tooltip ,ActionIcon, Modal} from '@mantine/core';
import {useClipboard} from "@mantine/hooks";
import { HiArrowDownCircle } from 'react-icons/hi2';
import Typewriter from 'typewriter-effect';
import Contact from './components/contact/Contact';
import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';

import LOGO from './assets/ladev.png'
function App() {
  const [opened2, setOpened2] = useState(false);
    const clipboard = useClipboard({timeout: 300});
    const [seeArrow , setSeeArrow] = useState(false)

    const sentences = [
      { title:'creation de site web' , item:['BackOffice,' , 'site Vitrine'], id:'1' ,class:'one'}, 
      { title:'Application mobile' , item:['IOS,' , 'Androide'], id:'2',class:'two'} ,
      { title:'Integration' , item:['CSS,' , 'SASS'], id:'3',class:'three'} 
    ]
    
    const [opened, setOpened] = useState(false);
  return (
    <>
    <div className="container">

    <Navigation/>
      <section id='about' className='me'>
        {/* <img style={{width:250 , height:300 , textAlign:'left',borderRadius:'50%'}} src={PICTURE} alt="picture of me"/> */}
      <div>{ !seeArrow && <Typewriter
                        onInit={(typewriter) => {
                            
                            typewriter.typeString('<h1>Alexandre lusiak</h1>')
                            typewriter.pauseFor(2000)
                            typewriter.start();
                            typewriter.deleteAll();
                }}
                    /> }
    { !seeArrow &&   <Typewriter 
                        onInit={(typewriter) => {
                              typewriter.typeString('<h2>Developpeur web full stack</h2>')
                              typewriter.pauseFor(2000)
                              typewriter.start();
                              typewriter.deleteAll();
                              typewriter.callFunction(() => {
                                setSeeArrow(true)
                              })
                            
                }}         
                    />  }  </div>                                 
      {/* <p>Anciennement dans l'industrie entant qu'automaticien ,j'ai dédicé de me réorienté durant la période de covid</p> */}
       { seeArrow &&<> <div className='word'>
       {sentences.map((sentence,key) => {
        return <div className={sentence.class} style={{lineHeight:0}} key={sentence.id}>
          <h2 style={{fontSize:"6rem"}}>{sentence.title}</h2>
        <div style={{display:'flex',flexDirection:'row' , justifyContent:'center'}}>  {sentence?.item?.map((item) => {
          return  <p style={{color:'#DF981C',fontSize:'30px',margin:'0.5rem'}}>{item}</p>
          })}
          </div></div>
       })}
       
       </div>  <a href='#skills'><HiArrowDownCircle className='arrow' size={100}/> </a></> }   
    </section>
      <section id='skills' className='skills'>
        <Skills/>
        </section>
      <section id='project' className='PROJECT'>
      <h3>Mes Projet réalisé</h3>
      <h2>Projet sur lesquels j'ai travaillé</h2>
      <ul>
        <li>Gang of pizza</li>
        <li>Climpropre</li>
        <li>pizza city </li>
        <li>forman</li>
        <li>service et transport</li>
        <li>objectif fibres</li>
      </ul>
      </section>
      <section className='contact' id='contact'>
        <Contact/>
      </section>
    </div>
    <footer className='footer'> 
  <img src={LOGO} alt ="logo"/>
  <div>
  <p>DÉVELOPPEUR INFORMATIQUE INDÉPENDANT</p>
  <p style={{width:'400px'}} >
    Développeur front-end & back-end freelance,
    je suis à votre disposition pour répondre à tout type de projets de création de sites internet,
    de développement spécifique ou d'applications web.
    Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.
  </p>
      </div>
      <div >
        <p><FaUserAlt/> Alexandre lusiak</p>
        <p><AiFillMail/>Alexandre.lusiak@gmail.com</p>
        <p><FaMapMarkerAlt/> Lille, 59000</p>
      </div>
    </footer>
    </>
  );
}

export default App;
