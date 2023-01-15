import React, { useState, useEffect } from 'react';
import Contact from './components/contact/Contact';
import Header from './components/headers/Header';
import NewKnowledge from './components/knowlegde/newKnowledge';
import NewSkill from './components/skills/NewSkill';
import './style.css';

import Footer from './footer/Footer';
import About from './components/about/About';

function NEwApp() {
 
  return (
   <div style={{backgroundColor:'#0F0F0F'}} className='App'>
   <Header/>
   <About/>
   <NewSkill />
   <Contact/>
   <Footer />
   
   </div>
  );
}

export default NEwApp;
