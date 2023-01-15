import React, { useState, useEffect } from 'react';


import './App.css';
import Navigation from './components/navigation/Navigation';

import MONGODB from './assets/logonodejs.png'

import Skills from './components/skills/Skills';

import { Tooltip ,ActionIcon, Modal, Card} from '@mantine/core'
import {useClipboard} from "@mantine/hooks";
import { HiArrowDownCircle } from 'react-icons/hi2';

import Contact from './components/contact/Contact';
import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { FaRegCaretSquareDown } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import LOGO from './assets/ladev.png'
import CardProject from './components/card/Card';
import PROJECT from './assets/projetflipper.jpg'
import Caroussel from './components/carrousel/carrousel';

import CarousselProject from './components/carrousel/carouselProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsBoxArrowDown } from 'react-icons/bs';
import About from './components/about/About';

function App() {
  const [opened2, setOpened2] = useState(false);
    const clipboard = useClipboard({timeout: 300});
    const [seeArrow , setSeeArrow] = useState(false)

    const projects = [
      { title:'gang of pizza' , techno:['symfony' , 'react-native'] , id:'1' ,details:['BackOffice','Application mobile'],attribut:'Entreprise de vente de pizza automatisé', img:{PROJECT}}, 
      { title:'Forman' , techno:['symfony' , 'react'] , id:'2' ,details:['BackOffice','Site E-commerce Formation'] , attribut:' Entreprise de Formation Immobilier',img:{PROJECT}}, 
      { title:'Pizza city' , techno:['symfony' ,'react'] , id:'3' ,details:['BackOffice','Application mobile'], attribut:'Entreprise vente de pizza',img:{PROJECT}}, 
      { title:'Service et Transport' , techno:['symfony'] , id:'4' ,details:['BackOffice'], attribut:"Entreprise de Transport de particulier et d'entreprise",img:{PROJECT}}, 
      { title:"Climpropre" , techno:['symfony','react'] , id:'5' ,details:["BackOffice","Application mobile"], attribut:"Entreprise de dépannage de climatisation",img:{PROJECT}}, 

    ]
    
    const [opened, setOpened] = useState(false);
  return (
    <>
   <div className='main'>
      <Navigation/>
      <section id='about' className='me'>                        
        <Caroussel/>
      <div className='hankle'>
      <a href='#skills' ><BsBoxArrowDown className='arrow'   size={100}/> </a>    
      </div>
      </section> 
      </div>

      <section id='about' className='about'>
        <About/>
        <div className='hankle'>
      <a href='#skills' ><BsBoxArrowDown className='arrow'   size={100}/> </a>    
      </div>
        </section>

      <section id='skills' className='skills'>
        <Skills/>
        <div className='hankle'>
      <a href='#skills' ><BsBoxArrowDown className='arrow'   size={100}/> </a>    
      </div>
        </section>

      {/* <section id='project' className='project'>
        
        <h1>Mes Projets Réalisés</h1>
        <div className='project-container1'>
      { projects?.map((project) => {
        return <CardProject  data={project}/>
     })}</div>
        <div className='carrousel-p'>
        <CarousselProject/>
        </div>
        <a  href='#contact'><HiArrowDownCircle className='arrowSkill' size={100}/> </a>
      </section>

      <section className='contact' id='contact'>
        <Contact/>
      </section>
      </div>

    <footer className='footer'>

      <img src={LOGO} className='logo-footer' alt ="logo"/>
      <div>
        <p className='footer-item'>DÉVELOPPEUR INFORMATIQUE INDÉPENDANT 3ans d'experience</p>
        <p className='footer-item' >
          Développeur front-end & back-end freelance,
          je suis à votre disposition pour répondre à tout type de projets de création de sites internet,
          de développement spécifique ou d'applications web.
          Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.
        </p>
      </div>

      <div >
        <p><FaUserAlt/> Alexandre lusiak</p>
        <ActionIcon className='email-paste'
            component="button"
            onClick={() => {
              clipboard.copy('alexandre.lusiak@gmail.com');
              setOpened2((o) => !o);
            }}
          >
             <p><AiFillMail/>Alexandre.lusiak@gmail.com</p>
        </ActionIcon>
        <p><FaMapMarkerAlt/> Lille, 59000</p>
      </div>

    </footer> */}
   </>
  );
}

export default App;
